import React from 'react'
import Heading from '../Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import PortfolioCards from '../cards/PortfolioCards'

const ShowcasePortfolio = () => {
    const element = <FontAwesomeIcon icon={faBriefcase} />
    return (
        <div className="my-10">
            <Heading icon={element} title="Our portfolio"/>
            <PortfolioCards />
            <div className="flex justify-center py-4">
                <button className="text-centercapitalize transition duration-200 ease-in-out rounded-sm py-3 px-6 bg-blue-500 text-white hover:bg-blue-400 hover:text-black">View More...</button>
            </div>
        </div>
    )
}

export default ShowcasePortfolio