const sortMarkdownPosts = (markdownData) => {
  return markdownData.edges
    .map((el) => {
      const slug = el.node.slug
      const year = slug.match(/\d\d\d\d/)[0]
      const date = slug.match(/\d\d-\d\d/)[0]
      const [day, month] = date.split("-").map((i) => +i)
      return {
        node: el.node,
        slug: slug,
        year: +year,
        month: +month,
        day: +day,
      }
    })
    .sort((a, b) => a.day - b.day)
    .sort((a, b) => a.month - b.month)
    .sort((a, b) => a.year - b.year)
}


export default sortMarkdownPosts