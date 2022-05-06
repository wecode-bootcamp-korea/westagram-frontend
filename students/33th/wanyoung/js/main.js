const comment = document.querySelector("#comment-button");
const user_comment = document.querySelector("#comment-content");
const comment_value = document.querySelector("#comment-input");
const comment_box = document.querySelector("#comment_box");
const myHeart = document.querySelector("#feed_heart");
const body = document.querySelector("body");
const USER_ID = "wan_0_kim";
function add_comment(e) {
    e.preventDefault();
    const comment_div = document.createElement("div");
    const liTag = document.createElement("li");
    const heart_img = document.createElement("img");
    const delete_btn = document.createElement("button");
    delete_btn.innerText = "삭제";
    heart_img.src = "./image/heart.png";
    heart_img.style.color = "black";
    heart_img.style.width = "1.4rem";
    heart_img.style.height = "1.4rem";
    comment_div.classList.add("flex");
    comment_div.classList.add("space_between");
    liTag.innerText = `${USER_ID} ${comment_value.value}`;
    user_comment.appendChild(comment_div);
    comment_div.appendChild(liTag);
    comment_div.appendChild(heart_img);
    comment_div.appendChild(delete_btn);
    comment_value.value = "";
    heart_img.addEventListener("click", () => {
        if (heart_img.style.color === "black") {
            heart_img.src = "./image/heart_red.png";
            heart_img.style.color = "red";
        } else {
            heart_img.src = "./image/heart.png";
            heart_img.style.color = "black";
        }
    });
    delete_btn.addEventListener("click", () => comment_div.remove());
}
comment.addEventListener("click", add_comment);
const user_profile_btn = document.querySelector("#user_profile");
const user_navbar = document.querySelector(".hidden_nav_bar");
function isclick() {
    if (user_navbar.style.visibility === "hidden") {
        user_navbar.style.visibility = "visible";
    } else {
        user_navbar.style.visibility = "hidden";
    }
}
user_profile_btn.addEventListener("click", isclick);
body.addEventListener("click", (e) => {
    if (e.target.id !== "user_profile") {
        user_navbar.style.visibility = "hidden";
    }
});
const count = document.getElementById("count");
function heartClick() {
    if (myHeart.style.color === "black") {
        myHeart.src = "./image/heart_red.png";
        count.innerText = parseInt(count.innerText) + 1;
        myHeart.style.color = "red";
    } else {
        myHeart.src = "./image/heart.png";
        count.innerText -= 1;
        myHeart.style.color = "black";
    }
}
myHeart.addEventListener("click", heartClick);
const userArr = [
    // "malfoy_2", "wattson_12", "sherlock_98", "0_0_min", "wecode_"
    {
        id: 0,
        name: "malfoy_2",
        descName: "말포이",
        img: "../image/person_pic.jpg",
    },
    {
        id: 1,
        name: "wattson_12",
        descName: "왓슨",
        img: "../image/person_pic5.jpg",
    },
    {
        id: 2,
        name: "sherlock_98",
        descName: "셜록",
        img: "../image/person_pic2.jpg",
    },
    {
        id: 3,
        name: "0_0_min",
        descName: "으잉",
        img: "../image/person_pic3.jpg",
    },
    {
        id: 4,
        name: "wecode_",
        descName: "위코드",
        img: "../image/person_pic4.jpg",
    },
    {
        id: 5,
        name: "we_",
        descName: "우리_",
        img: "../image/person_pic6.jpg",
    },
    {
        id: 6,
        name: "peter_ee",
        descName: "김피터",
        img: "../image/person_pic7.jpg",
    },
    {
        id: 7,
        name: "hello_world",
        descName: "헬로월드",
        img: "../image/person_pic8.jpg",
    },
    {
        id: 8,
        name: "lorem_ipsum",
        descName: "로렘입섬",
        img: "../image/pserson_pic1.jpg",
    },
];
const search_user = document.querySelector(".search_user_result");
const nav_input = document.querySelector(".nav_bar_input");
let newArr = [];
nav_input.addEventListener("input", (e) => {
    while (search_user.childElementCount >= 1) {
        search_user.removeChild(search_user.lastChild);
    }
    userArr.filter((x) => {
        if (e.target.value === "") {
            search_user.classList.add("hidden");
            while (search_user.hasChildNodes()) {
                search_user.removeChild(search_user.firstChild);
            }
            return;
        }
        if (
            x["name"].includes(e.target.value) &&
            x["name"][0] === e.target.value[0]
        ) {
            search_user.classList.remove("hidden");
            const search_user__flexbox = document.createElement("div");
            search_user__flexbox.innerHTML = `
             <div class="padding border_bottom flex flex_start search_result">
                 <img class = "img_circle_32px" src="${x["img"]}"/>
                 <div class="margin_left">
                     <p>${x["name"]}</p>
                     <span>${x["descName"]}</span>
                 </div>
             </div>
             `;

            search_user.appendChild(search_user__flexbox);
        }
    });
});
