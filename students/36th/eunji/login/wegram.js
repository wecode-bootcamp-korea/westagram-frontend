


const inputs = document.getElementsByClassName("put")[0]
const loginBtn = document.getElementById("button")


const handleInput = () => {
    const idValue = document.getElementById("id").value;
    const pwValue = document.getElementById("pw").value;

    const inValidId = checkValue(idValue)
    const inValidpw = checkValue (pwValue)

    const isValidValue = inValidId && inValidpw

    handleBtn(isValidValue)
}


const checkValue = (value) => {
    if(value.length>0){
        return true;
    }
    else {
        return false;
    }
}

const handleBtn = (isBtnValid)=>{

    if(isBtnValid){
        loginBtn.disabled = false;
        loginBtn.style.opacity = 1;
    }
    else {
        loginBtn.disabled = true;
        loginBtn.style.opacity = 0.5;
    }
}

const init = () => {
    inputs.addEventListener("input",handleInput)
    inputs.addEventListener("keyup", handleInput)
}

init()
