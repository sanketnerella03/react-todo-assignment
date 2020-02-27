import React, {useContext} from 'react';
import LoaderContext from '../contexts/LoaderContext';
import PopupContext from '../contexts/PopupContext';

const appUtilHOC = (ChildComponent) => {
    return (props) => {

        const { updateLoader } = useContext(LoaderContext);
        const { updatePopupState } = useContext(PopupContext);

        // Logger util
        const logger = {
            info: function(params){
                console.log("INFO LEVEL", params);
            },
            error: function(params){
                console.log("ERROR LEVEL", params);
            }
        }

        //Loader util
        const loader = {
            showLoader: function(){
                updateLoader({type: 'UPDATE_LOADER', showLoaderFlag: true });
            },
            hideLoader: function(){
                updateLoader({type: 'UPDATE_LOADER', showLoaderFlag: false });
            }
        }

        //Popup util
        const popup = {
            showPopup: function(popupData, closeCallback=()=>{}){
                updatePopupState({type: 'SHOW_POPUP', popupData: popupData, closeCallback: closeCallback});
            },
            hidePopup: function(){
                updatePopupState({type: 'HIDE_POPUP'});
            }
        }

        return (
            <ChildComponent {...props } logger={logger} loader={loader} popup={popup}/>
        );
    } 
}

export default appUtilHOC;