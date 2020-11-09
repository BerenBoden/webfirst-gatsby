import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const PortfolioCards = () => {
    const element = <FontAwesomeIcon icon={faInfoCircle}/>
    const element2 = <FontAwesomeIcon icon={faCheckCircle}/>

    const cardInfo = [
        {title: 'Basic plan details', features: ['Premium Theme', 'Upto 5 Pages', 'Professional Design', 'Responsive/Mobile Friendly', 'Search Engine Optimization', 'Track Your Analytics', '  Your Own Desgin (optional)', 'Handcoded Or Wordpress', 'Secure Site (SSL)', 'Custom Domain']},
        {title: 'Standard plan details', features: ['Premium Theme', 'Upto 5 Pages', 'Professional Design', 'Responsive/Mobile Friendly', 'Search Engine Optimization', 'Track Your Analytics', '  Your Own Desgin (optional)', 'Handcoded Or Wordpress', 'Secure Site (SSL)', 'Custom Domain']},
        {title: 'Premium plan details', features: ['Premium Theme', 'Upto 5 Pages', 'Professional Design', 'Responsive/Mobile Friendly', 'Search Engine Optimization', 'Track Your Analytics', '  Your Own Desgin (optional)', 'Handcoded Or Wordpress', 'Secure Site (SSL)', 'Custom Domain']}
    ]

    const renderCardInfo = (card, index) => {
        return (
            <div className="lg:w-1/3 h-full" key={index}>
                <div className="px-4 shadow-xl py-24">
                    <h1 className="text-left font-bold text-2xl mb-10">{card.title}</h1>
                    <div className="">
                        <p className="block">{element2}&nbsp;{card.features[0]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[1]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[2]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[3]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[4]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[5]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[6]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[7]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[8]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                    <div>
                        <p className="block">{element2}&nbsp;{card.features[9]}</p>
                        <p className="text-blue-400 text-sm">{element}&nbsp;Information</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="lg:flex">
            {cardInfo.map(renderCardInfo)}
        </div>
    )
}

export default PortfolioCards