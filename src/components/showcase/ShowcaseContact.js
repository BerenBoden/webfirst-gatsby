import React from 'react';
import Contact from '../contact/Contact';
import Heading from '../Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ShowcaseContact = () => {
    const element = <FontAwesomeIcon icon={faEnvelope}/>
    return (
        <div className="overflow-hidden mt-12 relative my-10 mx-auto">
            <Heading icon={element} title="Get in touch"/>
            <Contact />
        </div>
    )
}

export default ShowcaseContact
