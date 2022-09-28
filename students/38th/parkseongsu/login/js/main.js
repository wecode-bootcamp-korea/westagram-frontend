const commentInput = document.getElementById('commentInput');
const commentbtn = document.getElementById('commentbtn');
const commentList = document.getElementById('commentlist');
const menuIcon = document.getElementById('menuIcon');
const dropMenu = document.getElementById('dropMenu');
const articleHeartIcon = document.querySelector('.likebox .heartIcon')

// const commentarr = [];

// function appendLocalStorage(){
//     localStorage.setItem('comment', JSON.stringify(commentarr));
// }

function writeComment(){
    const userId = sessionStorage.getItem('userId');
    const commentValue = commentInput.value;
    const li = document.createElement('li');

    commentList.appendChild(li);
    // let newObj = {'id' : Date.now(), 'value' : commentValue};
    // commentarr.push(newObj);

    const userIdSpan = document.createElement('span');
    const textSpan = document.createElement('span');
    const heartBtn = document.createElement('span');
    const removeBtn = document.createElement('span');

    heartBtn.classList.add('emptyHeart');
    textSpan.classList.add('commentmargin');
    removeBtn.classList.add('removeBtn');
    userIdSpan.classList.add('boldWeight');

    userIdSpan.innerText = `${userId} `;
    textSpan.innerText = ` ${commentValue}`;
    

    
    li.appendChild(userIdSpan);
    li.appendChild(textSpan);
    li.appendChild(heartBtn);
    li.appendChild(removeBtn);

    commentInput.value = null;
}

function createDropbar(){
    dropMenu.classList.toggle('displaynone')
}

function articleHeart(){
    articleHeartIcon.classList.toggle('fullHeart')
}

// commentInput.addEventListener('change', writeComment);
commentbtn.addEventListener('click', writeComment);
menuIcon.addEventListener('click', createDropbar);
articleHeartIcon.addEventListener('click', articleHeart)