const thisIsEmail = document.getElementById('login-email');
const thisIsPw = document.getElementById('login-pw');
const thisIsBtn = document.getElementById('login-btn');

thisIsEmail.addEventListener('keyup', function(){
    if(thisIsEmail.value !== " " && thisIsPw.value.length >= 5){
        document.getElementById('login-btn').style.background = '#0096f6'
    console.log()
    }else{
        document.getElementById('login-btn').style.background = '#c4e1fb'
    console.log()
    }
    
});

thisIsPw.addEventListener('keyup', function(){
    if(thisIsEmail.value !== " " && thisIsPw.value.length >= 5){
        document.getElementById('login-btn').style.background = '#0096f6'
    console.log()
    }else{
        document.getElementById('login-btn').style.background = '#c4e1fb'
    console.log()
    }
    
});


