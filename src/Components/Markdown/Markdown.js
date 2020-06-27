import React from "react"
import Comments from "../Comments/Comments"

import "./Markdown.css"
import "katex/dist/katex.css"

const Markdown = ({ children, html }) => (
  <>
    {children ? (
      <div className="Markdown">{children}</div>
    ) : (
      <div
        className="Markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    )}
    <Comments />
  </>
)

export default Markdown
