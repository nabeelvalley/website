import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="manifest" href="/manifest.json" />

        {/* Google Search Site Verification Tag */}
        <meta
          name="google-site-verification"
          content="eqR9vdsWmb7gglH0R4CilWu8iysUMq1-AII0eotV6JM"
        />

        <title>Nabeel Valley</title>
        <script
          crossOrigin="anonymous"
          src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=fetch%2CPromise%2CPromise.prototype.finally%2CArray.prototype.includes%2CString.prototype.includes"
        ></script>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
