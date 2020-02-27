export const initialState = {
    tasks: []
};
export function reducer(state,action) {
    switch(action.type){
        case 'UPDATE_TASKS':
            return {
                tasks: action.data
            };
        default: 
            return initialState;
    }
}

