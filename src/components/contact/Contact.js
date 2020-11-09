import React from 'react'
import ContactImg from '../../images/contact-img.png';
import Form from './Form'



const Contact = () => {
    
    return (
        <div>
            <div className="lg:flex items-start">
                <div className="lg:w-1/2 lg:pr-4">
                    <img className="my-2" src={ContactImg} alt="contact img" />
                    <div className="border-l-4 border-blue-400 rounded-sm bg-gray-200 shadow-xl my-2 w-full py-6 px-4">Email: support@webfirst.co.nz</div>
                    <div className="border-l-4 border-blue-400 rounded-sm bg-gray-200 shadow-xl mt-2 w-full py-6 px-4">Phone: 64+212089217</div>
                </div>
                <div className="lg:w-1/2 mt-6 lg:mt-0">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact
