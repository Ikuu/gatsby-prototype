import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlePage = ({ data: { article } }) => {
  const { title, copy } = article;

  return (
    <Layout>
      <SEO title={title} />

      <h1>{title}</h1>
      <p>{copy}</p>
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
    }
  }
`
