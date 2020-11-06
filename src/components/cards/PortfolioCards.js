import React from 'react'

const PortfolioCards = () => {
    const cardInfo = [
        {title: 'title', description: 'description'},
        {title: 'title', description: 'description'},
        {title: 'title', description: 'description'}
    ]

    const renderCardInfo = (card, index) => {
        return (
            <div key={index}>
                <div className="bg-gray-200 shadow-xl rounded-sm border-b-2 h-156 border-blue-200">
                    <div>                
                        {card.img}
                        {card.title}
                        {card.description}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="grid lg:grid-cols-3 gap-2">
            {cardInfo.map(renderCardInfo)}
        </div>
    )
}

export default PortfolioCards