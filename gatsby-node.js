const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve("./src/templates/article.js")

    resolve(
      graphql(
        `
          {
            allDatoCmsArticle {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const articles = result.data.allDatoCmsArticle.edges

        articles.forEach((article, idx) => {
          createPage({
            path: `/article/${article.node.slug}`,
            component: articleTemplate,
            context: {
              slug: article.node.slug
            },
          })
        })
      })
    )
  })
}
