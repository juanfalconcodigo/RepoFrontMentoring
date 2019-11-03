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
    user:localStorage.getItem('user'),
    password:localStorage.getItem('password')
}

export {
    initialState
}