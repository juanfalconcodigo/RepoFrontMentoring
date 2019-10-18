/* const initialState = {
    login: false,
    token: "",
    user: ""
} */



const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    username: null,
    isLoading: false,
}

export {
    initialState
}