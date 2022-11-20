const profileBtnElement = document.getElementById("profileButton");

const navRightElement = document.getElementById('navRight')


profileBtnElement.addEventListener("click", function (e) {
    createProfileList();
  console.log("click");
});

let createProfileList = () => {
  let createBoxElement = document.createElement('div');
  createBoxElement.style.position = 'absolute';
  let popupLayout = `
    <div class="arrowTop">
    <ul class="profileBox">
        <li class="">프로필</li>
        <li><img src="/students/40th/woojin/main_structure_image/bookmark-white.png"/>저장됨</li>
        <li>설정</li>
        <li class="logoutBtn">로그아웃</li>
    </ul>
    </div>
`

  createBoxElement.innerHTML = popupLayout;
  navRightElement.appendChild(createBoxElement);


}

/*createBoxElement.addEventListener('click', e => {
    let parentTrTag=e.target;
    for(;parentTrTag.)
} */


    