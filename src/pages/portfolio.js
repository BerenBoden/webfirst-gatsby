import React from "react"
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import headerBg01 from '../images/header-bg-1.png'

const services = () => {
    return (
        <div>
            <div className="h-32"></div>
            <img src={headerBg01} className="absolute top-0 w-screen h-40 object-cover" alt="" />
            <Layout>
                <h1 className="z-10 absolute top-0 text-white font-bold text-xl mt-24">Portfolio</h1>
                <SEO title="services" keywords={[`tags`, `web development`, `web development taranaki`]} />
            </Layout>
            <Footer />
        </div>
    )
}

export default services