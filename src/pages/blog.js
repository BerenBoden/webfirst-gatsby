import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import Pagination from '../components/pagination';
import {Row, Col} from 'reactstrap' 

const IndexPage = () => {
  const postsPerPage = 6;
  let numberOfPages
  return (
  <Layout pagetitle="Webfirst - Blog" >
    <SEO title="Blog" keywords={['blog', 'taranaki', 'web development']}/>
        <StaticQuery query={indexQuery} render={data => {
          numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post className=""
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                    />
              ))}
            </div>
          )
        }}
        />
        <Pagination currentPage={1} numberOfPages={numberOfPages}/>
  </Layout>
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
