// pretty much just a modded version of this post: https://andrewingram.net/posts/automatic-social-cards-with-gatsby/
const { writeFile, readFile } = require('fs')
const { resolve } = require('path')
const { createHash } = require('crypto')
const { promisify } = require('util')

const writeFileAsync = promisify(writeFile)
const readFileAsync = promisify(readFile)

/**
 * Writes a file to the cache location
 */
const writeCachedFile = async (key, contents, extension) => {
  // I'm using the title as the key for the hash, because it's the only
  // thing which impacts the final image. If you were to have something
  // more elaborate, you should just use the HTML as the hash instead.
  const fileName = createHash('md5').update(key).digest('hex') + '.' + extension
  const absolutePath = resolve('public', fileName)
  await writeFileAsync(absolutePath, contents)
  return { fileName, absolutePath }
}
/*
 * Returns the path to an image generated from the provided HTML.
 */
const imageFromHtml = async (browser, title, html) => {
  // Write the HTML to a file and get its filename
  const { filePath, absolutePath } = await writeCachedFile(title, html, 'html')
  const page = await browser.newPage()

  await page.setDefaultNavigationTimeout(0)

  // Navigate to our saved HTML
  await page.goto(`file://${absolutePath}`, {
    timeout: 0,
  })
  // My HTML includes webfonts, so make sure they're ready
  await page.evaluateHandle('document.fonts.ready')
  // Set the viewport to the desired dimensions of the image
  await page.setViewport({ width: 1024, height: 680 })
  // Take a screenshot, we use PNG because it's higher quality - and the
  // compression works well for images which contain a lot of areas of
  // solid colour.
  const file = await page.screenshot({ type: 'png' })
  await page.close()

  // Write the screenshot to a file, and return its filename
  const fileResult = await writeCachedFile(title, file, 'png')

  return fileResult.fileName
}

/*
 * Takes a post (probably a Gatsby node of some kind), generates some HTML,
 * saves a screenshot, then returns the path to the saved image.
 */
module.exports = async (browser, title, subtitle, image) => {
  // This renders some React to HTML, nothing too clever here.
  // I haven't included my actual code for this because it's
  // highly specific to my preferences.
  const html = await getSocialCardHtml(title, subtitle, image)
  const result = imageFromHtml(browser, title, html)
  return result
}

const getSocialCardHtml = async (title, subtitle, image) => {
  const templatePath = resolve('utils/og-image/template.html')
  const template = await readFileAsync(templatePath, 'utf-8')

  let imagePath

  if (image && image.length) {
    imagePath = resolve('static/' + image)
  } else {
    imagePath = resolve('utils/og-image/IMAGE_PLACEHOLDER.jpg')
  }

  return template
    .replace('TITLE_PLACEHOLDER', title || '')
    .replace('SUBTITLE_PLACEHOLDER', subtitle || '')
    .replace('IMAGE_PLACEHOLDER.jpg', imagePath)
}
