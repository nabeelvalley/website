const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { promisify } = require('util')
const chromium = require('chrome-aws-lambda')

const { createFilePath } = require(`gatsby-source-filesystem`)

const {
  convertMarkdownToHtml,
  convertJupyterToMarkdown,
} = require('./utils/markdown')
const generatePostImage = require('./utils/generatePostImage')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /sal\.js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreateNode = async ({ node, getNode, actions }) => {
  //   setTimeout(async () => {
  const { createNode } = actions

  if (node.extension === `md` || node.extension === `ipynb`) {
    const metaPath =
      node.extension === `md`
        ? `${node.absolutePath.slice(0, -2)}json`
        : `${node.absolutePath.slice(0, -5)}json`

    const dir = path.basename(path.dirname(metaPath))

    if (fs.existsSync(metaPath)) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
        .replace(/^\/content/, '')
        .replace(/\s/g, '-')
        .toLowerCase()

      const content = fs.readFileSync(node.absolutePath, 'utf-8')

      let html

      if (node.extension === `ipynb`) {
        html = convertJupyterToMarkdown(content)
      } else {
        html = convertMarkdownToHtml(content)
      }

      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))

      const browser = await chromium.puppeteer.launch({
        args: [...chromium.args, '--single-process'],
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
        timeout: 0,
      })

      const ogImage =
        '/' +
        (await generatePostImage(
          browser,
          meta.title,
          meta.subtitle || meta.description,
          meta.image
        ))

      const fieldData = {
        ogImage,
        ...meta,
        html,
        slug,
        dir,
      }

      createNode({
        // Data for the node.
        ...fieldData,

        // Required fields.
        id: `RenderedMarkdownPost${slug}`,
        children: [],
        internal: {
          type: `RenderedMarkdownPost`,
          contentDigest: crypto
            .createHash(`md5`)
            .update(JSON.stringify(fieldData))
            .digest(`hex`),
        },
      })
    }
  }
  //   }, 0)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allRenderedMarkdownPost {
        edges {
          node {
            id
            title
            description
            subtitle
            image
            slug
            html
          }
        }
      }
    }
  `)

  result.data.allRenderedMarkdownPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/Post/Post.js`),
      context: {
        slug: node.slug,
        image: node.image,
      },
    })
  })
}
