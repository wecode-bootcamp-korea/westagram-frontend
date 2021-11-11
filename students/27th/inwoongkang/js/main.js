const postBox = document.querySelector(".postBox");
const commentBox = document.querySelector(".commentBox");
const inputvalue = document.querySelector(".input-Box");
const postButton = document.querySelector(".post");
const inputBox = document.querySelector(".inputBox");
const searchBox = document.querySelector(".searchBox");
const recommendBox = document.createElement("div");
let temp = 0;
let divBox = [];
let number = 0;
let userList = [];

class SearchList {
  constructor(id, image, description) {
    this.id = id;
    this.image = image;
    this.description = description;
  }
}

let firstFriend = new SearchList(
  "wecode",
  "image/image1.png",
  "djjoiw님의 친구"
);
let secondfriend = new SearchList(
  "wecoda",
  "image/image1.png",
  "djjoiw님의 친구"
);
let thirdfriend = new SearchList(
  "wecpda",
  "image/image1.png",
  "djjoiw님의 친구"
);
let forthFriend = new SearchList(
  "weqpda",
  "image/image1.png",
  "djjoiw님의 친구"
);
let fifthfriend = new SearchList(
  "wzqpda",
  "image/image1.png",
  "djjoiw님의 친구"
);
userList.push(firstFriend, secondfriend, thirdfriend, forthFriend, fifthfriend);

function heart(event) {
  if (event.target.classList[2] === "heart") {
    event.target.setAttribute("class", "fas fa-heart fullHeart");
  } else if (event.target.classList[2] === "fullHeart") {
    event.target.setAttribute("class", "far fa-heart  heart");
  }
}

function doDelete(event) {
  let buttonWrapper = event.target.parentNode;
  buttonWrapper.remove();
}

function doRecommend(event) {
  for (let i = 0; i < temp; i++) {
    recommendBox.removeChild(recommendBox.firstChild);
  }

  if (event.target.value.length === 0) {
    recommendBox.remove();
  } else {
    recommendBox.setAttribute("class", "recommendBox"); // 검색추천창 생성
    searchBox.appendChild(recommendBox);
    userList.forEach((el) => {
      if (
        el["id"].substr(0, event.target.value.length) === event.target.value
      ) {
        const recommendWrapper = document.createElement("div");
        const firstRecommend = document.createElement("div");
        const imageBox = document.createElement("img");
        const userID = document.createElement("div");
        const userDescription = document.createElement("div");
        const secondFlexBox = document.createElement("div");
        recommendWrapper.setAttribute("class", "recommendWrapper");
        imageBox.setAttribute("src", el["image"]);
        imageBox.setAttribute("class", "recommendImage");
        recommendBox.appendChild(recommendWrapper);
        recommendWrapper.appendChild(firstRecommend);
        recommendWrapper.appendChild(secondFlexBox);
        secondFlexBox.appendChild(userID).textContent = el["id"];
        secondFlexBox.appendChild(userDescription).textContent =
          el["description"];
        firstRecommend.appendChild(imageBox);
      }
    });
  }
  temp = recommendBox.childElementCount;
}
function init() {
  inputBox.addEventListener("keyup", doRecommend);

  inputvalue.addEventListener("keyup", () => {
    if (inputvalue.value.length > 0) {
      postButton.disabled = false;
      postButton.style.cursor = "pointer";
      postButton.style.color = "royalblue";
    } else if (inputvalue.value.length === 0) {
      postButton.disabled = true;
      postButton.style.cursor = "default";
      postButton.style.color = "rgba(66, 66, 243, 0.548)";
    }
  });
  postBox.addEventListener("click", () => {
    let profileName = document.createElement("span");
    let comment = document.createElement("span");
    let heartIcon = document.createElement("span");
    let deleteButton = document.createElement("button");
    divBox[number] = document.createElement("div");
    divBox[number].className = "comment";
    divBox[number].id = number;
    commentBox.appendChild(divBox[number]);
    profileName.classList.add("likeComment", "bold", "commentAdd");
    comment.classList.add("likeComment", "dot");
    deleteButton.classList.add("deleteBut");
    divBox[number].appendChild(profileName).textContent = "cannon_mj";
    divBox[number].appendChild(comment).textContent = inputvalue.value;
    divBox[number]
      .appendChild(heartIcon)
      .setAttribute("class", "far fa-heart heart");
    divBox[number].appendChild(deleteButton).textContent = "댓글 삭제";
    heartIcon.addEventListener("click", heart);
    deleteButton.addEventListener("click", doDelete);
    inputvalue.value = "";
    number++;
  });

  inputvalue.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && inputvalue.value.length > 0) {
      let profileName = document.createElement("span");
      let comment = document.createElement("span");
      let heartIcon = document.createElement("span");
      let deleteButton = document.createElement("button");
      divBox[number] = document.createElement("div");
      divBox[number].className = "comment";
      divBox[number].id = number;
      commentBox.appendChild(divBox[number]);
      profileName.classList.add("likeComment", "bold", "commentAdd");
      comment.classList.add("likeComment", "dot");
      deleteButton.classList.add("deleteBut");
      divBox[number].appendChild(profileName).textContent = "cannon_mj";
      divBox[number].appendChild(comment).textContent = inputvalue.value;
      divBox[number]
        .appendChild(heartIcon)
        .setAttribute("class", "far fa-heart heart");
      divBox[number].appendChild(deleteButton).textContent = "댓글 삭제";
      heartIcon.addEventListener("click", heart);
      deleteButton.addEventListener("click", doDelete);
      inputvalue.value = "";
      number++;
    }
  });
}

init();
