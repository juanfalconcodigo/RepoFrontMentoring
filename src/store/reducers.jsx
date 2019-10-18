import { combineReducers } from 'redux';


import { AuthReducer } from "../features/auth/store/reducers";
import { HomeReducers } from '../features/home/store/reducer';
import { UserReducer } from '../features/register/store/reducers';

const rootReducers = combineReducers({
    
    Auth: AuthReducer,
    Home:HomeReducers,
    User:UserReducer,
});

export { rootReducers };
