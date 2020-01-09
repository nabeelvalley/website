import React from 'react'
import { Converter } from 'showdown'
import * as showdownHighlighter from 'showdown-highlight'

import './Markdown.css'

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

const convertMarkdownToHtml = (text) => {
    const converter = new Converter({
        headerLevelStart: 2,
        parseImgDimensions: true,
        extensions: [showdownHighlighter, externalLinksInNewWindow],
        simplifiedAutoLink: true,
        tables: true,
        ghCompatibleHeaderId: true,
        disableForced4SpacesIndentedSublists: true
    })
    const html = converter.makeHtml(text)
    return html
}

const Markdown = ({ text }) => <div className="Markdown" dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(text) }}></div>

export default Markdown