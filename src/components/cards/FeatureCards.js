import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const FeatureCards = () => {
    const cardInfo = [
        {title: 'Hosting Fees Included', description: 'We include every fee inside the monthly payment, so paying is simple and stress free, we include hosting, maintenence, site backups and 24/7 customer support with a monthly fee or one time payment.'},
        {title: 'Unlimited Edits', description: 'If you feel like there is something missing from your website or you want to add any extra features, call us anytime you want, and we will update your site as soon as possible.'},
        {title: '24/7 Customer Service', description: 'Call direct anytime day or night, no phone trees or automated responses. If you don\'t feel like talking, you can also send us an email and we will get back to you within 12 hours.'},
        {title: 'Web Design & Development', description: 'Includes over 120 hours of Web Development, design, and testing. You can be assured your website looks amazing and is delivered before your deadline.'},
        {title: 'Citations And Listings', description: 'If you feel like there is something missing from your website or you want to add any extra features, call us anytime you want, and we will update your site as soon as possible.'},
        {title: 'Google Analytics', description: 'We install Analytics for free so you can monitor your traffic and where it comes from. This is very important for gathering information about your consumers.'},
    ]

    const renderCardInfo = (card, index) => {
        return (
            <div key={index} className="shadow-xl px-4 flex py-12 items-center">
                <div>
                    <div className="flex items-center"><FontAwesomeIcon className="mr-1 text-blue-600" icon={faCheckCircle}/><h1 className="font-bold text-sm lg:text-xl">{card.title}</h1></div>
                    <p className="text-sm">{card.description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid lg:grid-cols-2 gap-2">
            {cardInfo.map(renderCardInfo)}
        </div>
    )
}

export default FeatureCards
