import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlePage = ({ data: { article } }) => {
  const { title, copy, relatedArticles } = article

  return (
    <Layout>
      <SEO title={title} />

      <h1>{title}</h1>
      <p>{copy}</p>

      {relatedArticles.length > 0 && <h2>Related Articles</h2>}
      <ul>
        {relatedArticles.map(article => (
          <li>
            <Link to={`article/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ArticlePage

export const articleQuery = graphql`
  query ArticleQuery($slug: String!) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      slug
      id
      title
      copy
      relatedArticles {
        id
        slug
        title
      }
    }
  }
`
