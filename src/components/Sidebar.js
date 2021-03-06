import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import {Card, CardTitle, CardBody, Form, FormGroup, Input, Button} from 'reactstrap'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const Sidebar = () => {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Newsletter
                    </CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your email..."/>
                            <Button className="btn btn-outline-primary text-uppercase w-full">Subscribe</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            
            <Card className="md:block hidden">
                <CardBody>
                    <CardTitle className="text-center">
                        Recent Posts
                    </CardTitle>
                    <StaticQuery query={sidebarQuery} render={data => (
                        <div>
                            {data.allMarkdownRemark.edges.map(({node}) => (
                                <Card key={node.id}>
                                    <Link to={node.fields.slug}>
                                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                    </Link>
                                    <cardBody>
                                        <CardTitle className="p-2">
                                            <Link to={node.fields.slug}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </CardTitle>
                                    </cardBody>
                                </Card>
                            ))}
                        </div>
                    )}/>
                </CardBody>
            </Card>
        </div>
    )
}

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: 3
        ) {
            edges{
                node {
                    id
                    frontmatter{
                        title
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
`

export default Sidebar
