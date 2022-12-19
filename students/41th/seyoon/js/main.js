// import feedData from "../data/feedData.json" assert { type: "json" };

// console.log("asdf");
// console.log(feedData);

// const { default: feedData } = await import("./data/feedData.json", {
//   assert: {
//     type: "json",
//   },
// });

// import { feedData } from "../data/data";
// console.log(feedData);
import { feedData } from "../data/data.js";
// console.log(feedData[0].name);

const profileImgSrc =
  "https://lh3.googleusercontent.com/VAdRMJl2EHvlTGlSflGv23ztOVFMu8NLQqi26fK3tKBfFeyXGq3KNjjfIOPhyDf0rem0JiFRkBX1Cro1kovduUnLZuq6gwzGCeA8J_75fqpG9OmN_3G5MEdzRvBzl1XlJG_7JlMrQM80_BA1h5EjSJ-R50a1Mp2n3FfXbo-sc7x_YAOvmn_jdBH8rA0VOxN7dud4GiHJFDapW_WMWXWGZ9xn2X8L2g_BoXuF649lpjiw-rC9O2WlVtIQu_cU_2EkMirnBDEIp9sQDvNnVxJi4yY_xnVVzE5xln2mfcgPmyrn2Q7KvvdTBBdlh9G8Np5MUToWpxNm0PghDWDUJx1ZU45M5Osk7WgFL6NUv9WIQulrI3W3cDlKhA5ogcJPwFGhLU8PF9ZoBAXZDRqQAjyDCzhwmThUKQ0V10gSmQyx4NsQQf115e31qlnxf4bFA1tNMbStnumZrNg0v8VQfAPnfPZEvrOjJTNVHTdwXiisrLaqNrGgouij_xPufVGY-sPv2ER6YTpjoTnDf77VIKzLmYmsHqJizY1SwDt45BGRawhRCPWVrnLrV7bSAJRBulZ37259Zc5_R7_ZbEGtJeBwsO6BBjFD2CFrLgXi02k_5mUKIMq_t3NYdhBhHtC2DJYDXFZpXDRhGwwThUHH07ZTiFpncs5Ut0h6w0OxajadJc37KHUqSNCdPpnOEGJWiFUFKJ92jvLC4wCitpxCCCKoTvHgE5SKKmTOo28A91E3c7hHTFzgtxJvZ17l2ZL6podgmjQ_eoHOrMttSpB_RftmGtDoap9amIEKS9xLNm0nmOkVeZA4bc2GVLMTOsHB1xw9FgpE2vMM3LT0-Kfx9z6lWcOxToLia59CT_wnxCqbwGsZ1a2-7DRf66nlM5K5wKtkHMtRTFkwn86nPMPNURGQq8C2Sk3T-YXUMn0TXaKVFVx_=s2036-no?authuser=0";

const storyImgSrc =
  "https://images.unsplash.com/photo-1671275422628-f2e8703fe831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

const storyImgSrc2 =
  "https://images.unsplash.com/photo-1671311576479-21411c2ddfb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

const profileImg = document.querySelector("#profile-img");
const newStoryImg = document.querySelector("#new-story-img");
profileImg.src = profileImgSrc;
newStoryImg.src = storyImgSrc;
// profileImg.setAttribute("src", profileImgSrc);
// console.log("test");

const storyList = document.querySelector(".story-list");

storyList.addEventListener("mouseover", () => {
  console.log(storyList.classList.remove("scroll-hide"));
});

storyList.addEventListener("mouseout", () => {
  storyList.classList.add("scroll-hide");
});

const recommended = document.querySelector(".recommended-list");

// recommended.addEventListener("mouseover", () => {
//   console.log(recommended.classList.remove("scroll-hide"));
// });

// recommended.addEventListener("mouseout", () => {
//   recommended.classList.add("scroll-hide");
// });

// const footerList = document.querySelector("ul li:not(:first-of-type)");
// footerList.style.backgroundColor = "red";

// ul li:not(:first-of-type) {
//   color: red;
// }

const feedContainer = document.querySelector(".feed-container");
// console.dir(feedContainer);

