import React, {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import background from '../images/banner-bg.png'
import Footer from '../components/Footer';
import '../styles/main.css'
import ShowcaseTop from '../components/showcase/ShowcaseTop'
import ShowcaseFeatures from '../components/showcase/ShowcaseFeatures'
import ShowcaseDescription from "../components/showcase/ShowcaseDescription"
import ShowcasePortfolio from '../components/showcase/ShowcasePortfolio' 
import ShowcasePricing from "../components/showcase/ShowcasePricing"
import ShowcaseContact from "../components/showcase/ShowcaseContact"


const IndexPage = () => {

  useEffect(() => {
    AOS.init({duration: 500});
  }, [])

  return (
    <div>
      <img className="absolute w-screen top-0 object-cover z-0" style={{height: '80vh'}} src={background} alt="" />
      <Layout>
        <SEO title="Home" keywords={['blog', 'taranaki', 'web development', 'web designer', 'website', 'website builder', 'web design taranaki', 'webfirst']}/>
          <div className="lg:mb-64 pb-12">
            <ShowcaseTop />
          </div>
            <ShowcaseDescription />
          <div data-aos="fade-bottom">
            <ShowcaseFeatures />
          </div>
          <div data-aos="fade-top">
            <ShowcasePortfolio />
          </div>
          <div data-aos="fade-bottom">
            <ShowcasePricing />
          </div>
          <div data-aos="fade-top" className="relative z-0">
            <ShowcaseContact />
          </div>
      </Layout>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage