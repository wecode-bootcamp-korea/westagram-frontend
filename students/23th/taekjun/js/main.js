'use strict';

let inputEnterSend = document.getElementsByClassName('inputComment')[0];
let sendBtn = document.getElementsByClassName('send')[0];
let commentInput = document.getElementsByClassName('inputComment')[0];
let commentArea = document.getElementsByClassName('commentArea')[0];
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
  nameTag.innerHTML = user;
  // let name = document.createTextNode(user);
  // nameTag.appendChild(name);
  nameTag.className = 'name';
  
  let commentTag = createPTag();
  let commentValue = commentInput.value; 
  let comment = document.createTextNode(commentValue);
  commentTag.appendChild(comment);
  commentTag.className = 'commentContext';

  // let commentDeleteTag = createPTag();
  // let commentDelete = document.createTextNode('x');
  // commentDeleteTag.appendChild(commentDelete);
  // commentDeleteTag.className = 'commentDelete';

  let commentContainerTag = createSectionTag();
  commentContainerTag.appendChild(nameTag);
  commentContainerTag.appendChild(commentTag);
  // commentContainerTag.appendChild(commentDeleteTag);
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
// ------- deletekey 누르면 comment 삭제하기



// let commentContainer1 = document.getElementsByClassName('whoseComment')[0];
  
// // commentContainer1.remove();

// function commentDelete(e) {
//   let li = e.target.parentElement
//   li.remove();
// }

// commentDeleteBtn.addEventListener("click", commentDelete);
// // commentDeleteBtn 얘는 배열이야. 그러니까 이벤트리스터가 안먹히지.

// 1. x 이미지에 이벤트를 건다.
// 2. event.target을 활용해 x 이미지에 이벤트가 동작했을 때 해당 엘리먼트를 가져온다.

// let li = event.target.parentElement;
// li.remove();

// function deleteComment() {  
//   commentContainer1.forEach(el => {
//     el.remove();
//   });
// }


