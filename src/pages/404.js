import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout pagetitle="page not found">
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <Link to={'/'}>go home</Link>
  </Layout>
)

export default NotFoundPage
