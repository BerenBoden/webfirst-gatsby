import React from 'react'
import serviceImg1 from '../../images/service-img-1.png'

const PortfolioCards = () => {
    const cardInfo = [
        {title: 'title', description: 'description', img: serviceImg1},
        {title: 'title', description: 'description', img: serviceImg1},
        {title: 'title', description: 'description', img: serviceImg1},
        {title: 'title', description: 'description', img: serviceImg1}
    ]

    const renderCardInfo = (card, index) => {
        return (
            <div key={index}>
                <div className="bg-gray-200 shadow-xl rounded-sm border-t-4 h-64 border-blue-400">
                    <div className="flex justify-center">
                        <div className="flex-col">               
                            <img src={card.img} className="w-32 lg:w-40 justify-center" alt="" />
                            <h1 className="text-2xl text-left font-bold">{card.title}</h1>
                            <p>{card.description}</p>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {cardInfo.map(renderCardInfo)}
        </div>
    )
}

export default PortfolioCards