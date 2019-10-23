import {ADD_CITY} from '../actions/types';

const initState = {
    cities: []
};

const cityReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_CITY:
            return{
                cities: state.cities.concat(
                    {key: Math.random(),value: action.payload}
                )
            };
        default: 
            return state;
    }
}

export default cityReducer;