feedData.forEach((feed, idx) => {
  // console.log("test");
  // const feedWrap = document.createElement("div");
  // document.body.appendChild(feedWrap);
  console.log(feed.id);
  console.log(typeof feed.id);

  feedContainer.innerHTML += `
    <article id=${feed.id}>
      <div class="feed-header">
        <div class="left">
          <div class="new-recommended-img-box">
            <img
              class="new-story-img"
              src="${feed.profileSrc}"
            />
          </div>
          <div class="font-weight-600">${feed.nickname}</div>
        </div>
        <div class="right">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div class="feed-img">
        <img
          src="${feed.postSrc}"
          alt=""
        />
      </div>
      <div class="section-wrap font-size-14">
        <section class="feed-body">
          <div class="left">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-share-from-square"></i>
          </div>
          <div class="right">
            <i class="fa-regular fa-bookmark"></i>
          </div>
        </section>

        ${
          feed.likePeople.length >= 1
            ? `<div class="like-wrap">
            <div class="like-poeple-img-box">
              <img
                class="new-story-img"
                src="${feed.likePeople[feed.likePeople.length - 1].profileSrc}"
              />
            </div>
            <strong>${
              feed.likePeople[feed.likePeople.length - 1].nickname
            }</strong>
            <span>님&nbsp</span>
            <strong>${
              feed.likePeople.length >= 2
                ? " 외 " + feed.likePeople.length + "명"
                : ""
            }</strong>이 좋아합니다.
            </div>`
            : ""
        }

        ${feed.text ? `<div class="text">${feed.text}</div>` : ""}

        <div class="comments">
        </div>

        <form onsubmit="return false;" action="" class="new-comment">
          <i class="fa-regular fa-face-smile"></i>
          <input type="text" placeholder="댓글 달기..." />
          <button class="posting font-blue font-weight-600 postingDeactivity">게시</button>
        </form>
      </div>
    </article>
  `;

  const comments = document.getElementsByClassName("comments");
  // console.log(comments);

  if (feed.comments) {
    feed.comments.forEach((obj) => {
      comments[idx].innerHTML += `
        <div class='comment'>
          <strong>${obj.nickname}</strong>
          <span>${obj.comment}</span>
        </div>
      `;
    });
  }
});

const formInput = document.querySelectorAll("form input");
const formBtn = document.querySelectorAll("form button");
// console.log(formInput);
// console.log(formBtn);

formInput.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(`${typeof e.key} ${e.key}`);
    // console.log(e.path[2].children[3]);
    // console.log(e.path[1][1]);

    if (input.value) {
      // console.log("진입 성공");
      e.path[1][1].classList.add("postingActivity");
      // console.log("진입 성공2");
      // console.dir(e.path[1][1]);
      activateBtn(e.path[1][1]);
      // console.dir(e.path[1][1]);
    } else {
      e.path[1][1].classList.remove("postingActivity");
      deactivateBtn(e.path[1][1]);
    }

    // console.log(e.path[1][1].classList);

    if (e.key === "Enter" && input.value) {
      e.path[2].children[3].innerHTML += `
        <div class='comment'>
          <strong>seyoonleee</strong>
          <span>${input.value}</span>
        </div>
      `;
      input.value = "";
    }
    // console.log(e.path.includes("article"));
    // console.log(e.target.id);
  });
});

formBtn.forEach((button) => {
  // deactivateBtn(button);

  button.addEventListener("click", (e) => {
    // console.log((button.disabled = true));
    console.dir(e);
    // input
    // console.log(e.path[1][0].value);
    const comment = e.path[1][0].value;
    const parent = e.path[2].children[3];
    // console.log(parent);
    // console.log(comment);

    if (comment) {
      parent.innerHTML += `
      <div class='comment'>
        <strong>seyoonleee</strong>
        <span>${comment}</span>
      </div>
    `;
      e.path[1][0].value = "";
    }
  });
});

const activateBtn = (button) => {
  button.disabled = false;
  console.log(`버튼 비활성화 : ${button.disabled}`);
};

const deactivateBtn = (button) => {
  button.disabled = true;
  console.log(`버튼 비활성화 : ${button.disabled}`);
};

const commentArr = document.querySelectorAll(".comment");
console.log(commentArr);

commentArr.forEach((comment) => {
  comment.addEventListener("mouseover", (e) => {
    console.log(e);
  });
});

const targetRemove = (target) => {
  target.remove();
};
