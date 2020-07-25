import React, { useEffect } from "react"
import "./Comments.css"

const Comments = () => {
  useEffect(() => {
    let script = document.createElement("script")
    let anchor = document.getElementById("inject-utterances")
    script.setAttribute("src", "https://utteranc.es/client.js")
    script.setAttribute("crossorigin", "anonymous")
    script.setAttribute("async", true)
    script.setAttribute("repo", process.env.GATSBY_COMMENTS_REPO_URL)
    script.setAttribute("issue-term", location.pathname)
    script.setAttribute("theme", "preferred-color-scheme")
    anchor.appendChild(script)
  }, [])

  return <div id="inject-utterances"></div>
}

export default Comments
