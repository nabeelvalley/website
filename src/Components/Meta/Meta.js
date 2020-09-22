import React from 'react'
import { Helmet } from 'react-helmet'

/**
 * Get the page metadata given a title and description
 * @param title title for page
 * @param description description for page meta
 */
const Meta = ({ title, description, image }) => {
  title = title || 'Nabeel Valley'

  description =
    description || `Nabeel Valley. Web Development, Photography, and Design`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@not_nabeel" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image}></meta> : null}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      {image ? <meta name="og:image" content={image}></meta> : null}
    </Helmet>
  )
}

export default Meta
