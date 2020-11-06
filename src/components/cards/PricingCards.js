import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const PricingCards = () => {
    const cardInfo = [
        {plan: 'Basic', price: 25, priceYearly: 200, descriptionTitle: 'Best For Brochure And Advertising Websites', checklist: ['Premium Theme','Upto 5 Pages','Professional Design','Responsive/Mobile Friendly','Search Engine Optimization','Track Your Analytics','Your Own Desgin (optional)','Handcoded Or Wordpress','Secure Site (SSL)','Custom Domain']},
        {plan: 'Basic', price: 25, priceYearly: 200, descriptionTitle: 'Best For Brochure And Advertising Websites', checklist: ['Premium Theme','Upto 5 Pages','Professional Design','Responsive/Mobile Friendly','Search Engine Optimization','Track Your Analytics','Your Own Desgin (optional)','Handcoded Or Wordpress','Secure Site (SSL)','Custom Domain']},
        {plan: 'Basic', price: 25, priceYearly: 200, descriptionTitle: 'Best For Brochure And Advertising Websites', checklist: ['Premium Theme','Upto 5 Pages','Professional Design','Responsive/Mobile Friendly','Search Engine Optimization','Track Your Analytics','Your Own Desgin (optional)','Handcoded Or Wordpress','Secure Site (SSL)','Custom Domain']},
    ]

    const renderCardInfo = (card, index) => {
        if(index === 1){
            return (
                <div key={index} className="rounded-md shadow-blue h-156 bg-gray-300 lg:transform lg:scale-110">
                    <div className="flex justify-center rounded-t-md items-center bg-black">
                        <h2 className="text-white py-2">{card.plan}</h2>
                    </div>
                    <div className="py-4 px-4 flex justify-center">
                        <div>
                            <h1 className="text-3xl font-bold my-2 text-center">${card.price}/M</h1>
                            <p className="my-3 text-center">Or ${card.priceYearly} Upfront</p>
                            <div>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[0]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[1]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[2]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[3]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[4]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[5]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[6]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[7]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[8]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[9]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 hover:bg-blue-200 px-6 py-2">
                            Contact Us
                        </button>
                    </div>
                </div>
            )
        }else {
            return(
                <div key={index} className="rounded-md shadow-blue h-156 bg-gray-300">
                    <div className="flex justify-center rounded-t-md items-center bg-black">
                        <h2 className="text-white py-2">{card.plan}</h2>
                    </div>
                    <div className="py-4 px-4 flex justify-center">
                        <div>
                            <h1 className="text-3xl font-bold my-2 text-center">${card.price}/M</h1>
                            <p className="my-3 text-center">Or ${card.priceYearly} Upfront</p>
                            <div>
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[0]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[1]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[2]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[3]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[4]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[5]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[6]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[7]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[8]}</li>
                                    <li><FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/> {card.checklist[9]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 rounded-sm hover:bg-blue-200 px-6 py-2">
                            Contact Us
                        </button>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="grid lg:grid-cols-3 gap-2">
            {cardInfo.map(renderCardInfo)}
        </div>
    )
}

export default PricingCards
