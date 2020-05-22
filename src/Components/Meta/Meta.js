import React from "react"
import { Helmet } from "react-helmet"

/**
 * Get the page metadata given a title and description
 * @param title title for page
 * @param description description for page meta
 */
const Meta = ({ title, description }) => {
  title = title || "Nabeel Valley"

  description =
    description || `Nabeel Valley. Web Development, Photography, and Design`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* twitter:card === 'summary' due to twitter spec */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@not_nabeel" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default Meta