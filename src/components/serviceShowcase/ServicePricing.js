import React from 'react'
import Heading from '../Heading'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ServiceProvide from '../cards/ServiceProvide';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import ShowcasePricing from '../showcase/ShowcasePricing';


const ServiceInfo = () => {
    const element = <FontAwesomeIcon icon={faFileInvoiceDollar}/>
    return (
        <div className="mt-10">
            <Heading icon={element} title="Plans & pricing information"/>
            <div className="border-t-4 border-b-4 border-blue-400">
                <ServiceProvide />
            </div>    
            <ShowcasePricing />
        </div>
    )
}

export default ServiceInfo