const katex = require('katex')

const codeBlockEscaper = {
  type: 'lang',
  regex: /`([^\n\t])*?`/g,
  replace: (text) => {
    // console.log('latex code block escaper', text)
    return text.replace(/¨D/g, 'CODEBLOCK_ESCAPED_DOLLAR_SIGN')
  },
}

const codeBlockUnescaper = {
  type: 'lang',
  regex: /`([^\n\t])*?`/g,
  replace: (text) => {
    // console.log('latex code block escaper', text)
    return text.replace(/CODEBLOCK_ESCAPED_DOLLAR_SIGN/g, '¨D')
  },
}

const codeFenceEscaper = {
  type: 'lang',
  regex: /```(\w*)\n(?:(?!```)[\s\S])+```/gm,
  replace: (text) => {
    // console.log('latex code block escaper', text)
    return text.replace(/¨D/g, 'CODEFENCE_ESCAPED_DOLLAR_SIGN')
  },
}

const renderKatexInline = {
  type: 'lang',
  regex: /(¨D)(\S)(.+?)(\S)(¨D)/g,
  replace: (text) => {
    // console.log('found latex inline: ', text)
    return `${katex.renderToString(text.replace(/¨D/g, '').trim(), {
      throwOnError: false,
    })}`
  },
}

const renderKatexMultiLine = {
  type: 'lang',
  regex: /(¨D¨D)(\n)(.+)(.*)(\n)(¨D¨D)/gm,
  replace: (text) => {
    // console.log('found latex multiline: ', text)
    return `${katex.renderToString(text.replace(/¨D/g, '').trim(), {
      throwOnError: false,
    })}`
  },
}

const codeFenceUnescaper = {
  type: 'lang',
  regex: /```(\w*)\n(?:(?!```)[\s\S])+```/gm,
  replace: (text) => {
    // console.log('latex codeblock unescaper', text)
    return text.replace(/CODEFENCE_ESCAPED_DOLLAR_SIGN/g, '¨D')
  },
}

const latexFilterExtension = {
  type: 'lang',
  filter: (text) => {
    const matchAndReplace = (extension) => {
      const matches = [...text.matchAll(new RegExp(extension.regex, 'gm'))]

      matches.forEach(m => text = text.replace(m[0], extension.replace(m[0])))
    }

    matchAndReplace(codeFenceEscaper)
    matchAndReplace(codeBlockEscaper)
    matchAndReplace(renderKatexMultiLine)
    matchAndReplace(renderKatexInline)
    matchAndReplace(codeFenceUnescaper)
    matchAndReplace(codeBlockUnescaper)

    return text
  }
}

module.exports = latexFilterExtension