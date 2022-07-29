const userNameInput = document.querySelector(".userName");
const passwordInput = document.querySelector(".passwordInput");
const logInButton = document.querySelector("button");




// userNameInput.addEventListener("keyup", () =>{
    
//     if(passwordInput.value.length > 0 && userNameInput.value.length > 0){
//             logInButton.style.backgroundColor = "#1596f6";
      
//     }else{       
//     logInButton.style.backgroundColor = "#C0DFFD";
//     }
    
       

// });


// passwordInput.addEventListener("keyup", () =>{
    
//     if(passwordInput.value.length > 0 && userNameInput.value.length > 0){
//             logInButton.style.backgroundColor = "#1596f6";
//     }else {
//         logInButton.style.backgroundColor = "#C0DFFD";
// }

// });




userNameInput.addEventListener("keyup", () =>{
    
    if(passwordInput.value !== "" && userNameInput.value !== ""){
            logInButton.style.backgroundColor = "#1596f6";
      
    }else{       
    logInButton.style.backgroundColor = "#C0DFFD";
    }
    
       

});


passwordInput.addEventListener("keyup", () =>{
    
    if(passwordInput.value !== "" && userNameInput.value !== ""){
            logInButton.style.backgroundColor = "#1596f6";
    }else {
        logInButton.style.backgroundColor = "#C0DFFD";
}

});
