import axios from 'axios';

export const FETCH_FOX = "FETCH_FOX";
export const UPDATE_IMG = "UPDATE_IMG";

export const fetchFox = () => dispatch => {
    dispatch({ type: FETCH_FOX });
    axios.get('https://randomfox.ca/floof/')
    .then(res => {
        // console.log(res);
        dispatch({ type: UPDATE_IMG, payload: res.data.image });
    })
    .catch(err => console.error('error fetching data from api. err: ', err));
}