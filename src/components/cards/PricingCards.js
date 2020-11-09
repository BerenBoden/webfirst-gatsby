import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const PricingCards = () => {
    const element = <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600"/>
    const cardInfo = [
        {plan: 'Basic', price: 40, priceYearly: 350, descriptionTitle: 'Best For Brochure And Advertising Websites', checklist: ['Up To 5 Pages','24/7 Customer Service', 'Includes Hosting', 'Unlimited Edits & Updates','Search Engine Optimization', 'Track Your Analytics','Your Own Desgin (optional)','Handcoded Or Wordpress','Secure Site (SSL)','Custom Domain']},
        {plan: 'Professional', price: 150, priceYearly: 800, descriptionTitle: 'Best For Blogging and SEO websties', checklist: ['Everything From Basic Plan', 'Up To 7 Pages','Responsive/Mobile Friendly','Email Subscription For Email Marketing','Custom Email','Blogging Page', 'Daily Blog Posts']},
        {plan: 'Premium', price: 300, priceYearly: 1500, descriptionTitle: 'Best For Ecommerce Websites', checklist: ['Everything From Basic Plan & Gold Plan','Up To 9 Pages','Shop Page','Add To Cart Functionality','Checkout Page','Payment Functionality','Up To 50 Items','User Sign In / Sign Up']},
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
                            <p className="text-sm my-4">* {card.descriptionTitle}</p>
                            <div>
                                <ul>
                                    <li>{element} {card.checklist[0]}</li>
                                    <li>{element} {card.checklist[1]}</li>
                                    <li>{element} {card.checklist[2]}</li>
                                    <li>{element} {card.checklist[3]}</li>
                                    <li>{element} {card.checklist[4]}</li>
                                    <li>{element} {card.checklist[5]}</li>
                                    <li>{element} {card.checklist[6]}</li>
                                    <li>{element} {card.checklist[7]}</li>
                                    <li>{element} {card.checklist[8]}</li>
                                    <li>{element} {card.checklist[9]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-4">
                        <button className="bg-blue-600 rounded-sm hover:bg-blue-200 px-6 py-2">
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
                            <p className="text-sm my-4">* {card.descriptionTitle}</p>
                            <div>
                                <ul>
                                    <li>{element} {card.checklist[0]}</li>
                                    <li>{element} {card.checklist[1]}</li>
                                    <li>{element} {card.checklist[2]}</li>
                                    <li>{element} {card.checklist[3]}</li>
                                    <li>{element} {card.checklist[4]}</li>
                                    <li>{element} {card.checklist[5]}</li>
                                    <li>{element} {card.checklist[6]}</li>
                                    <li>{element} {card.checklist[7]}</li>
                                    <li>{element} {card.checklist[8]}</li>
                                    <li>{element} {card.checklist[9]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-4">
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
