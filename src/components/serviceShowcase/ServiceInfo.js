import React from 'react'
import Heading from '../Heading'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PricingInfo from '../cards/PricingInfo';
import {faSync} from '@fortawesome/free-solid-svg-icons'
import showcaseImg01 from '../../images/showcase-img-1.png'


const ServiceInfo = () => {
    const element = <FontAwesomeIcon icon={faSync}/>
    return (
        <div className="mt-10">
            <Heading icon={element} title="lifetime updates & maintenence"/>
            <div className="lg:flex">
                <div className="lg:w-1/2">
                    <h1 className="text-left font-bold text-3xl mb-2">Lifetime Updates For Your Website</h1>
                    <p>Google changes it's search alogrithm standards every so often, changing what is important to rank. And web accessibility guidelines for users with screen readers get updated as well. So we also include lifetime updates to your website to make sure it never goes out of date and is always changing with the times.</p>
                    <div className="lg:block hidden">
                        <img src={showcaseImg01} className="w-1/2 m-auto py-4" alt="" />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:my-0 my-6">
                    <PricingInfo />
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo
