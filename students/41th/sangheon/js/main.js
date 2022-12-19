function init() {
  addComment();
  searchId();
}

const userIdList = [
  {
    id: 1,
    userid: 'wecode_bootcamp',
    username: '>wecode | 위코드',
    avatar: './img/img-profile.png',
  },
  {
    id: 2,
    userid: 'wecode_founder',
    username: '송은우 (Eun Woo Song)',
    avatar: './img/img-profile.png',
  },
  {
    id: 3,
    userid: 'wecode_korea',
    username: '',
    avatar: './img/img-profile.png',
  },
  {
    id: 4,
    userid: 'Wecode',
    username: '강남구 테헤란로 427, 서울',
    avatar: './img/img-profile.png',
  },
];

// 코멘트 추가 기능
function addComment() {
  const listCmt = document.getElementById('listCmt');
  const inpCmt = document.getElementById('inpCmt');
  const btnSubmitCmt = document.getElementById('btnSubmitCmt');

  function createComment() {
    const liEl = document.createElement('li');
    liEl.innerHTML = `
      <span class="wrap-cmt">
        <span class="cmt-user">canon_mj</span>
        <span class="cmt-cont">${inpCmt.value}</span>
      </span>
      <span class="wrap-btn">
        <button id="btnRemoveCmt" class="btn-remove">
          <i class="fa fa-thin fa-xmark"></i>
        </button>
        <button class="btn-like">
          <i class="fa fa-regular fa-heart"></i>
        </button>
      </span>
    `;
    listCmt.appendChild(liEl);
    inpCmt.value = '';
    btnSubmitCmt.disabled = true;
  }

  btnSubmitCmt.addEventListener('click', createComment);
  inpCmt.addEventListener('keyup', (e) => {
    e.target.value.length > 0
      ? (btnSubmitCmt.disabled = false)
      : (btnSubmitCmt.disabled = true);

    if (e.target.value.length > 0 && e.keyCode === 13) {
      createComment();
    }
  });
}

// 유저 아이디 검색 기능
function searchId() {
  const searchInput = document.getElementById('searchInput');
  const searchedUserList = document.getElementById('searchedUserList');
  let searchedDataList = [];

  function searchIdFromData(e) {
    const searchValue = e.target.value;

    if (searchValue !== '') {
      searchedDataList = userIdList.filter((user) =>
        user.userid.includes(searchValue)
      );

      searchedUserList.style.display = 'block';
      searchedUserList.innerHTML = searchedDataList
        .map((data) => {
          return `
            <li>
            <div class='box-user'>
              <span class='thumb-img'>
                <img src='./img/img-thumbnail.jpeg' alt='' />
              </span>
              <span class='box-cont'>
                <strong class='tit-user'>${data.userid}</strong>
                <span class='cont-info'>${data.username}</span>
              </span>
            </div>
            </li>`;
        })
        .join('');
    } else {
      // 검색어가 없을 시 리스트 초기화 및 숨김 처리
      searchedUserList.style.display = 'none';
      searchedDataList = [];
    }
  }

  searchInput.addEventListener('input', searchIdFromData);
}

init();
