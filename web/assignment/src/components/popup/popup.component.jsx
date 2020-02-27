import React, { useContext } from 'react';
import './popup.styles.css';
import PopupContext from '../../utils/contexts/PopupContext';

import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopupComponent = () => {
    const {popupState, updatePopupState } = useContext(PopupContext);
    if(!popupState.showPopup){
        return null;
    }
    const handlePopupClose = () => {
        closeCallback();
        updatePopupState({type: 'HIDE_POPUP'});
    }
        const {title, message} = popupState.popupData;
        const closeCallback = popupState.closeCallback;
    return (
        <React.Fragment>
            {
                popupState.showPopup ? (
                    <div className='popup-page-container'>
                    <div className='popup-container'>
                        <div className='popup-header'>
                            <span className='popup-title'> { title} </span>
                            <button className='btn' onClick={handlePopupClose}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                        </div>
                        <div className='popup-content'>
                            <span>
                                {
                                    message
                                }
                            </span>
                        </div>
                    </div>
                    </div>
                ) : null
            }
        </React.Fragment>
    );
}
export default PopupComponent;