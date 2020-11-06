import React from 'react'
import Heading from '../Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PricingCards from '../cards/PricingCards';
import { faTags } from '@fortawesome/free-solid-svg-icons'

const ShowcasePricing = () => {
    const element = <FontAwesomeIcon icon={faTags} />
    return (
        <div className="my-10">
            <Heading icon={element} title="Choose your plan"/>
            <div className="mt-12">
                <PricingCards />
            </div>
            <div className="flex justify-center py-4 mt-6">
                <button className="text-centercapitalize transition duration-200 ease-in-out rounded-sm py-3 px-6 bg-blue-500 text-white hover:bg-blue-400 hover:text-black">Learn More</button>
            </div>
        </div>
    )
}

export default ShowcasePricing