const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const { createFilePath } = require(`gatsby-source-filesystem`)

const convertMarkdown = require('./utils/markdown')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
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

    const { createNodeField, createNode } = actions

    if (node.extension === `md`) {

        const metaPath = `${node.absolutePath.slice(0, -2)}json`

        if (fs.existsSync(metaPath)) {

            const slug = createFilePath({ node, getNode, basePath: `pages` })

            const content = fs.readFileSync(node.absolutePath, 'utf-8')

            const html = convertMarkdown(content)

            const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))

            const fieldData = {
                ...meta,
                html,
                slug
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
                }
            })
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allRenderedMarkdownPost {
            edges {
                node {
                    id
                    description
                    slug
                    subtitle
                    title
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
            context: node,
        })
    })
}