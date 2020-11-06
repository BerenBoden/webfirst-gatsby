import React from 'react'

const Form = () => {
    return (
        <form>
            <div className="bg-gray-300 z-50 rounded-md px-4 py-6 w-full shadow-xl">
                <h1 className="uppercase text-2xl font-bold"><span className="text-blue-400">Drop</span> us a line...</h1>
                <div className="my-2">
                    <label className="block">Name</label>
                    <input className="w-full py-4 px-2 rounded-sm shadow-xl" placeholder="Your name..." />
                </div>
                <div className="my-2">
                    <label>Email</label>
                    <input className="w-full py-4 px-2 rounded-sm shadow-xl" placeholder="Your email..." />
                </div>
                <div className="my-2">
                    <label>Business</label>
                    <input className="w-full py-4 px-2 rounded-sm shadow-xl" placeholder="Your business..." />
                </div>
                <div className="my-2"> 
                    <label>Phone</label>
                    <input className="w-full py-4 px-2 rounded-sm shadow-xl" placeholder="Your phone..." />
                </div>
                <div className="my-2">
                    <label>Message</label>
                    <textarea rows="10" className="w-full py-4 px-2 rounded-sm shadow-xl" placeholder="Your message..." ></textarea>
                </div>
                <button className="w-full bg-blue-600 py-4 rounded-sm text-white shadow-xl hover:bg-blue-300 hover:text-black transition duration-100 ease-in-out">
                    Send Email
                </button>
            </div>
        </form>
    )
}

export default Form
