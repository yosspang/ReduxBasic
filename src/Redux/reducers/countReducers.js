import {INCREMENT, DECREMENT} from '../actions/types';
let count = 0;
export default function(state = count, action){
    switch (action.type){
        case INCREMENT: 
            state++;
            break;
        case DECREMENT:
            state--;
            break;
    }
    return state;
}