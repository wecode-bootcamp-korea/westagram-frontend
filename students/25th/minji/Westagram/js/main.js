// ===아이디 검색 기능===
const searchbox = document.querySelector(".search");
const search_list = document.querySelector("ul");
const search_result_box = document.querySelector(".search_result_box");
const btn_init = document.querySelector(".btn_init");
const user_list = [
  {
    id: "up_enery_bar",
    description: "난 에너지바",
    image: "./img/energy.jpg",
  },
  {
    id: "deli_cious.pizza",
    description: "맛있는 야채 피자",
    image: "./img/pizza.jpg",
  },
  {
    id: "im.tendong_",
    description: "JMT 텐동",
    image: "./img/tendong.jpg",
  },
  {
    id: "im.yellow_peaaach",
    description: "노랑 복숭아 탄산",
    image: "./img/juice.jpg",
  },
  {
    id: "gunchim_loopy",
    description: "군침이 싹도노",
    image: "./img/cake.jpg",
  },
  {
    id: "__bingsuya",
    description: "틈헤이러 빙수",
    image: "./img/bingsu.jpg",
  },
  {
    id: "cheers_beers_",
    description: "치어스비어스 홍대 1호점",
    image: "./img/beer.jpg",
  },
];

// ul이 그 전의 결과값이 담긴 childNode를 가지고 있으면 삭제하는 함수
const deletePreviousResult = (listBox) => {
  while (listBox.hasChildNodes()) {
    listBox.removeChild(listBox.firstChild);
  }
};

// filter된 data로 새로운 list element 생성하는 함수
const createFilteredElement = (filteredArray) => {
  filteredArray.forEach((element) => {
    const newFilteredList = `
      <img class="profile_s" src="${element.image}"/>
      <div>
          <h5 class="user_id">${element.id}</h5>
          <h5 class="user_description">${element.description}</h5>
      </div>
    `;

    const newList = document.createElement("li");
    newList.innerHTML = newFilteredList;
    search_list.appendChild(newList);
  });
};

// searchBox에 값이 있을 때, refreshBtn을 보여주는 함수
const showRefreshBtn = (inputElement) => {
  inputElement.value
    ? ((btn_init.style.display = "block"),
      (search_result_box.style.display = "block"))
    : ((btn_init.style.display = "none"),
      (search_result_box.style.display = "none"));
};

// searchBox에 내용을 입력했을 때 실행
searchbox.addEventListener("keyup", () => {
  const result = user_list.filter((user) => user.id.includes(searchbox.value));

  deletePreviousResult(search_list);
  createFilteredElement(result, search_list);
  showRefreshBtn(searchbox);
});

// refreshBtn 클릭시 input value와 list를 초기화하는 함수
const refreshInput = () => {
  searchbox.value = "";
  deletePreviousResult(search_list);
};

btn_init.addEventListener("click", refreshInput);

// ===Nav Profile 클릭 시 메뉴 박스 생성 기능===
const btn_profile = document.querySelector(".btn_profile");
const menu_box = document.querySelector(".menu_box");
let isHidden = true;

btn_profile.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden === false) {
    menu_box.style.display = "block";
  } else {
    menu_box.style.display = "none";
  }
});

// ===댓글 추가 기능===
const btn_upload = document.querySelector(".btn_upload");
const textarea = document.querySelector("textarea");
const article_comments = document.querySelector(".article_comments");
const my_id = document.querySelector(".my_id").innerText;

// value 입력되었을 때, 댓글 Element를 추가하는 함수
const uploadComment = () => {
  if (textarea.value) {
    const new_comments = `
        <p><span class="user_id">${my_id}</span>${textarea.value}</p>
        <div class="comments_menu">
            <i class="comment_like far fa-heart" onclick="toggleLike(this)"></i>
            <i class="comment_delete far fa-trash-alt" onclick="deleteComment(this)"></i>
        </div>
    `;

    const new_comments_row = document.createElement("div");
    new_comments_row.classList.add("comments_row");
    new_comments_row.innerHTML = new_comments;
    article_comments.appendChild(new_comments_row);

    textarea.value = "";
  }
};

// Enter 눌렀을 때 댓글 추가
textarea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    uploadComment();
  }

  if (textarea.value) {
    btn_upload.style.opacity = 1;
  } else {
    btn_upload.style.opacity = 0.4;
  }
});

// 버튼 눌렀을 때 댓글 추가
btn_upload.addEventListener("click", uploadComment);

// ===댓글 삭제 기능===
const deleteComment = (el) => {
  el.parentNode.parentNode.remove();
};

// ===좋아요 Toggle 기능===
const comment_like = document.querySelector(".comment_like");
let isLiked = false;

const toggleLike = (el) => {
  isLiked = !isLiked;
  if (isLiked === true) {
    el.classList.remove("far");
    el.classList.add("fas");
    el.style.color = "#ED4956";
  } else {
    el.classList.remove("fas");
    el.classList.add("far");
    el.style.color = "rgba(0, 0, 0, 0.1)";
  }
};
