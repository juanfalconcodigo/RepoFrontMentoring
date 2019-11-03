import { UserService, userUrls } from '../../../api';
import { SAVE_CLIENT, SAVE_ALL_CLIENTS } from './constants';
import { message } from 'antd';
const userService = new UserService();


function decirSuccess() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(`Registro exitoso`));
}

function decirError() {
    speechSynthesis.speak(new SpeechSynthesisUtterance("Verifique ingreso de datos"));
}



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
                message.success('Registro exitoso!!!', 2);
                decirSuccess()
                console.log(response)
                dispatch(saveClient(body));
                /* dispatch(saveAllClients(body)); */
            }).catch((err) => {
                message.error('Verifique ingreso de datos!!!', 2);
                decirError()
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