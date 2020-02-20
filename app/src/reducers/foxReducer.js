import {FETCH_FOX, UPDATE_IMG} from '../actions/foxActions';

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
        case UPDATE_IMG:
            return {
                ...state,
                fox: action.payload,
                isFetchingFox: false
            }    
        default:
            return state;
    }
}