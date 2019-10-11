import {
    initialState
} from "./state";
import {
    SET_LOGIN
} from "./constants";

function AuthReducer(state = initialState, action = {}) {
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
}

export {
    AuthReducer
}