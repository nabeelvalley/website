const serializePost = ({ query }) => {
  return query.allRenderedMarkdownPost.edges.map((edge) => {
    const {
      id,
      description,
      slug,
      subtitle,
      title,
      html,
    } = edge.node

    const date = new Date(subtitle)

    return {
      title,
      date,
      description,
      url: query.site.siteMetadata.siteUrl + slug,
      guid: id,
      custom_elements: [{ 'content:encoded': html }],
    }
  })
}

module.exports = serializePost