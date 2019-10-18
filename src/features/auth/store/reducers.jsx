import {
    initialState
} from "./state";
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCESS
} from "./constants";

function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
                localStorage.setItem('token', action.payload.token);
                return Object.assign({}, state, {
                    token:action.payload.token,
                    isAuthenticated: true,             
                    username: action.payload.token
                });
               

                
        
        default:return state;
                        
    }
}

/* function AuthReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_LOGIN:
            return Object.assign({}, state, {
                login: true,
                token: action.payload.token,
                user: action.payload.user
            });
        default:
            return state;
    }
} */





export {
    AuthReducer
}