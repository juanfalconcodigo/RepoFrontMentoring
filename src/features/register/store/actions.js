import { UserService, userUrls } from '../../../api';
import { SAVE_CLIENT, SAVE_ALL_CLIENTS } from './constants';

const userService = new UserService();

const saveClient = (response) => {
    return {
        type: SAVE_CLIENT,
        payload: {
            response
        }
    }
}

/* const saveAllClients = (response) => {
  return {
    type: clientTypes.SAVE_ALL_CLIENTS,
    payload: {
      response
    }
  }
} */

/* const error = (err) => {
  return {
    type: clientTypes.SAVE_ALL_CLIENTS,
    payload: {
      err
    }
  }
} */

const requestCreateClient = (body) => {
    return (dispatch, getState) => {
        userService
            .createUser(userUrls.createUsers, body)
            .then(response => {
                console.log(response)
                dispatch(saveClient(body));
                /* dispatch(saveAllClients(body)); */
            }).catch((err) => {
                console.error('El error es : ', err);
                /* dispatch(error(err)) */
            })
    }
};

export {
    /* saveClient,
    saveAllClients, */
    saveClient,
    requestCreateClient
}