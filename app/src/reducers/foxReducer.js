import {FETCH_FOX} from '../actions/foxActions';

export const initialState = {
    fox: "",
    isFetchingFox: false
};

export const foxReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FOX:
            return {
                ...state,
                isFetchingFox: true
            }
        default:
            return state;
    }
}