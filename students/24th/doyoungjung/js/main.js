const newInput = document.querySelector(".inputText");
const clickBtn = document.querySelector(".inputBtn");
const form = document.querySelector(".addReply")

function moreReply(){
  let replySpace = document.querySelector(".feedReply");
  let inputText = newInput.value;
  let newDiv = document.createElement('div');
  let newSpan1 = document.createElement('span');
  let newSpan2 = document.createElement('span');

  newDiv.classList.add('friendsReply');
  newSpan1.innerHTML = "doyboy03";
  newSpan2.innerHTML = inputText;

  replySpace.appendChild(newDiv);
  newDiv.appendChild(newSpan1);
  newDiv.appendChild(newSpan2);

  newInput.value = "";
}

clickBtn.addEventListener("mousedown",moreReply);

function moreReply2(event){
    if(event.keyCode == 13){
    let replySpace = document.querySelector(".feedReply");
    let inputText = newInput.value;
    let newDiv = document.createElement('div');
    let newSpan1 = document.createElement('span');
    let newSpan2 = document.createElement('span');
  
    newDiv.classList.add('friendsReply');
    newSpan1.innerHTML = "doyboy03";
    newSpan2.innerHTML = inputText;
  
    replySpace.appendChild(newDiv);
    newDiv.appendChild(newSpan1);
    newDiv.appendChild(newSpan2);
  
    newInput.value = "";
    }
  }

  form.addEventListener("submit" , (e)=>{
    e.preventDefault();
})

newInput.addEventListener("keyup", moreReply2);