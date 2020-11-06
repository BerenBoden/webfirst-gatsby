import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO';
import {Button, Badge} from 'reactstrap';
import {slugify} from '../util/utilityFunction'
import Pagination from '../components/Pagination'

const tagsTemplate = ({ pageContext, numberOfPages, currentPage }) => {
    const {tags, tagPostCounts} = pageContext;
    return (
        <Layout pagetitle="All tags">
            <SEO title="all tags" keywords={['tags', 'web development taranaki']} />
            <ul>
                {tags.map(tag => (
                    <li key={tag} style={{marginBottom: '10px'}}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                        </Button>
                    </li>
                ))}
            </ul>
            <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
        />
        </Layout>
    )
}

export default tagsTemplate
