export const initialPopupState = {
    showPopup: false,
    popupData: {
        title: 'Alert',
        message: 'This is a generic message'
    },
    closeCallback: function(){

    }
};
export function popupReducer(state,action) {
    switch(action.type){
        case 'SHOW_POPUP':
            return {
                showPopup: true,
                popupData: action.popupData,
                closeCallback: action.closeCallback    
            };
        case 'HIDE_POPUP':
            return {
                showPopup: false 
            }
        default: 
            return initialPopupState;
    }
}