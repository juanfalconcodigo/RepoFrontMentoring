import { initialState } from './state';
import { SAVE_CLIENT, SAVE_ALL_CLIENTS } from './constants';

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CLIENT:
            {
                const { payload: { response } } = action;
                return Object.assign({}, state, {
                    LastClient: response
                });
            }
            /* case SAVE_ALL_CLIENTS: {
              const { payload: { response } } = action;
              return Object.assign({}, state, {
                AllClients: [...state.AllClients, response]
              });
            } */
        default:
            return state
    }
}
export {
    UserReducer
}