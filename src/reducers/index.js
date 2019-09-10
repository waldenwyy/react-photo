import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    photoReducer,
    cartReducer
});

export default rootReducer;

