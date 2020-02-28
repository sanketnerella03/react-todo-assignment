import React from 'react';
import './not-found.styles.css';

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFoundPage = () => {
    return (
        <div class='not-found-container'>
            <div className='not-found-icon-container'>
                <FontAwesomeIcon class='not-found-icon' icon={faExclamationTriangle} />
            </div>
            <div className='not-found-text'>
                Page Not Found!!
            </div>
            
        </div>
    );
}

export default NotFoundPage;