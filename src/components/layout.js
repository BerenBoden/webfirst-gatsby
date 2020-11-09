import React from "react"
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
      <div className="main-div"
        style={{margin: '0 auto'}}>
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
