const thisIsButton = document.getElementsByClassName('comment_submit')[0];
const thisIsInput = document.getElementsByClassName('comment_box')[0];
const thisIsUl = document.getElementsByClassName('new_comment')[0];

function buttonOn(){
    const inputValue = thisIsInput.value;
    if(inputValue.length > 0){
        thisIsButton.disabled = false;
        thisIsButton.style.opacity = 1;
        thisIsButton.style.cursor = 'pointer';
    }else{
        thisIsButton.disabled = true;
        thisIsButton.style.opacity = .4;
        thisIsButton.style.cursor = 'default';
    }
};

function addPost(){
    if(thisIsInput.value){
        const thisIsUser = document.createElement('span')
        thisIsUser.className = 'commenet_user_id';
        thisIsUser.innerText = 'k_rystalee';

        const thisIsText = document.createElement('span')
        thisIsText.className = 'comment_text';
        thisIsText.appendChild(thisIsUser);
        thisIsText.innerHTML += thisIsInput.value;
        
        const thisIsImg = document.createElement('img')
        thisIsImg.className = 'comment_heart';
        thisIsImg.setAttribute('src','img/heart.png');

        const thisIsDelete = document.createElement('span')
        thisIsDelete.className = 'delete';
        thisIsDelete.innerText = 'X';
        thisIsDelete.style.cursor = 'pointer';

        thisIsDelete.addEventListener('click',function(){
            thisIsList.remove();
        });

        const thisIsIcon = document.createElement('span')
        thisIsIcon.className = 'new_comment_icon';
        thisIsIcon.appendChild(thisIsImg);
        thisIsIcon.appendChild(thisIsDelete);

        const thisIsList = document.createElement('li')
        thisIsList.className = 'new_comment_list';
        thisIsList.appendChild(thisIsText);
        thisIsList.appendChild(thisIsIcon);

        thisIsUl.appendChild(thisIsList);

        thisIsInput.value = "";
    }

};

function enterOn(e) {
    if (e.code === 'Enter') {
        addPost();
    }
  };

thisIsButton.addEventListener('click', addPost);
thisIsInput.addEventListener('keyup', buttonOn);
thisIsInput.addEventListener('keydown', enterOn);

