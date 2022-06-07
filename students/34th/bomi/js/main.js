const textbox = document.querySelector('#commentInput');
const whereToAdd = document.getElementsByClassName('commentSection')[0];
const button = document.getElementById('publish');
const pop = document.getElementsByClassName('popup')[0];
const deletepop = document.getElementById('deleteComment');
const heart = document.getElementById('heartImg');
const searchBar = document.getElementById('searchBar');
const searchBox = document.getElementsByClassName('searchBox')[0];
const searchList = document.getElementsByClassName('searchList')[0]; 

// 계정 데이터 배열
const userArray = [
    {id: "ncit_kimjw",
    nickname: "jungwoo",
    image: 'img/rec1.png'},

    {id: "ncit_juoohyung",
    nickname: "juhyun",
    image: 'img/rec1.png'},
    
    {id: "bommikim",
    nickname: "bomi",
    image: 'img/rec2.png'},

    {id: "bommively",
    nickname: "wendy",
    image: 'img/rec2.png'},
    
    {id: "fullsin_ncit",
    nickname: "Haechan",
    image: 'img/rec3.png'},

    {id: "_jeongjaehyun",
    nickname: "Jay",
    image: 'img/rec4.png'},
    
    {id: "jeonghyun_lee",
    nickname: "jeonghyun",
    image: 'img/rec5.png'}
    ]   


button.disabled = true;


const createComment = () => {
    // userId
    let userId = "userId"
    // getting comment from input
    const comment = textbox.value;
    // element = comment + like button
    const element = document.createElement('p');
    element.className = "individualComment";
    element.setAttribute("style", "width:430px");
    // like 
    const like = document.createElement("input");
    like.className = "like";
    like.src = "img/navHeart.jpeg";
    like.type ='image';
    like.setAttribute("style", "height: 15px; width: 15px");
    like.style.float = 'right';
    // creating element and append it
    
    element.innerHTML = "<span>userID  </span>" + comment;
    //element.innerHTML = newComment;
    //element.innerHTML = userId + "  " + comment;
    whereToAdd.appendChild(element);
    element.append(like);
}


const publishActive = () => {
    const comment = textbox.value;
    if (comment.length > 0) {
        button.style.color = "#0095f6"
        button.disabled = false;
    } else {
        button.style.color = "#BFE0FD"
        button.disabled = true;
    }
}

// return if in the searchId
const matchSearch = (idArray)  => {
    const searchID = searchBar.value;
    return idArray.indexOf(searchID) != -1;
}

// show filtered ID in the right format and by appending it to searchList (wheretoinsert)
const showFilteredId = (account) => {
    searchBox.style.display = 'block';
    const filteredUser = document.createElement('li');
    filteredUser.style.listStyle = 'none';

    filteredUser.innerHTML = `<img class = "searchImg" src=${account.image} alt=${account.id} 사진 />
    <div class="searchContainer">
      <span>${account.id}</span>
      <span class="searchNickname">${account.nickname}</span>
    </div>`;

    searchList.appendChild(filteredUser);
}

// when searchbar has keyup, use array.filter and forEach to show only filtered ones
searchBar.addEventListener('keyup', function() {
    searchList.innerHTML = '';
    searchBox.style.display = "none";
    if(searchBar.value) {
        const filteredId = userArray.filter( x => matchSearch(x.id)) 
        if (filteredId) {
            filteredId.forEach(function(e) {
                showFilteredId(e);
            })
        }
    }
})


searchBar.addEventListener("focusout", () => {
    searchBox.style.display = "none";
  });


textbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createComment()
        textbox.value = '';
    }
});

button.addEventListener('click', function () {
    createComment()
    textbox.value = '';
});

textbox.addEventListener('keyup', function (e) {
    publishActive();
})

heart.addEventListener('click', function () {
    if (heart.src.match('img/navHeart.jpeg')) {
        heart.setAttribute('src', 'img/redHeart.jpeg');
    } else if (heart.src.match('img/redHeart.jpeg')) {
        heart.setAttribute('src', 'img/navHeart.jpeg')
    }
})

document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('individualComment')) {
        pop.style.visibility = 'visible';

        deletepop.addEventListener('click', function () {
            e.target.remove();
            pop.style.visibility = 'hidden';
        })
    }
})


document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('like') && e.target.src.match('img/navHeart.jpeg')) {
        e.target.setAttribute('src', 'img/redHeart.jpeg')
    } else if (e.target.classList.contains('like') && e.target.src.match('img/redHeart.jpeg')) {
        e.target.setAttribute('src', 'img/navHeart.jpeg')
    }

})
