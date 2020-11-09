import React from 'react'
import ServiceCards from '../cards/ServiceCards'
import Heading from '../Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons'

const ServiceShowcase = () => {
    const element = <FontAwesomeIcon icon={faLaptopHouse}/>
    return (
        <div>
            <Heading icon={element} title="What we provide"/>
            <ServiceCards />
        </div>
    )
}

export default ServiceShowcase