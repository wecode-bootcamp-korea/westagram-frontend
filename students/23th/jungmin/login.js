
let password1 = document.getElementById('password');
let id1 = document.getElementById('id');

function loginfuc(){
  if (password1.value !== ""){
    console.log("password1");
  }
  else{
    console.log("no");
  }
}

document.getElementById("password").addEventListener("keyup",function(event){
    console.log(password1);
})




document.getElementById("id").addEventListener("keyup",function(event){
    console.log(id1);
})
