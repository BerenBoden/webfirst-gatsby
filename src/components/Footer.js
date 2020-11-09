import React from 'react'
import footer from '../images/footer-bg.png'
import Logo from '../images/logo.png'

const Footer = () => {
    return (
            <div className="relative flex items-center z-0 lg:mt-20 mt-64">
                <div className="absolute md:flex flex-wrap px-4 mt-64 w-full justify-between z-10 text-white">
                    <div className="lg:w-1/4 w-1/2 lg:justify-center flex">
                        <div >
                            <img className="w-48" src={Logo} alt="logo" />
                            <p>New Zealand, Taranaki</p>
                            <p>Email: beren.boden@gmail.com</p>
                            <p>Phone: 64+ 212089217</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 pr-12 my-2 md:w-1/2">
                        <div >
                            <h1 className="font-bold text-left">Navigation</h1>
                            <hr className="my-2 border-blue-400"/>
                            <ul>
                                <li>Home</li>
                                <li>Services</li>
                                <li>Portfolio</li>
                                <li>Blog</li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/4 pr-12 my-2 md:w-1/2">
                        <h1 className="font-bold text-left">Follow me on</h1>
                        <hr className="my-2 border-blue-400"/>
                        <ul>
                            <li>Github</li>
                            <li>Youtube</li>
                            <li>LinkedIn</li>
                            <li>StackOverflow</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 pr-12 my-2 md:w-1/2">
                        <h1 className="font-bold text-left">Services</h1>
                        <hr className="my-2 border-blue-400"/>
                        <ul>
                            <li>Web Develpoment</li>
                            <li>Web Design</li>
                            <li>Website Maintenenence</li>
                            <li>SEO Services</li>
                            <li>Content Creation</li>
                        </ul>
                    </div>
                </div>
                <img className="absolute w-screen object-cover h-screen z-0 footer-img" src={footer} alt="" />
            </div>
    )
}

export default Footer
