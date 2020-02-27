export const initialLoaderState = {
    showLoader: false 
};
export function loaderReducer(state,action) {
    switch(action.type){
        case 'UPDATE_LOADER':
            return {
                showLoader: action.showLoaderFlag    
            };
        default: 
            return initialLoaderState;
    }
}