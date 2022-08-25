const feedsForm = document.querySelector("#feedsForm");
const feedsInput = document.querySelector("#feedsInput");
const ul = document.querySelector("#feedsList");
const searchInput = document.querySelector("#search-inputbox");

// 상단 사용자 검색

const idDataBase = [
    {
        name : "wecode_bootcamp",
        desc : "위코드 부트캠프",
    },
    {
        name : "wecode_founder",
        desc : "송은우"
    }
]

function searchId (e) {
    let insertValue = e.target.value;
    if (insertValue ) {

    }
}

searchInput.addEventListener('keyup', searchId);


// 댓글 추가

function addComments (event) {
    event.preventDefault();
    const feeds = feedsInput.value;
    const li = document.createElement("li");
    const iconLike = document.createElement("p");
    const iconDelete = document.createElement("p");
    const iconBox = document.createElement("div");
    iconLike.classList.add("like");
    iconDelete.classList.add("del");
    li.innerText = feeds;
    iconLike.innerText = '♥';
    iconDelete.innerText = '✖';
    iconBox.appendChild(iconLike);
    iconBox.appendChild(iconDelete);
    li.appendChild(iconBox);
    ul.appendChild(li);
    feedsInput.value = "";

 
    // 좋아요 버튼, 반복문 코드, 짝수만 토글 적용
    const likeIcon = document.getElementsByClassName("like");
    for (let i = 0; i < likeIcon.length; i++) {
        likeIcon[i].addEventListener('click', changeIconColor)
    }
    function changeIconColor(e) {
        console.log(e.target)
        e.target.classList.toggle("icon-red");
    }    

    // 삭제 버튼,
    const deleteIcon = document.getElementsByClassName("del");
    for (let i = 0; i < deleteIcon.length; i++) {
        deleteIcon[i].addEventListener('click', deleteComments);
    }
    function deleteComments(e) {
        console.log(e.target)
        this.parentElement.parentElement.remove();
    }
}



feedsForm.addEventListener('submit', addComments)
