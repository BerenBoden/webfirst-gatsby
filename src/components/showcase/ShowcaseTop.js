import React from 'react'
import showcase from '../../images/showcase-img-1.png'

const ShowcaseTop = () => {
    return (
        <div className="lg:flex relative lg:mt-32 z-10 py-4">
            <div className="lg:w-1/2">
                <h1 className="text-white text-left md:text-4xl text-2xl font-bold leading-8">Small Business Web Development & Design</h1>
                <p className="text-white mt-4">Stunning modern websites developed and designed by hand
                free for the first 30 days, cancel anytime. Get in touch and
                I'll see what I can do.</p>
            </div>
            <div className="lg:w-1/2 flex lg:justify-end justify-center">
                <img className="lg:w-3/4 sm:w-1/2 w-3/4" src={showcase} alt="showcase img" />
            </div>
        </div>
    )
}

export default ShowcaseTop