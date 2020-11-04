import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import {Row, Col} from 'reactstrap';
import Sidebar from '../components/Sidebar'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <StaticQuery query={indexQuery} render={data => {
          return (
            <div className="container">
                <div className="row m-0 text-center">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Col md="4">
                            <Post 
                            title={node.frontmatter.title}
                            author={node.frontmatter.author}
                            path={node.frontmatter.path}
                            date={node.frontmatter.date}
                            body={node.excerpt}
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            tags={node.frontmatter.tags}
                            />
                        </Col>
                        
                    ))}
                </div>
            </div>
          )
        }}/>
  </Layout>
)

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          path
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
