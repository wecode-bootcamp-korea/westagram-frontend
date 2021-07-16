

function writeReply() {
  const reply = document.querySelector(`#reply`);
  const replyButton = document.querySelector(`.replyButton`);

  reply.addEventListener(`keyup`, function()  { 
    if(reply.value) {
    replyButton.style.color = "#0095F6";
    replyButton.style.cursor = "pointer";
    }
    else  {
    replyButton.style.color = "#C0DFFD";
    replyButton.style.cursor = "inherit";
    }
  })
  console.log(reply.value);
}

function ReplySubmit() {
  const reply = document.querySelector(`#reply`);
  console.log("1");

  const newReplyDiv = document.createElement(`div`); // div를 만들고
  const replyDivClass = document.createAttribute(`class`); //만든 div의 클래스를 만들고
  replyDivClass.value = `feedReplyPart1`; // 클래스속성으 속성의 값을 설정하고
  newReplyDiv.setAttributeNode(replyDivClass); // 설정한 속성값을 만든 div에 넣어주고
  
  const newReplyDiv2 = document.createElement(`div`); // div를 만들고

  const spanId = document.createElement(`span`);
  const spanIdClass = document.createAttribute(`class`);
  spanIdClass.value = `feedReplyId`;
  spanId.setAttributeNode(spanIdClass);
  const spanIdValue = document.createTextNode(`여기 아이디`);
  spanId.appendChild(spanIdValue);
  const spanReply = document.createElement(`span`);
  const spanReplyClass = document.createAttribute('class');
  spanReplyClass.value =`feedReplyContents`;
  spanReply.setAttributeNode(spanReplyClass);

  const spanReplyValue = document.createTextNode(reply.value);
  spanReply.appendChild(spanReplyValue);

  newReplyDiv2.appendChild(spanId);
  newReplyDiv2.appendChild(spanReply);

  const newReplyDiv3 = document.createElement(`div`);
  const deleteReplyClass = document.createAttribute(`class`); //만든 div의 클래스를 만들고
  deleteReplyClass.value = `deleteReply`; // 클래스속성으 속성의 값을 설정하고
  newReplyDiv3.setAttributeNode(deleteReplyClass); // 설정한 속성값을 만든 div에 넣어주고

  const iDelete = document.createElement(`i`);
  const iDeleteClass = document.createAttribute(`class`);
  iDeleteClass.value = `fas fa-times deleteButton`;
  iDelete.setAttributeNode(iDeleteClass);

  const iHeart = document.createElement(`i`);
  const iHeartClass = document.createAttribute(`class`);
  iHeartClass.value = `far fa-heart fa-sm`;
  iHeart.setAttributeNode(iHeartClass);

  newReplyDiv3.appendChild(iDelete);
  newReplyDiv3.appendChild(iHeart);

  newReplyDiv.appendChild(newReplyDiv2);
  newReplyDiv.appendChild(newReplyDiv3);
  
  const replyBox = document.querySelector(`.feedReplyBox`); //부모가될 div 클래스를 찾아주고
  // replyBox.appendChild(newReplyDiv); //만든 div를 부모 div 안에 자식으로 넣는다.

  const stopPoint = document.querySelector(`.feedReplyInfoPart`);
  replyBox.insertBefore(newReplyDiv, stopPoint );
  
  const textarea = document.querySelector(`.textarea`);
  textarea.value = "";

  const heartReply = document.querySelectorAll(`.heartReply`);
  console.log("kjkj" + heartReply);

  console.log("2");
  deleteReply();
}

function deleteReply()  {
  const replyArr = document.querySelectorAll(`.feedReplyPart1`);
  console.log(replyArr);
  const deleteBtn = document.querySelectorAll(`.deleteButton`);
  console.log(deleteBtn);
  const replyBox = document.querySelector(`.feedReplyBox`);

  for(i=0; i<deleteBtn.length; i++) {
    deleteClick(i)
  }
  function deleteClick(idx) {
    deleteBtn[idx].addEventListener(`click`, event =>{
      console.log(idx);
      replyBox.removeChild(replyArr[idx]);
    })
  }
  
}

function resize(obj) {
  obj.style.height = "25px";
  obj.style.height = (obj.scrollHeight) + "px";
}

function ReplyEnterSubmit() {

  const textarea = document.querySelector(`.textarea`);
  textarea.addEventListener(`keyup`, event => {
    if(event.keyCode === 13)  {
      ReplySubmit();
    }
  })
}

function likeHeatChange() {
  const heart = document.querySelector(`#feedHeart`);
  const heartReply = document.querySelectorAll(`.heartReply`);

  console.log(heartReply);

  
  heart.addEventListener(`click`, event => {
    if(heart.className === `far fa-heart fa-lg`)  {
      heart.className = `fas fa-heart fa-lg colorPink`
    }
    else
      heart.className = `far fa-heart fa-lg`;
  })

  for(i=0; i<heartReply.length; i++)  {
    likeReply(i)
  }

  function likeReply(idx) {
    heartReply[idx].addEventListener(`click`, event => {
      console.log(idx);
    })
  }

}

function userIdSet()  {
  const userId = document.querySelector(`.idLink`);
  userId.innerHTML = localStorage.getItem(`id`);
}




userIdSet();
ReplyEnterSubmit();
writeReply();
deleteReply();
likeHeatChange();


