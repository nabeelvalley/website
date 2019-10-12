![Header Image](/images/posts/image1.jpg =100%x100%)

# Hello World

How ya doing fam?

## Let's see how this all works out ey

[click here](/code) to go somewhere else

## Literally all the code for the Markdown Renderer

So, first run a bash command obvs

```bash
yarn start
```

Under normal conditions you should just be able to make use of the folloiwng JSX

```js
import React from 'react'
import { Converter } from 'showdown'
import * as showdownHighlighter from 'showdown-highlight'

import '../../../node_modules/highlight.js/styles/a11y-light.css'

const convertMarkdownToHtml = text => {
  const converter = new Converter({
    headerLevelStart: 2,
    parseImgDimensions: true,
    extensions: [showdownHighlighter]
  })
  const html = converter.makeHtml(text)
  return html
}
const Markdown = ({ text }) => (
  <div
    className='Markdown'
    dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(text) }}
  ></div>
)

export default Markdown
```

Okay so I'm just going to add a little more content down here, mostly just so that I'm not ending off on a code block because that's not the most pleasant looking thing from what I'm seeing based on the overscroll

```cs
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
```

# Conclusion

Yes I am concluding

> Thanks fam,
> This is a multi-line quote

> This would be a separate one I assume then?

Many Regards,

> Nabeel Valley
