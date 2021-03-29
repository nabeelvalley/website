const Converter = require('showdown').Converter
const showdownHighlighter = require('showdown-highlight')
const jsdom = require('jsdom')

const latexFilterExtension = require('./latexFilterExtension')

const ipynb = require('ipynb2html')

const externalLinksInNewWindow = {
  type: 'output',
  regex: /<a\shref[^>]+>/g,
  replace: (text) => {
    var url = text.match(/"(.*?)"/)[1]
    if (url.includes('http://') || url.includes('https://')) {
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">'
    }
    return text
  },
}

const scrollableTables = {
  type: 'output',
  regex: /<table[^>]*>(?:.|\n)*?<\/table>/,
  replace: (text) => `<div class="scrollable">${text}</div>`,
}

const codeTab = {
  type: 'lang',
  regex: /^`([^`]*)`$/gm,
  replace: (text) =>
    `<p class="code-tab"><code>${text.slice(1, -1)}</code></p>`,
}

const codeSummary = {
  type: 'output',
  regex: /<summary>`([^`]*)`<\/summary>/gm,
  replace: (text) => `${text.replace('`', '<code>').replace('`', '</code>')}`,
}

const doubleDotImagePathCorrect = {
  type: 'output',
  regex: /<img.*src="\.\.\//gm,
  replace: (text) => `${text.replace('src="../', 'src="../../')}`,
}

const singleDotImagePathCorrect = {
  type: 'output',
  regex: /<img.*src="\.\//gm,
  replace: (text) => `${text.replace('src="./', 'src="../')}`,
}

const convertMarkdownToHtml = (text) => {
  const converter = new Converter({
    headerLevelStart: 2,
    parseImgDimensions: true,
    extensions: [
      latexFilterExtension,
      codeTab,
      showdownHighlighter,
      externalLinksInNewWindow,
      scrollableTables,
      codeSummary,
      doubleDotImagePathCorrect,
      singleDotImagePathCorrect,
    ],
    simplifiedAutoLink: true,
    tables: true,
    ghCompatibleHeaderId: true,
    disableForced4SpacesIndentedSublists: true,
  })

  const html = converter.makeHtml(text)

  return html
}

const convertJupyterToMarkdown = (content) => {
  const window = new jsdom.JSDOM().window
  const document = window.document

  const renderNotebook = ipynb.createRenderer(document)

  const notebook = JSON.parse(content)

  // remove all inline style tags
  let renderedContent = renderNotebook(notebook)
  renderedContent
    .querySelectorAll('style')
    .forEach((el) => el.parentNode.removeChild(el))

  const html = renderedContent.innerHTML
    .replace(/class="dataframe"/g, '')
    .replace(/border="1"/g, '')

  const htmlWithKatex = new Converter({
    extensions: [],
  }).makeHtml(html)

  return htmlWithKatex
}

module.exports = { convertMarkdownToHtml, convertJupyterToMarkdown }
