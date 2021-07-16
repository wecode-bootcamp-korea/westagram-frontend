
// const  id = document.querySelector('.inputWrapid') ;
// const  password= document.querySelector('.inputPassword') ;
// const button = document.querySelector('.inputWrapButton')
// const idValue = document.querySelector('.inputWrapid').value

// const login = () => {
  
//     if (idValue.length >= 5){ 
//         button.classList.add("active");
//        }else{
//         button.classList.remove("active");
//        }
//     }

// id.addEventListener('keyup', login);





// addEventListener();

// const userId = document.querySelector(".loginId");
// const userPw = document.querySelector(".loginPw");
// const userBtn = document.querySelector(".loginBtn");
// const Validation = ()=>{
//      const memberId = userId.value;
//      const memberPw = userPw.value;
//      if(memberId.includes("@") && memberPw.length >= 5){
//         userBtn.classList.add("active");
//     }else{
//          userBtn.classList.remove("active");
//      }
// // }
// userId.addEventListener('keyup',Validation);
// userPw.addEventListener('keyup',Validation);




// 내가한거 

const  id = document.querySelector('.inputWrapid') ;
const  password= document.querySelector('.inputPassword') ;
const button = document.querySelector('.inputWrapButton')
const idValue = document.querySelector('.inputWrapid').value

const login = () => {
      if (idValue.length >= 5) 
        document.querySelector('.inputWrapButton').style.backgroundColor='blue';
    }




click.addEventListener('keyup', login);
