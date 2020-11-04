import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Row, Col} from 'reactstrap'
import Header from "./header"
import '../styles/index.scss'
import Sidebar from './Sidebar'

const Layout = ({ children, pagetitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <h1>{pagetitle}</h1>
          <Row>
            <Col md="8">
              {children}
            </Col>
            <Col md="4">
              <Sidebar />
            </Col>
          </Row>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
