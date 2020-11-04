import React from 'react'
import { Link } from 'gatsby'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunction.js'
import { Badge } from 'reactstrap'

const Post = ({title, author, path, date, body, fluid, tags}) => {
    return (
        <Card>
            <Link to={path}>
                <Img className="card-image-top" fluid={fluid} />
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={path}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by{' '}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                    {tags ? tags.map(tag => (
                        <li>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="primary" className="p-2 text-uppercase">{tag}</Badge>
                            </Link>
                        </li>
                    )) : <p>No tags to display</p>}
                </ul>
                <Link to={path} className="btn btn-outline-primary float-right">Read More</Link>
            </CardBody>
        </Card>
    )
}

export default Post
