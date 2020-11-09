import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import Pagination from '../components/Pagination';
import {Row, Col} from 'reactstrap';
import Sidebar from '../components/Sidebar'
import headerBg01 from '../images/header-bg-1.png'

const IndexPage = props => {
  const postsPerPage = 6;
  let numberOfPages
  return (
  <div>
    <div className="h-32"></div>
    <img src={headerBg01} className="absolute top-0 w-screen h-40 object-cover z-0" alt="" />
    <Layout>
    <h1 className="z-10 absolute top-0 text-white font-bold text-xl mt-24">Blog</h1>
      <SEO title="Blog" keywords={['blog', 'taranaki', 'web development']}/>
          <StaticQuery query={indexQuery} render={data => {
            numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
            return (
              <Row>
                  <Col md="8">
                  <div>
                  <Row>
                      {data.allMarkdownRemark.edges.map(({ node }) => (
                          <Col lg="6">
                              <Post 
                                  key={node.id}
                                  title={node.frontmatter.title}
                                  author={node.frontmatter.author}
                                  slug={node.fields.slug}
                                  date={node.frontmatter.date}
                                  body={node.excerpt}
                                  fluid={node.frontmatter.image.childImageSharp.fluid}
                                  tags={node.frontmatter.tags}
                              />
                          </Col>
                      ))}
                  </Row>
                  </div>
                  </Col>
                  <Col md="4">
                      <Sidebar />
                  </Col>
              </Row>
            )
          }}
          />
          <Pagination currentPage={1} numberOfPages={numberOfPages}/>
    </Layout>
  </div>
  )
}

const indexQuery = graphql`
query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}
    limit: 6) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM Do YYYY")
          author
          tags
          image {
            childImageSharp {
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
