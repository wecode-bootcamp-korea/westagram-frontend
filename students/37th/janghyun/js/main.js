const thisIsInput = document.getElementById('feedInput');
const thisIsSubmitButton = document.getElementById('submitButton');
const thisIsFeedBoxWrap = document.getElementsByClassName('feedboxWrap')[0];
const thisIsFeedBox = document.getElementsByClassName('feedBox')[0];
const thisIsInputForm = document.getElementsByClassName('feedInputBox')[0];
// const thisIsHeartIcon = document.querySelectorAll('.heartIcon')[0];
const thisIsHeartIcon = document.getElementsByClassName('heartIcon')[0];
const thisIsHeartIconFull = document.querySelector('.heartIconFull');
// const thisIsFeedBox1 = document.querySelector('.feedBox');
// const thisIsFeedDelete = document.querySelectorAll('.trashIcon')[0].hasChildNodes();


//console.log(thisIsInputBox);


// function submitText(e) { // 기존 코드

// e.preventDefault();

//   const thisIsComment = thisIsInput.value;
//   const newSpan = document.createElement("span");
//   const newDiv = document.createElement("div");
//   const newComment = document.createTextNode(thisIsComment);

//     //console.log(`${e.code}`);

//   if(thisIsComment || e.keyCode === 13) {
//   newSpan.appendChild(newComment);
//   const currentDiv = document.getElementById("div");
//   newDiv.classList.add('feedBox');
//   const currentSpan = document.getElementById("span");

//   thisIsFeedboxWrap.insertBefore(newDiv, currentDiv).insertBefore(newSpan, currentSpan);
//   thisIsInput.value = null;

//   }
// };

function submitText(e) { // 새코드

    e.preventDefault();
    
    const thisIsComment = thisIsInput.value;
    const thisIsNewFeedBox = document.createElement('div');
    const content = `
        <div class="feedWrap1">
        <span id="feedId">canon_mj</span>
        <span id="feed">${thisIsComment}</span>
        <span id="feedMore">더 보기</span>
        </div>
        <div class="feedWrap2">
        <span><i class="fa-regular fa-trash-can"></i></span>
        <span><i class="fa-regular fa-heart"></i></span>
        </div>
    `;

    // console.log(thisIsComment, content);

    thisIsNewFeedBox.classList.add('feedBox');
    thisIsNewFeedBox.innerHTML = content;
    thisIsFeedBoxWrap.appendChild(thisIsNewFeedBox);
    };

function changeColor(e) {
    
    console.log(e.target);
    // console.log(thisIsHeartIcon);
    console.log(e.target.style.color);
    let heart = e.target.style.color;
    let tagName = e.target.classList[1];
    console.log(heart, tagName, 1);

    
    if(tagName == 'fa-heart' && heart == 'black') {
        e.target.style.color = 'red';
    } else {
        e.target.style.color = 'black';
    }
    
};

// thisIsSubmitButton.addEventListener('click', submitText);
// thisIsInput.addEventListener('keypress', submitText);
thisIsInputForm.addEventListener('submit', submitText);
thisIsFeedBoxWrap.addEventListener('click', changeColor);