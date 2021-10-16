"use strict"

const loginForm = document.getElementById('loginForm')
const username = document.getElementById('username')
const password = document.getElementById('password')
const loginBtn = document.getElementById('loginBtn')

loginForm.addEventListener('input', () => {
  if(username.value.indexOf('@') !== -1 && password.value.length >= 5) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
})

