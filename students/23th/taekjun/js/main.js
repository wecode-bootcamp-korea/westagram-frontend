'use strict';

let sendBtn = document.getElementsByClassName('send')[0];
let commentInput = document.getElementsByClassName('inputComment')[0];
let commentArea = document.getElementsByClassName('commentUploaded')[0];
let commentContainer = document.getElementsByClassName('whoseComment')[0];
let commentDelete = document.getElementsByClassName('commentDelete')[0];

// ------- input tag에 event 부여 --------
function sendComment() {
  function createPTag() {
    let a = document.createElement('p');
    return a;
  }
  
  function createSectionTag() {
    let b = document.createElement('section');
    return b;
  }
  
  let people = [];
  for(let i = 0; i < 10; i++) {
    people.push('user'+i);
  }
  let user = people[Math.trunc(Math.random()*10)];

  let nameTag = createPTag();
  let name = document.createTextNode(user);
  nameTag.appendChild(name);
  nameTag.className = 'name';
  
  let commentTag = createPTag();
  let commentValue = commentInput.value; 
  let comment = document.createTextNode(commentValue);
  commentTag.appendChild(comment);
  commentTag.className = 'commentContext';

  let commentContainerTag = createSectionTag();
  commentContainerTag.appendChild(nameTag);
  commentContainerTag.appendChild(commentTag);
  commentContainerTag.className = 'whoseComment';

  commentArea.appendChild(commentContainerTag);

  (function() {
    let el = document.getElementsByClassName('inputComment');
    
    for(let i = 0; i < el.length; i++) {
      el[i].value = '';
    }  
  })();  
}

function enterkey() {
  if (window.event.keyCode == 13) {
    sendComment();
  }
}

sendBtn.addEventListener("click", sendComment);

