import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import background from '../images/banner-bg.png'
import ShowcaseTop from '../components/showcase/ShowcaseTop'
import ShowcaseFeatures from '../components/showcase/ShowcaseFeatures'
import ShowcaseDescription from "../components/showcase/ShowcaseDescription"
import ShowcasePortfolio from '../components/showcase/ShowcasePortfolio'
import ShowcasePricing from "../components/showcase/ShowcasePricing"
import ShowcaseContact from "../components/showcase/ShowcaseContact"
import Footer from '../components/Footer';
import '../styles/main.css'


const IndexPage = () => {
  return (
    <div>
      <img className="absolute w-screen top-0 object-cover z-0" style={{height: '80vh'}} src={background} alt="" />
      <Layout>
        <SEO title="Home" keywords={['blog', 'taranaki', 'web development']}/>
        <ShowcaseTop />
        <ShowcaseDescription />
        <ShowcaseFeatures />
        <ShowcasePortfolio />
        <ShowcasePricing />
        <ShowcaseContact />
      </Layout>
      <Footer />
    </div>
  )
}

export default IndexPage