import axios from 'axios'

export const FETCH_CARS = 'FETCH_CARS';
export const fetchCars = () => async (dispatch, getState, api) => { 
    const res = await axios.get('/cars');

    console.log(res.data)

    dispatch({
        type: FETCH_CARS,
        payload: res
    })

}