import {
    SET_LOGIN
} from "./constants";

function setLogin(payload) {
    return {
        type: SET_LOGIN,
        payload
    }
}

export {
    setLogin
}