import React from 'react'
import serviceImgRound02 from '../../images/service-img-round-2.png'

const ServiceCards = () => {

    const cardInfo = [
        {img: serviceImgRound02, title: 'Extremely Fast & Optimized Websites', description: 'A fast website is extremely important for your business, you don\'t want a customer to leave your website half way through it loading, you\ve just lost a potential customer! Now imagine this with thousands of visitors to your site per day, that is a major loss of income just because someone is too impatient to wait a few more extra seconds for your site to load. Our websites are built using the latest technologies, and premium WordPress themes insuring your website has rapid load speeds meaning you won\'t lose potential customers. If you would like to learn more about why we choose the MERN stack over other tech stacks, check out this article.'},
        {img: serviceImgRound02, title: 'Authentic Or CMS?', description: 'Although there\'s a lot of hype around WordPress and over 33% of all the world\'s websites run on WordPress, this however can create a lot of unoriginality and may make you website look a little bland. So to combat this, I can create a fully customized authentic website for you, built from the ground up with nothing but the MERN stack, this is generally front-end work only, meaning it\'s better to keep this option for a brochure website with no server side functionalities.'},
        {img: serviceImgRound02, title: 'Search Engine Optimization', description: 'Although there\'s a lot of hype around WordPress and over 33% of all the world\'s websites run on WordPress, this however can create a lot of unoriginality and may make you website look a little bland. So to combat this, I can create a fully customized authentic website for you, built from the ground up with nothing but the MERN stack, this is generally front-end work only, meaning it\'s better to keep this option for a brochure website with no server side functionalities.'}
    ]

    const renderCardinfo = (card, index) => {
        if(index = index % 2 !== 0 ){
            return (
                <>
                    <div key={index} className="shadow-xl w-full p-6 border-t-4 border-b-4 border-blue-400 rounded-lg">
                        <div className="lg:flex">
                            <div className="flex justify-center p-2">
                                <img src={card.img} className='w-2/4' alt="service img" />
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-left ">{card.title}</h1>
                                <p className="lg:w-3/4">{card.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-12 w-3/4 m-auto border-b-2 border-gray-500 border-r-2 border-dashed">

                    </div>
                    <div className="h-12 w-3/4 m-auto border-l-2 border-gray-500 border-dashed">

                    </div>
                </>
            )}
            else {
            return(
                <>
                    <div key={index} className="shadow-xl w-full p-6 rounded-lg border-t-4 border-b-4 border-blue-400">
                        <div className="lg:flex">
                            <div>
                                <h1 className="text-4xl font-bold text-left ">{card.title}</h1>
                                <p className="lg:w-3/4">{card.description}</p>
                            </div>
                            <div className="flex justify-center">
                                <img src={card.img} className='w-2/4' alt="service img" />
                            </div>
                        </div>
                    </div>
                    <div className="h-12 w-3/4 m-auto border-l-2 border-gray-500 border-dashed">

                    </div>
                    <div className="h-12 w-3/4 m-auto border-t-2 border-gray-500 border-r-2 border-dashed">

                    </div>
                </>
            )
        }
    }
    return (
        <div> 
            {cardInfo.map(renderCardinfo, () => {})}
        </div>
    )
}

export default ServiceCards