import {ADD_CITY, ADD_PLACE, INCREMENT, DECREMENT} from './types';

export function increment(){
    return {
        type: INCREMENT
    }
}
export function decrement(){
    return{
        type: DECREMENT
    }
}

export const addPlace = placeName => {
    return{
        type: ADD_PLACE,
        payload: placeName
    }
}

export function addCity(cityName){
    return{
        type: ADD_CITY,
        payload: cityName
    }
}