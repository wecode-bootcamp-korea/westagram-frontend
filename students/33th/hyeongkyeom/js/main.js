const commentTxt = document.querySelector('.inputComment');
const commentBtn = document.querySelector('.addComment');
const commentList = document.querySelector('.feedBottom_comment');
const commentDelete = document.querySelector('.comment_delete');
const commentLike = document.querySelector('#comment_like');
const feedLike = document.querySelector('#feed_likeBtn');
const navMenubar = document.querySelector('.profile_menubar');
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

    comment.classList.add('comment_desc');
    nickname.classList.add('comment_nickname');
    mainText.classList.add('comment_txt');
    btn.classList.add('comment_Btn');
    like.setAttribute('class', 'fa-regular fa-heart');
    like.setAttribute('id', 'comment_like');
    deleteBtn.classList.add('comment_delete');

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
        img: "img/search_profile/spro1.jepg"
    },
    {
        id:1,
        userName: "ee._.vv",
        descName: "김은정",
        img: "img/search_profile/spro1.jepg"
    },
    {
        id:2,
        userName: "ee._.vv",
        descName: "김은정",
        img: "img/search_profile/spro1.jepg"
    },
    {
        id:3,
        userName: "ee._.vv",
        descName: "김은정",
        img: "img/search_profile/spro1.jepg"
    },
    {
        id:4,
        userName: "ee._.vv",
        descName: "김은정",
        img: "img/search_profile/spro1.jepg"
    },
];

console.log(navSearch.value);

const searchWesta = (e) => {
    const searchList = document.createElement('li');
    const searchImg = document.createElement('img');
    const searchId = document.createElement('span');
    const searchName = document.createElement('p');
    const searchUser = document.createElement('div');

    for (i=0; i < users.length; i++) {
        if((e.target.value).includes(users[i].userName || users[i].descName)) {
            searchList;
            searchImg.setAttribute('src', users[i].img);
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
}

navSearch.addEventListener('input', function() {
    searchWesta();
})

console.log(users[1].userName);
console.log(e.target.value);