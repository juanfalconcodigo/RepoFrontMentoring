import { initialState } from './state';
import { GET_DATA } from "./constants";

function allData(state, action) {
    const {
        payload: data
    } = action;

    return Object.assign({}, state, {
        data
    });
}


function HomeReducers(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return allData(state, action);

        default:
            return state;
    }
}

export {
    HomeReducers
}