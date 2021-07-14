const mypageBox = document.querySelector("#header .mypageBox");
const mypagePop = document.querySelector("#header .mypagePop");
const searchZone = document.querySelector(".searchZone");
const searchForm = document.querySelector(".searchZone form");
const searchInput = document.querySelector(".searchZone form .input");
const searchPop = document.querySelector(".searchZone .searchPop");
const searchUl = document.querySelector(".searchZone .searchPop ul");
const commentForm = document.querySelector(".feedCommentInput form");
const commentInput = document.querySelector(".feedCommentInput .input");
const commentList = document.querySelector(".feedComment ul");
const commentButton = document.querySelector(".feedCommentInput .commentBtn");

const idData = [
    {id: "W0nhong__", imgUrl: "images/profile_img.jpeg", info: "W0nhong소개글", profileUrl: "https://www.naver.com/"},
    {id: "hj._.__s2", imgUrl: "images/profile_img.jpeg", info: "hj._.__s2소개글", profileUrl: "https://www.daum.net/"},
    {id: "kvwowv", imgUrl: "images/profile_img.jpeg", info: "kvwowv소개글", profileUrl: "https://wecode.co.kr/?gclid=CjwKCAjwlrqHBhByEiwAnLmYUD8aCer8FbdtZ8BzOFlwHX8HI-HwDbdHb4PW6-YW1NDDsDwMYGlsZRoCurgQAvD_BwE"},
    {id: "kvvow22", imgUrl: "images/profile_img.jpeg", info: "kvvow22소개글", profileUrl: "#"},
    {id: "abcd_efg", imgUrl: "images/profile_img.jpeg", info: "abcd_efg소개글", profileUrl: "#"},
    {id: "abcd_efaaaa__", imgUrl: "images/profile_img.jpeg", info: "abcd_efaaaa__소개글", profileUrl: "#"},
    {id: "ww0_jfd", imgUrl: "images/profile_img.jpeg", info: "ww0_jfd소개글", profileUrl: "#"}
];

const openMypage = (e) => {
    mypagePop.style.display = "block";
}

const closePop = (e) => {
    (!mypageBox.contains(e.target)) && (!searchZone.contains(e.target)) ? (mypagePop.style.display = "none") && (searchPop.style.display = "none") : false;
}

const searchDataPaint = () => {
    idData.forEach((el)=>{
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = el.profileUrl;
        a.target= "_blank";
        const searchImg = document.createElement("div");
        searchImg.classList.add("searchImg");
        const img = document.createElement("img");
        img.src = el.imgUrl;
        const searchInfo = document.createElement("div");
        searchInfo.classList.add("searchInfo");
        const userId = document.createElement("div");
        userId.classList.add("userId");
        userId.innerText = el.id;
        const userInfo = document.createElement("div");
        userInfo.classList.add("userInfo");
        userInfo.innerText = el.info;
        searchUl.appendChild(li);
        li.appendChild(a);
        a.appendChild(searchImg);
        searchImg.appendChild(img);
        a.appendChild(searchInfo);
        searchInfo.appendChild(userId);
        searchInfo.appendChild(userInfo);
    });
}

const openSearch = () => {
    searchPop.style.display = "block";
}

const searchFilter = (e) => {
    const searchText = searchInput.value.toUpperCase(); 
    const li = searchUl.getElementsByTagName("li");
    Array.from(li).forEach((el) => {
        const userName = el.getElementsByTagName("div")[1].getElementsByTagName("div")[0];
        const txtValue = userName.innerText;
        txtValue.toUpperCase().indexOf(searchText) > -1 ? el.style.display = "block" : el.style.display = "none";
    });
}

const likeHeart = (e) => {
    e.preventDefault();
    const li = e.target.parentElement;
    e.target.classList.contains("active") ? e.target.classList.remove("active") : e.target.classList.add("active");
}

const deleteComment = (e) => {
    e.preventDefault();
    const li = e.target.parentElement;
    li.remove();
}

const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentText = commentInput.value;
    commentInput.value = "";
    const li = document.createElement("li");
    commentList.appendChild(li);
    const a = document.createElement("a");
    li.appendChild(a);
    a.innerText = "user_id";
    const p = document.createElement("p");
    li.appendChild(p);
    p.innerText = commentText;
    const buttonHeart = document.createElement("button");
    buttonHeart.classList.add("heartBtn");
    buttonHeart.innerText = "좋아요하트";
    li.appendChild(buttonHeart);
    buttonHeart.addEventListener("click", likeHeart);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn");
    deleteButton.innerText = "삭제버튼";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", deleteComment);
}

mypageBox.addEventListener("click", openMypage);
document.addEventListener("click", closePop);
searchForm.addEventListener("keyup", searchFilter);
window.addEventListener("load", searchDataPaint, {once:true})
searchInput.addEventListener("click", openSearch);
commentForm.addEventListener("submit", handleCommentSubmit);

