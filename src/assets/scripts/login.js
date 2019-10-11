const login = document.getElementById('login');
const register = document.getElementById('register');
const btn = document.getElementById('btn');

const regbtn = document.getElementById('regbtn').addEventListener('click', () => {
    login.style.left = "-400px";
    register.style.left = "50px";
    btn.style.left = "110px";
})

const logbtn = document.getElementById('logbtn').addEventListener('click', () => {
    login.style.left = "50px";
    register.style.left = "540px";
    btn.style.left = "0px";
})