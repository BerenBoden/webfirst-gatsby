import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import '../styles/index.scss'


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
        style={{margin: `0 auto`,maxWidth: '70%',}}>
        <main>
          <h1>{pagetitle}</h1>
            <div style={{marginTop: '100px'}}>
              {children}
            </div>
        </main>
      </div>
    </>
  )
}

export default Layout
