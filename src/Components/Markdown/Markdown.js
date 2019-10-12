import React from 'react'
import { Converter } from 'showdown'
import * as showdownHighlighter from 'showdown-highlight'

import './Markdown.css'

const convertMarkdownToHtml = (text) => {
    const converter = new Converter({
        headerLevelStart: 2,
        parseImgDimensions: true,
        extensions: [showdownHighlighter]
    })
    const html = converter.makeHtml(text)
    return html
}
const Markdown = ({ text }) => <div className="Markdown" dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(text) }}></div>

export default Markdown