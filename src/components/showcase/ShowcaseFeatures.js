import React from 'react'
import FeatureCards from '../cards/FeatureCards'
import showcaseImg02 from '../../images/showcase-img-2.png'

const ShowcaseFeatures = () => {
    return (
        <div className="my-10">
            <div className="lg:flex items-end">
                <div className="lg:w-1/3">
                    <img className="lg:w-full lg:h-full lg:pb-0 pb-8 w-3/4 h-3/4" src={showcaseImg02} alt="showcase feature img" />
                </div>
                <div className="lg:w-2/3 lg:ml-16">
                    <h1 className="font-bold uppercase text-3xl text-left"><span className="text-blue-500">Free</span> for 30 days</h1>
                    <p>$0 for the first 30 days on any plan you choose to go for, If you don't like the website, you can cancel anytime between those 30 days, no hassle, no fees.<br /><br />
                    After 30 days, you will be charged a fixed price per month or a one time fixed price based on your budget and the amount of work needed.
                    You own your domain, content, listing, and profiles. Cancel anytime, free of charge, no hassle.</p>
                </div>
            </div>
            <div className="mt-8">
                <FeatureCards />
            </div>
        </div>
    )
}

export default ShowcaseFeatures
