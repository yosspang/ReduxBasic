import {combineReducers} from 'redux';
import countReducer from './countReducers';
import placeReducer from './placeReducer';
import cityReducer from './cityReducer';

const allReducers = combineReducers({
    count: countReducer,
    listPlaces: placeReducer,
    stateCities: cityReducer
});
export default allReducers;