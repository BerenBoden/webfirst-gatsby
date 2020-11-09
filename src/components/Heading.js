import React from 'react'

const Heading = props => {
    return (
        <div className="pb-4">
            <div>
                <h1 className="font-bold text-center uppercase text-3xl">{props.title}</h1>
                <p className="text-center text-xl flex items-center justify-content-center">
                    <span className="text-xs">-----&nbsp;&nbsp;</span>
                        {props.icon}
                    <span className="text-xs">&nbsp;&nbsp;-----</span>
                </p>
            </div>
        </div>
    )
}

export default Heading