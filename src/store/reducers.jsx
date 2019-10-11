import { combineReducers } from 'redux';


import { AuthReducer } from "../features/auth/store/reducers";
import { HomeReducers } from '../features/home/store/reducer';

const rootReducers = combineReducers({
    
    Auth: AuthReducer,
    Home:HomeReducers
});

export { rootReducers };
