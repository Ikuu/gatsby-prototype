import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: { allDatoCmsArticle } }) => {
  const articles = allDatoCmsArticle.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <h2>Articles</h2>
      {articles.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.title}</h3>
          <p>{node.copy}</p>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsArticle {
      edges {
        node {
          id
          title
          copy
        }
      }
    }
  }
`
