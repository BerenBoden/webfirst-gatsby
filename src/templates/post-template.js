import React from 'react'
import Layout from '../components/Layout';
import {graphql, Link} from 'gatsby';
import SEO from '../components/SEO';
import {CardBody, Card, Badge, CardSubtitle} from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunction';
import { DiscussionEmbed } from 'disqus-react';
import {Row, Col} from 'reactstrap';

const PostTemplate = ({ data, pageContext }) => {
    const post = data.markdownRemark.frontmatter
    const baseUrl = 'https://gatsbytutorial.co.uk'

    const disqusShortname = 'webfirst-co-nz'
    const disqusConfig = {
        indentifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }
    return (
        <Layout >
            <h1 className="text-left my-10 text-2xl font-bold capitalize">{post.title}</h1>
            <SEO title={post.title} />
            <Card>
                <div > 
                    <Img className="card-image-top" style={{height: '300px', objectFit: 'cover'}} fluid={post.image.childImageSharp.fluid}/>
                </div>
                <CardBody>
                    <CardSubtitle>
                        <span className="text-info">{post.date}</span>by {' '}
                        <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
                    <ul className="post-tags">
                        {post.tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge color="primary">{tag}</Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
            <h3>
                Share this post
            </h3>
            <div>
                <ul>
                    <li>
                        <a href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug} className="facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab-fa-facebook-f fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.twitter.com/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' + 'twitterHandle'} className="facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab-fa-twitter-f fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.plus.google.com/share?url=' + baseUrl + pageContext.slug} className="facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab-fa-google-f fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.plus.linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug} className="facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab-fa-google-f fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default PostTemplate
