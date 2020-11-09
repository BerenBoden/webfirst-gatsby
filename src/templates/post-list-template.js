import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import Pagination from '../components/Pagination';
import {Row, Col} from 'reactstrap'
import Sidebar from '../components/Sidebar'

const postListTemplate = props => {
    const posts = props.data.allMarkdownRemark.edges
    const { currentPage, numberOfPages } = props.pageContext
  
    return (
      <Layout pagetitle={`Page: ${currentPage}`}>
      <Row>
      <Col md="8">
        <Row>
          {posts.map(({ node }) => (
              <Col lg="6">
                <Post
                  key={node.id}
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </Col>
            ))}
          </Row>
          </Col>
          <Col md="4">
            <Sidebar />
          </Col>
        </Row>
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
      </Layout>
    )
  }
  
  export const postListQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM Do YYYY")
              author
              tags
              image {
                childImageSharp {
                  fluid(maxWidth: 650, maxHeight: 371) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `

export default postListTemplate