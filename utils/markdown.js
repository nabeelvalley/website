const Converter = require('showdown').Converter
const showdownHighlighter = require('showdown-highlight')

const externalLinksInNewWindow = {
    type: 'output',
    regex: /<a\shref[^>]+>/g,
    replace: (text) => {
        var url = text.match(/"(.*?)"/)[1]
        if (url.includes('http://') || url.includes('https://')) {
            return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">'
        }
        return text
    }
}

const scrollableTables = {
    type: 'output',
    regex: /<table[^>]*>(?:.|\n)*?<\/table>/,
    replace: (text) => `<div class="scrollable">${text}</div>`
}

const convertMarkdownToHtml = (text) => {
    const converter = new Converter({
        headerLevelStart: 2,
        parseImgDimensions: true,
        extensions: [showdownHighlighter, externalLinksInNewWindow, scrollableTables],
        simplifiedAutoLink: true,
        tables: true,
        ghCompatibleHeaderId: true,
        disableForced4SpacesIndentedSublists: true
    })
    const html = converter.makeHtml(text)
    return html
}

module.exports = convertMarkdownToHtml