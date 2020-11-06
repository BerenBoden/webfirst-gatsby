import React from 'react'

const Heading = props => {
    return (
        <div className="pb-4">
            <div>
                <h1 className="font-bold text-center uppercase text-3xl">{props.title}</h1>
                <p className="text-center text-xl"><span className="text-xs">-----</span> {props.icon} <span className="text-xs">-----</span></p>
            </div>
        </div>
    )
}

export default Heading