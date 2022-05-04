const commentTxt = document.querySelector('.inputComment');
const commentBtn = document.querySelector('.addComment');
const commentList = document.querySelector('.feedBottomComment');
const commentDelete = document.querySelector('.commentDelete');
const commentLike = document.querySelector('#commentLike');
const feedLike = document.querySelector('#feedHeartBtn');
const navMenubar = document.querySelector('.profileMenubar');
const navProfile = document.querySelector('.navProfile');
const navSearch = document.querySelector('.navSearch');
const searchBar = document.querySelector('.searchBar');

const commentBtnActive = () => {
    if (!(commentTxt.value)) {
        commentBtn.disabled = true;
    } else {
        commentBtn.disabled = false;
    }
}

commentTxt.addEventListener('keyup', commentBtnActive);


const addComment = () => {
    const comment = document.createElement('div');
    const nickname = document.createElement('span');
    const mainText = document.createElement('p');
    const bold = document.createElement('b');
    const btn = document.createElement('div');
    const like = document.createElement('i');
    const deleteBtn = document.createElement('button');

    comment.classList.add('commentDesc');
    nickname.classList.add('commentNickname');
    mainText.classList.add('commentTxt');
    btn.classList.add('commentBtn');
    like.setAttribute('class', 'fa-regular fa-heart');
    like.setAttribute('id', 'commentLike');
    deleteBtn.classList.add('commentDelete');

    nickname.innerHTML = 'hang_ke_mi';
    mainText.innerText = commentTxt.value;
    deleteBtn.innerHTML = '삭제';

    btn.append(deleteBtn);
    btn.append(like);
    commentList.append(comment);
    bold.append(nickname);
    comment.append(bold);
    comment.append(mainText);
    comment.append(btn);
    like.addEventListener('click', () => {
        if (like.style.color !== 'red') {
            like.classList.remove();
            like.setAttribute('class', 'fa-solid fa-heart');
            like.style.color = 'red';
        } else if (like.style.color === 'red') {
            like.classList.remove();
            like.setAttribute('class', 'fa-regular fa-heart');
            like.style.color = "black";
        }
        
    })
    deleteBtn.addEventListener('click', () => {
        comment.remove();
    })
}

commentBtn.addEventListener('click', () => {
    addComment()
    commentTxt.value = "";
});

commentTxt.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        addComment()
        commentTxt.value = "";
    }
})



const feedLikeBtn = () => {
    if (feedLike.style.color !== 'red') {
        feedLike.classList.remove();
        feedLike.setAttribute('class', 'fa-solid fa-heart');
        feedLike.style.color = 'red';
    } else if (feedLike.style.color === 'red') {
        feedLike.classList.remove();
        feedLike.setAttribute('class', 'fa-regular fa-heart');
        feedLike.style.color = "black";
    }
}


    
const openMenubar = () => {
    if (navMenubar.style.display === 'none') {
        navMenubar.style.display = 'block';
    } else {
        navMenubar.style.display = 'none';
    }
}

navProfile.addEventListener('click', () => {
    openMenubar();
})

const showSearchBar = () => {
    if(!(navSearch.value)) {
        searchBar.style.display = 'none';
        
    } else {
        searchBar.style.display = 'block';
    }
}

navSearch.addEventListener('keyup', function() {
    showSearchBar();
})

const users = [
    {
        id:0,
        userName: "ee._.vv",
        descName: "김은정",
        img: "img/search_profile/spro1.jpeg"
    },
    {
        id:1,
        userName: "gudrua0531",
        descName: "김정준",
        img: "img/search_profile/spro2.jpeg"
    },
    {
        id:2,
        userName: "kyeom1997",
        descName: "신윤지",
        img: "img/search_profile/spro3.jpeg"
    },
    {
        id:3,
        userName: "goww1357",
        descName: "장수연",
        img: "img/search_profile/spro4.jpeg"
    },
    {
        id:4,
        userName: "wecode_bootcamp",
        descName: "위코드",
        img: "img/search_profile/spro5.jpeg"
    },
];

console.log(navSearch.value);

navSearch.addEventListener('keyup', function(e) {
    const searchList = document.createElement('li');
    const searchImg = document.createElement('img');
    const searchId = document.createElement('span');
    const searchName = document.createElement('p');
    const searchUser = document.createElement('div');

    for (i=0; i < users.length; i++) {
        if((users[i].userName || users[i].descName).includes(e.target.value)) {
            searchList;
            searchImg.setAttribute('src', users[i].img);
            searchImg.classList.add('searchImg')
            searchId.classList.add('searchId');
            searchId.innerHTML = users[i].userName;
            searchName.classList.add('searchName');
            searchName.innerHTML = users[i].descName;
            searchUser.classList.add('searchUser');

            searchUser.append(searchId);
            searchUser.append(searchName);
            searchList.append(searchImg);
            searchList.append(searchUser);
            searchBar.append(searchList);
        }
    }
    
    console.log(e.target.value);
})

console.log(users[1].userName);
