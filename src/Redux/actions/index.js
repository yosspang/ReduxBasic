import {ADD_PLACE, INCREMENT, DECREMENT} from './types';

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