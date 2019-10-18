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
import { AuthService, authUrls } from "../../../api";

const authService = new AuthService();




// LOGIN USER
const login = (username, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ username, password })

    authService.getToken(authUrls.getTokenUrl, body, config)
        .then(res => {
            /* dispatch(createMessage({ Loggedin: "Bienvenido!" })); */
            
            console.log({ Loggedin: "Bienvenido a Mentoring!" })
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            
            console.log(res.data);
        }).catch(err => {
            dispatch({
                type: LOGIN_FAILED
            });
            
            console.error("El error es el siguiente : ",err.response.data, err.response.status);
        });
}

export {
    login
}


/* function setLogin(payload) {
    return {
        type: SET_LOGIN,
        payload
    }
}

export {
    setLogin
} */