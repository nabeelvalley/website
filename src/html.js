import React from "react"
import PropTypes from "prop-types"

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

                <title>Nabeel Valley</title>
                <script crossOrigin="anonymous"
                    src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=fetch%2CPromise%2CPromise.prototype.finally%2CArray.prototype.includes%2CString.prototype.includes"></script>

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149902632-1"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    // disable GA for localhost
                    var host = window.location.hostname;
                    if (host === 'localhost' || host.includes('192.168')) {
                        window['ga-disable-UA-149902632-1'] = true;
                        console.log('disable GA for local')
                    } else {
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {dataLayer.push(arguments); }
                        gtag('js', new Date());
                            
                        gtag('config', 'UA-149902632-1');
                    }
                `}}></script>

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
