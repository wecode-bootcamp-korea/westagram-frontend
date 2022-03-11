'use strict';

// 입력정보 obj

const clientStatus = {
  loginStatus: false,
  memUniqueNumb: null,
  id: null,
  nickName: null,
  pw: null,
  follow: null, // memberUniqueNumber로 기재
  isModalDisplay: false,
};

const membersAllInfo = {
  // unique numb = 해당 아이디 index
  id: [
    'wecode@naver.com',
    'hello@naver.com',
    'goodbye@naver.com',
    'wecode2@naver.com',
    'wecodelover@naver.com',
    'goodnight@naver.com',
    'kim@naver.com',
    'front@naver.com',
    'back@naver.com',
    'full@naver.com',
  ],
  nickName: ['wecodetest', 'hello', 'goodbye', 'wecode2', 'wecodelover', 'goodnight', 'kim', 'front', 'back', 'full'],
  pw: ['wecode', 111111, 222222, 333333, 444444, 555555, 666666, 777777, 888888, 999999],
  follow: [
    [2, 3, 4, 5],
    [1, 4],
    [1, 3, 5, 6],
    [8, 4, 7],
    [1, 2, 3, 5, 6, 7, 8],
    [2, 3, 4],
    [5, 1, 2],
    [4, 5, 1],
    [1, 2, 5, 6],
    [6, 7],
  ],
};

const articleStatus = {
  memUniqueNumb: 1,
  whoLikeThisArticle: [2, 3, 4, 5],
  replyWho: [4, 5, 6, 7],
  replyWhat: ['저는 wecodelover입니다', '저는 goodnight입니다', '저는 kim입니다.', '저는 front입니다.'],
};

/// 로그인 관련

// 사이드바 로그인 상태로 창이 떠있는 펑션
const showLoginedWindow = function () {
  if (clientStatus.loginStatus) {
    showModalSet();
    loginedWindow.style.display = 'flex';
    notLoginedWindow.style.display = 'none';
  }
};

// 사이드바 로그아웃 상태로 창이 떠있는 펑션
const showNotLoginedWindow = function () {
  if (!clientStatus.loginStatus) {
    hideModalSet();
    loginedWindow.style.display = 'none';
    notLoginedWindow.style.display = '';
  }
};

// 로그인하면 사이드바 상단 프로필 사진이랑 닉네임 설정해주는 펑션
const setProfileInfo = function (uniqMemNumb) {
  document.querySelector('.sidebarLoginedTop img').src = `image/profilePhoto/${uniqMemNumb}.jpg`;
  document.querySelector('.sidebarLoginedTop span').textContent = `${clientStatus.nickName}`;
};

// 로그인아웃 관련으로 현재 상태 바꿔주는 펑션 2개

const doLogIn = function (id) {
  clientStatus.loginStatus = true;
  clientStatus.id = id;
  const uniqueNumb = membersAllInfo.id.indexOf(clientStatus.id);
  clientStatus.memUniqueNumb = uniqueNumb;
  clientStatus.nickName = membersAllInfo.nickName[uniqueNumb];
  clientStatus.pw = membersAllInfo.pw[uniqueNumb];
  clientStatus.follow = membersAllInfo.follow[uniqueNumb];
  showLoginedWindow();
  setProfileInfo(clientStatus.memUniqueNumb);
};

const doLogOut = function () {
  clientStatus.loginStatus = false;
  clientStatus.memUniqueNumb = null;
  clientStatus.id = null;
  clientStatus.nickName = null;
  clientStatus.pw = null;
  clientStatus.friends = null;
  showNotLoginedWindow();
};

// 로그아웃 버튼 누르면 로그아웃 되는 펑션
document.querySelector('.sidebarLogOutBtn').addEventListener('click', function () {
  doLogOut();
  changeHeartImg();
});

/// 많이 쓰는 변수

const modalEntire = document.getElementsByClassName('modalWindows')[0];

const modalLogin = document.getElementsByClassName('modalForLoginBtn')[0];
const modalJoin = document.getElementsByClassName('modalForJoinMember')[0];
const modalTopMenu = document.getElementsByClassName('modalForTopMenuBtn')[0];
const modalUrl = document.getElementsByClassName('modalForCopyURLBtn')[0];

const loginedWindow = document.getElementsByClassName('sidebarLogined')[0];
const notLoginedWindow = document.getElementsByClassName('sidebarNotLogined')[0];

const modalTerms = document.getElementsByClassName('modalForTermsBtn')[0];
const modalCs = document.getElementsByClassName('modalForCsBtn')[0];

const modalHeart = document.getElementsByClassName('modalForHeartBtn')[0];
const modalProfile = document.getElementsByClassName('modalForProfileBtn')[0];

const modalFullReply = document.getElementsByClassName('modalForAllReplyBtn')[0];
//첨에 모달창 안보이게 설정

const hideModalSet = function () {
  clientStatus.isModalDisplay = false;
  // modalEntire.style.display = 'none';

  // 메인 우측상단
  modalTopMenu.style.display = 'none';
  // 메인 우측 중단
  modalUrl.style.display = 'none';
  // 헤더 우측
  modalHeart.style.display = 'none';
  modalProfile.style.display = 'none';
  // 사이드바 우측 상단
  modalLogin.style.display = 'none';
  modalJoin.style.display = 'none';
  // 사이드바 하단
  modalTerms.style.display = 'none';
  modalCs.style.display = 'none';
  // 풀댓글
  modalFullReply.style.display = 'none';
};

const showModalSet = function () {
  clientStatus.isModalDisplay = true;
};

hideModalSet();

// esc랑 꺼지게 하는 펑션
window.addEventListener('keyup', function (e) {
  if (modalEntire.display !== 'hide' && e.key === 'Escape') {
    hideModalSet();
  }
});

// 모달 외곽창 누르면 꺼지게 하는 펑션 (미완)

// 메인 아티클 작성자 프로필 사진 설정해주는 기능
const articleWriterPhoto = function () {
  document.querySelector('.articleProfilePhoto').src = `image/profilePhoto/${articleStatus.memUniqueNumb}.jpg`;
};
articleWriterPhoto();
// 메인 아티클 작성자 프로필 닉네임 설정해주는 기능
const articleWriterNick = function () {
  document.querySelector('.articleProfileName').textContent = membersAllInfo.nickName[articleStatus.memUniqueNumb];
};
articleWriterNick();
////// 아티클 중앙 버튼 기능

const replyFirstPhoto = function () {
  document.querySelector('.whoFirstLikePhoto').src = `image/profilePhoto/${articleStatus.whoLikeThisArticle[0]}.jpg`;
};
replyFirstPhoto();
// n명이 좋아합니다 표시기능
const showHowManyLike = function () {
  const firstLikeMem = articleStatus.whoLikeThisArticle[0];

  document.querySelector('.infoLikeWho').textContent = `${membersAllInfo.nickName[firstLikeMem]}님 외의 ${articleStatus.whoLikeThisArticle.length - 1}명이 좋아합니다`;
};
showHowManyLike();

/// 하트 좋아요 관련 기능
// articleStatus.whoLikeThisArticle에 로그인된 사람 index 있나없나

// 좋아요 상태에 따라서 하트 이미지 변경해주기

const changeHeartImg = function () {
  // 로그아웃 상태일때 무조건 빈하트 출력해야됨
  if (!clientStatus.loginStatus) {
    document.querySelector('.articleLikeBtn img').src = `image/blackEmptyHeart.png`;
  }

  // 로그인 상태일때
  if (clientStatus.loginStatus) {
    const isAlreadyLike = articleStatus.whoLikeThisArticle.indexOf(clientStatus.memUniqueNumb);
    // 이미 좋아요 상태 일때
    if (isAlreadyLike !== -1) {
      document.querySelector('.articleLikeBtn img').src = `image/fullRedHeart.png`;
    } else {
      // 아직 좋아요 안눌렀을때
      document.querySelector('.articleLikeBtn img').src = `image/blackEmptyHeart.png`;
    }
  }
};
changeHeartImg();
showHowManyLike();

// 좋아요 목록에서 현재 사용자 넣고 빼고 하는거
document.querySelector('.articleLikeBtn').addEventListener('click', function () {
  // 로그아웃 상태면 아예 안되게
  if (!clientStatus.loginStatus) {
    return;
  }

  // 좋아요 안한 상태면 -1출력, 한 상태이면 좋아요 목록에서의 index가 나온다.
  const isAlreadyLike = articleStatus.whoLikeThisArticle.indexOf(clientStatus.memUniqueNumb);
  if (isAlreadyLike === -1) {
    articleStatus.whoLikeThisArticle.push(clientStatus.memUniqueNumb);
    changeHeartImg();
    showHowManyLike();
    replyFirstPhoto();
  } else {
    articleStatus.whoLikeThisArticle.splice(isAlreadyLike, 1);
    changeHeartImg();
    showHowManyLike();
    replyFirstPhoto();
  }
});

// 댓글 버튼 누르면  댓글 달기 창으로 옮겨지는거
const moveCursToReply = function () {
  document.querySelector('.articleReplyBtn').addEventListener('click', function () {
    document.querySelector('.articleInsertReplyContent').focus();
  });
};
moveCursToReply();

// 다운로드 버튼 누르면 url창 뜨는 버튼
const openUrlPage = function () {
  document.querySelector('.articleSaveBtn').addEventListener('click', function () {
    document.querySelector('.urlTextBox').value = document.location.href;
    if (clientStatus.isModalDisplay === false) {
      showModalSet();
      modalUrl.style.display = 'flex';
    } else if (clientStatus.isModalDisplay === true) {
      hideModalSet();
    }
  });
};

openUrlPage();

// 아티클 중간 북마크 버튼 누르면 그냥 화면만 바뀌는 기능(가라)
const changeBMImg = function () {
  document.querySelector('.articleBookmarkBtn').addEventListener('click', function () {
    const temp = document.querySelector('.articleBookmarkBtn img').src;
    if (temp.includes('Empty')) {
      document.querySelector('.articleBookmarkBtn img').src = `image/bookmarkFull.png`;
    } else {
      document.querySelector('.articleBookmarkBtn img').src = `image/bookmarkEmpty.png`;
    }
  });
};

changeBMImg();
// url 모달창에서 url 복사하기 버튼 누르면 복사되는 기능(에러)

const copyUrl = function () {
  document.querySelector('.urlCopyBtn').addEventListener('click', function () {
    const url = document.querySelector('.urlTextBox');
    navigator.clipboard.writeText(url.value);
  });
};

copyUrl();

////// 누르면 창 뜨는 펑션 모음

// 사이드바 로그인 버튼 누르면 로그인 모달창 뜨는 펑션

const showLoginInputWindow = function () {
  document.querySelector('.sidebarLoginBtn').addEventListener('click', function () {
    if (clientStatus.isModalDisplay === false) {
      showModalSet();
      modalLogin.style.display = 'flex';
    } else if (clientStatus.isModalDisplay === true) {
      hideModalSet();
    }
  });
};

showLoginInputWindow();

// 사이드바 회원가입 버튼 누르면 회원가입 모달창 뜨는 펑션
const showJoinInputWindow = function () {
  document.querySelector('.sidebarJoinBtn').addEventListener('click', function () {
    if (clientStatus.isModalDisplay === false) {
      showModalSet();
      modalJoin.style.display = 'flex';
    } else if (clientStatus.isModalDisplay === true) {
      hideModalSet();
    }
  });
};
showJoinInputWindow();

// 사이드바 스토리 모두보기 버튼 누르면 모두보기 모달창이 뜨는 펑션 (모달창 못만들어서 미완)

// 사이드바 팔로우 모두보기 버튼 누르면 모두보기 모달창이 뜨는 펑션 (모달창 못만들어서 미완)

// 사이드바 하단 고객문의 버튼 누르면 모달창이 뜨는 펑션
const showCsWindow = function () {
  document.querySelector('.footerCsBtn').addEventListener('click', function () {
    if (clientStatus.isModalDisplay === false) {
      showModalSet();
      modalCs.style.display = 'flex';
    } else if (clientStatus.isModalDisplay === true) {
      hideModalSet();
    }
  });
};

showCsWindow();

// 사이드바 하단 약관버튼 누르면 모달창이 뜨는 펑션
const showTermsWindow = function () {
  document.querySelector('.footerTermsBtn').addEventListener('click', function () {
    if (clientStatus.isModalDisplay === false) {
      showModalSet();
      modalTerms.style.display = 'flex';
    } else if (clientStatus.isModalDisplay === true) {
      hideModalSet();
    }
  });
};
showTermsWindow();

// 헤더우측 컴파스 버튼 누르면 하단에 모달창 뜨는 펑션 (박스를 안만들어서 미완, 만들어서 아래처럼 넣기만 하면 됨)

// 헤더우측 하트 버튼 누르면 하단에 모달창 뜨는 펑션

document.querySelector('.headerHeartBtn').addEventListener('click', function () {
  const modalStatus = clientStatus.isModalDisplay;
  let temp = modalHeart.style.display;

  if (modalStatus === false) {
    showModalSet();
    temp = 'flex';
  } else if (modalStatus === true && temp === 'flex') {
    hideModalSet();
  } else if (modalStatus === true && temp === 'none') {
    hideModalSet();
    showModalSet();
    modalHeart.style.display = 'flex';
  }
});

// 헤더우측 프로필 버튼 누르면 하단에 모달창 뜨는 펑션
document.querySelector('.headerProfileBtn').addEventListener('click', function () {
  const modalStatus = clientStatus.isModalDisplay;
  let temp = modalProfile.style.display;

  if (modalStatus === false) {
    showModalSet();
    temp = 'flex';
  } else if (modalStatus === true && temp === 'flex') {
    hideModalSet();
  } else if (modalStatus === true && temp === 'none') {
    hideModalSet();
    showModalSet();
    modalProfile.style.display = 'flex';
  }
});

// 본문 상단우측 메뉴버튼 누르면 모달창 뜨는 펑션
document.querySelector('.articleProfileOptBtn').addEventListener('click', function () {
  const modalStatus = clientStatus.isModalDisplay;
  let temp = modalTopMenu.style.display;

  if (modalStatus === false) {
    showModalSet();
    temp = 'flex';
  } else if (modalStatus === true && temp === 'flex') {
    hideModalSet();
  } else if (modalStatus === true && temp === 'none') {
    hideModalSet();
    showModalSet();
    modalTopMenu.style.display = 'flex';
  }
});

// 고객문의 제출 누르면 제출되었습니다 뜨면서 닫히는 펑션
document.querySelector('.csSubmitBtn').addEventListener('click', function () {
  alert('문의가 제출되었습니다');
  hideModalSet();
});

////// 로그인 입력창 관련

/// 메일주소 and 비번 5글자 이상 필터링하는 기능
let isRightLoginInputId = false;
let isRightLoginInputPw = false;

let canSubmitLogin = false;
// 아이디 입력 유효검사
document.querySelector('.idInputField').addEventListener('keyup', function () {
  const isContainAt = document.querySelector('.idInputField').value.includes('@');
  if (!isContainAt) {
    document.querySelector('.showInputStatus').textContent = '아이디에 @를 포함해주세요';
    isRightLoginInputId = false;
    availLoginBtn();
  } else if (isContainAt) {
    document.querySelector('.showInputStatus').textContent = '';
    isRightLoginInputId = true;
    availLoginBtn();
  }
});

// 비밀번호 입력 유효검사
document.querySelector('.pwInputField').addEventListener('keyup', function () {
  const isLengthRight = document.querySelector('.pwInputField').value.length;
  if (isLengthRight < 5) {
    document.querySelector('.showInputStatus').textContent = '비밀번호 5글자 이상 입력해주세요';
    isRightLoginInputPw = false;
    availLoginBtn();
  } else if (isLengthRight >= 5) {
    document.querySelector('.showInputStatus').textContent = '';
    isRightLoginInputPw = true;
    availLoginBtn();
  }
});

// 제출버튼 활성화
const availLoginBtn = function () {
  if (isRightLoginInputId && isRightLoginInputPw) {
    document.querySelector('.loginSubmitBtn').style.opacity = 1;
    canSubmitLogin = true;
  } else {
    document.querySelector('.loginSubmitBtn').style.opacity = 0.3;
    canSubmitLogin = false;
  }
};

// 로그인 기능 활성화 되었을떄 로그인 해주는 기능
const tryLogin = function () {
  if (canSubmitLogin) {
    const inputId = document.querySelector('.idInputField').value;
    const inputMemNumb = membersAllInfo.id.indexOf(inputId);
    const inputPw = document.querySelector('.pwInputField').value;

    // 비밀번호 일치할때
    if (String(membersAllInfo.pw[inputMemNumb]) === String(inputPw)) {
      doLogIn(inputId);
      hideModalSet();
      // 로그인 성공했으니까 입력창에 넣은 정보들 비워줌
      document.querySelector('.idInputField').value = null;
      document.querySelector('.pwInputField').value = null;
      // 로그인 성공했으니까 하트 모양 바꿔줌
      changeHeartImg();
    } else {
      document.querySelector('.showInputStatus').textContent = '비밀번호가 틀렸습니다';
    }
  }
};

// 로그인창 id 양식맞게 입력했을때 버튼 클릭하면 로그인 시도
const clickSubmitLoginBtn = function () {
  document.querySelector('.loginSubmitBtn').addEventListener('click', function () {
    if (canSubmitLogin === true) {
      tryLogin();
    }
  });
};
clickSubmitLoginBtn();

// 로그인창 활성화 되어 있을때 엔터 누르면 로그인 시도
const enterSubmitLoginBtn = function () {
  window.addEventListener('keyup', function (e) {
    if (canSubmitLogin && e.key === 'Enter') {
      tryLogin();
    }
  });
};
enterSubmitLoginBtn();

// 약관버튼 닫기 누르면 닫히는 펑션
const clickCloseTermBtn = function () {
  document.querySelector('.closeTermsModalBtn').addEventListener('click', function () {
    hideModalSet();
  });
};
clickCloseTermBtn();

// 본문 내용에 최신 2개 댓글 달리는걸로 보이게 하는 펑션
const showRecentlyReply = function () {
  // 위 아래칸 쓴 멤버들 고유넘버
  const topWordMemberUniqueNumb = articleStatus.replyWho[articleStatus.replyWho.length - 2];
  const bottomWordMemberUniqueNumb = articleStatus.replyWho[articleStatus.replyWho.length - 1];

  document.querySelector('.miniboxPhoto1').src = `image/profilePhoto/${topWordMemberUniqueNumb}.jpg`;
  document.querySelector('.miniboxNick1').textContent = membersAllInfo.nickName[topWordMemberUniqueNumb];
  document.querySelector('.miniboxComment1').textContent = articleStatus.replyWhat[articleStatus.replyWho.length - 2];

  if (articleStatus.replyWho.length >= 2) {
    document.querySelector('.miniboxPhoto2').src = `image/profilePhoto/${bottomWordMemberUniqueNumb}.jpg`;
    document.querySelector('.miniboxNick2').textContent = membersAllInfo.nickName[bottomWordMemberUniqueNumb];
    document.querySelector('.miniboxComment2').textContent = articleStatus.replyWhat[articleStatus.replyWho.length - 1];
  }
};
showRecentlyReply();

// 내가 댓글 쓴 거를 아티클에 댓글목록으로 올려버리는 기능
const insertReplyMine = function () {
  const insertWhat = document.querySelector('.articleInsertReplyContent').value;

  // 로그인 된 상태일때
  if (clientStatus.loginStatus && insertWhat) {
    articleStatus.replyWhat.push(insertWhat);
    articleStatus.replyWho.push(clientStatus.memUniqueNumb);
    showRecentlyReply();
  }
};

// 게시버튼 누르면 댓글 올리는 기능
const writeReplyBtn = function () {
  document.querySelector('.articleInsertReplyBtn').addEventListener('click', function () {
    if (clientStatus.loginStatus) {
      insertReplyMine();
      document.querySelector('.articleInsertReplyContent').value = null;
    }
  });
};
writeReplyBtn();

// 엔터버튼 누르면 댓글 올리는 기능
const writeReplyByEnter = function () {
  // 댓글내용이 뭔가 채워져있을때
  window.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      insertReplyMine();
      document.querySelector('.articleInsertReplyContent').value = null;
    }
  });
};
writeReplyByEnter();

// 댓글 지우는 버튼 기능

// 위에 버튼 delete
const activeTopBtn = function () {
  document.querySelector('.deleteBtn1').addEventListener('click', function () {
    let tempWhatArr = [];
    let tempWhoArr = [];

    if (clientStatus.loginStatus && clientStatus.memUniqueNumb === articleStatus.replyWho[articleStatus.replyWhat.length - 2]) {
      for (let i = 0; i < articleStatus.replyWhat.length - 2; i++) {
        tempWhatArr[i] = articleStatus.replyWhat[i];
        tempWhoArr[i] = articleStatus.replyWho[i];
      }
      tempWhatArr.push(articleStatus.replyWhat[articleStatus.replyWhat.length - 1]);
      tempWhoArr.push(articleStatus.replyWho[articleStatus.replyWho.length - 1]);

      articleStatus.replyWhat = tempWhatArr;
      articleStatus.replyWho = tempWhoArr;
    }

    showRecentlyReply();
  });
};
activeTopBtn();

// 아래 버튼 pop
const activeBotBtn = function () {
  document.querySelector('.deleteBtn2').addEventListener('click', function () {
    if (clientStatus.loginStatus && clientStatus.memUniqueNumb === articleStatus.replyWho[articleStatus.replyWho.length - 1]) {
      articleStatus.replyWhat.pop();
      articleStatus.replyWho.pop();
      showRecentlyReply();
    }
  });
};

activeBotBtn();

// 더보기 버튼 누르면 풀 댓글 모달창 나오는 기능
const showFullReplyModal = function () {
  document.querySelector('.showFullReplyModalBtn').addEventListener('click', function () {
    document.querySelector('.modalForAllReplyBtn').style.display = 'flex';
    removeFullReplyContent();
    createFullReplyContent();
    deleteBtnActiveInFullWindow();
  });
};

showFullReplyModal();

//풀댓글 모달창에 댓글 채우기 (진행중)
const createFullReplyContent = function () {
  const modal = document.querySelector('.modalForAllReplyBtn');

  const makeDiv = document.createElement('div');
  const makeSpan = document.createElement('span');
  const makeImg = document.createElement('img');

  for (let i = 0; i < articleStatus.replyWho.length; i++) {
    document.querySelector('.modalForAllReplyBtn').insertAdjacentHTML(
      'beforeend',
      `
    <div class='replyContent'>
      <img class='replyProfilePhoto' src="image/profilePhoto/${articleStatus.replyWho[i]}.jpg" alt="error">
      <span class="replyProfileNickName">${membersAllInfo.nickName[articleStatus.replyWho[i]]}</span>
      <span class="replyText">${articleStatus.replyWhat[i]}</span>
      <button class="replyRemoveBtn" id="btn${i}">삭제</button>      
    </div>
    `
    );
  }
};

// 모달창 댓글 싹 지우기 리셋할라고
const removeFullReplyContent = function () {
  document.querySelector('.modalForAllReplyBtn').innerHTML = '';
};

// 풀댓글창 삭제버튼 활성화

const deleteBtnActiveInFullWindow = function () {
  const selectDelBtn = document.querySelectorAll('.replyRemoveBtn');
  selectDelBtn.forEach(function (input) {
    input.addEventListener('click', function () {
      // 클릭한 버튼 id값 가져온다.
      const temp = input.id;
      // id값에서 넘버 추출
      // 이 값의 숫자가 articleStatus에서 리플 쓴거 index임.
      const btnNumb = Number(temp.slice(-1));
      const replyMemberUniqueNumb = articleStatus.replyWho[btnNumb];

      // 현재 로그인한 사람과 댓글의 작성자 일치할때만 작동해야한다.
      // 넘버를 바탕으로 articlestatus 에서 글 쓴 내용 글 적은내용 지운다.
      // 새로운 arr를 articlestatus에 있는 내용으로 대체한다.

      if (replyMemberUniqueNumb === clientStatus.memUniqueNumb) {
        let tempWhatArr = [];
        let tempWhoArr = [];

        for (let i = 0; i < btnNumb; i++) {
          tempWhatArr.push(articleStatus.replyWhat[i]);
          tempWhoArr.push(articleStatus.replyWho[i]);
        }

        for (let i = btnNumb + 1; i < articleStatus.replyWho.length; i++) {
          tempWhatArr.push(articleStatus.replyWhat[i]);
          tempWhoArr.push(articleStatus.replyWho[i]);
        }

        articleStatus.replyWhat = tempWhatArr;
        articleStatus.replyWho = tempWhoArr;
      }

      // 바뀐 내용으로 리프래쉬 하기 위해서
      // removefullreplycontent 해주고 create해준다.

      removeFullReplyContent();
      createFullReplyContent();
      deleteBtnActiveInFullWindow();
      showRecentlyReply();
    });
  });
};

// 검색어랑 일치하는것들 배열로 만들기

const makeCloseArray = function () {
  // 검색내용 대문자로 변환
  const input = document.querySelector('.headerSearchBar').value;

  if (input) {
    const whatSearched = input.toUpperCase();

    // 멤버이름 다 대문자로 변환
    const memeberNickName = membersAllInfo.nickName.map(function (x) {
      return x.toUpperCase();
    });

    const resultMemberNick = [];
    const resultMemberNumb = [];

    for (let i = 0; i < memeberNickName.length; i++) {
      if (memeberNickName[i].indexOf(whatSearched) > -1) {
        resultMemberNick.push(memeberNickName[i]);
        resultMemberNumb.push(i);
      }
    }
    return [resultMemberNick, resultMemberNumb];
  }
};

// 배열 일치하는것들 검색어창 요소로 넣기
const showSearchingDisplay = function () {
  const searchResultArr = makeCloseArray(); // [wecode,wecode2]

  if (searchResultArr) {
    const searchingNick = searchResultArr[0];
    const uniqueNumb = searchResultArr[1];

    for (let i = 0; i < 3; i++) {
      if (searchingNick[i]) {
        document.querySelector('.modalForSearching').insertAdjacentHTML(
          'afterbegin',
          `
          <div class='searchingContent'>
            <img class='searchingProfilePhoto' src="image/profilePhoto/${uniqueNumb[i]}.jpg" alt="profile image" />
            <span class="searchingProfileNickName">${searchingNick[i]}</span>
          </div>
          `
        );
      }
    }
  }
};

// 요소 싹 다 제거
const clearSearchingDisplay = function () {
  document.querySelector('.modalForSearching').innerHTML = '';
};

// 검색창에 입력할때마다 화면 리프래쉬 해주는 기능
const refreshSearchingWindow = function () {
  document.querySelector('.headerSearchBar').addEventListener('keyup', function () {
    clearSearchingDisplay();
    showSearchingDisplay();
    toggleSearchingModal();
  });
};
refreshSearchingWindow();

// 내용 없을때 서칭 모달창 닫기
const toggleSearchingModal = function () {
  // 내용 없을때 모달창 닫기
  if (!document.querySelector('.headerSearchBar').value) {
    document.querySelector('.modalForSearching').style.display = 'none';
  } else {
    document.querySelector('.modalForSearching').style.display = 'flex';
  }
};

toggleSearchingModal();

// 약관 내용 넣기

document.querySelector('.termsTextBox').value = `
제 1 장 총 칙

제 1 조 (목적)

이 약관은 {COMPANY_NAME}(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.

제 2 조 (약관의 효력 및 변경)
① 이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.
② 사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.

제 3 조 (용어의 정의)
이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
① 회원 : 사이트와 서비스 이용계약을 체결하거나 이용자 아이디(ID)를 부여받은 개인 또는 단체를 말합니다.
② 신청자 : 회원가입을 신청하는 개인 또는 단체를 말합니다.
③ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 정하고 사이트가 승인하는 문자와 숫자의 조합을 말합니다.
④ 비밀번호 : 회원이 부여 받은 아이디(ID)와 일치된 회원임을 확인하고, 회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 말합니다.
⑤ 해지 : 사이트 또는 회원이 서비스 이용계약을 취소하는 것을 말합니다.

제 2 장 서비스 이용계약

제 4 조 (이용계약의 성립)
① 이용약관 하단의 동의 버튼을 누르면 이 약관에 동의하는 것으로 간주됩니다.
② 이용계약은 서비스 이용희망자의 이용약관 동의 후 이용 신청에 대하여 사이트가 승낙함으로써 성립합니다.

제 5 조 (이용신청)
① 신청자가 본 서비스를 이용하기 위해서는 사이트 소정의 가입신청 양식에서 요구하는 이용자 정보를 기록하여 제출해야 합니다.
② 가입신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인 것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스의 제한을 받을 수 있습니다.

제 6 조 (이용신청의 승낙)
① 사이트는 신청자에 대하여 제2항, 제3항의 경우를 예외로 하여 서비스 이용신청을 승낙합니다.
② 사이트는 다음에 해당하는 경우에 그 신청에 대한 승낙 제한사유가 해소될 때까지 승낙을 유보할 수 있습니다.
가. 서비스 관련 설비에 여유가 없는 경우
나. 기술상 지장이 있는 경우
다. 기타 사이트가 필요하다고 인정되는 경우
③ 사이트는 신청자가 다음에 해당하는 경우에는 승낙을 거부할 수 있습니다.
가. 다른 개인(사이트)의 명의를 사용하여 신청한 경우
나. 이용자 정보를 허위로 기재하여 신청한 경우
다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
라. 기타 사이트 소정의 이용신청요건을 충족하지 못하는 경우

제 7 조 (이용자정보의 변경)
회원은 이용 신청시에 기재했던 회원정보가 변경되었을 경우에는, 온라인으로 수정하여야 하며 변경하지 않음으로 인하여 발생되는 모든 문제의 책임은 회원에게 있습니다.

제 3 장 계약 당사자의 의무

제 8 조 (사이트의 의무)
① 사이트는 회원에게 각 호의 서비스를 제공합니다.
가. 신규서비스와 도메인 정보에 대한 뉴스레터 발송
나. 추가 도메인 등록시 개인정보 자동 입력
다. 도메인 등록, 관리를 위한 각종 부가서비스
② 사이트는 서비스 제공과 관련하여 취득한 회원의 개인정보를 회원의 동의없이 타인에게 누설, 공개 또는 배포할 수 없으며, 서비스관련 업무 이외의 상업적 목적으로 사용할 수 없습니다. 단, 다음 각 호의 1에 해당하는 경우는 예외입니다.
가. 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우
나. 범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우
다. 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
③ 사이트는 이 약관에서 정한 바에 따라 지속적, 안정적으로 서비스를 제공할 의무가 있습니다.

제 9 조 (회원의 의무)
① 회원은 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다.
가. 다른 회원의 ID를 부정하게 사용하는 행위
나. 서비스에서 얻은 정보를 사이트의 사전승낙 없이 회원의 이용 이외의 목적으로 복제하거나 이를 변경, 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위
다. 사이트의 저작권, 타인의 저작권 등 기타 권리를 침해하는 행위
라. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위
마. 범죄와 결부된다고 객관적으로 판단되는 행위
바. 기타 관계법령에 위배되는 행위
② 회원은 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 주의 사항을 준수하여야 합니다.
③ 회원은 내용별로 사이트가 서비스 공지사항에 게시하거나 별도로 공지한 이용 제한 사항을 준수하여야 합니다.

제 4 장 서비스 제공 및 이용

제 10 조 (회원 아이디(ID)와 비밀번호 관리에 대한 회원의 의무)
① 아이디(ID)와 비밀번호에 대한 모든 관리는 회원에게 책임이 있습니다. 회원에게 부여된 아이디(ID)와 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 전적인 책임은 회원에게 있습니다.
② 자신의 아이디(ID)가 부정하게 사용된 경우 또는 기타 보안 위반에 대하여, 회원은 반드시 사이트에 그 사실을 통보해야 합니다.

제 11 조 (서비스 제한 및 정지)
① 사이트는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신 사업자가 전기통신서비스를 중지하는 등 기타 불가항력적 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.
② 사이트는 제1항의 규정에 의하여 서비스의 이용을 제한하거나 정지할 때에는 그 사유 및 제한기간 등을 지체없이 회원에게 알려야 합니다.
제5장 계약사항의 변경, 해지

제 12 조 (정보의 변경)
회원이 주소, 비밀번호 등 고객정보를 변경하고자 하는 경우에는 홈페이지의 회원정보 변경 서비스를 이용하여 변경할 수 있습니다.

제 13 조 (계약사항의 해지)
회원은 서비스 이용계약을 해지할 수 있으며, 해지할 경우에는 본인이 직접 서비스를 통하거나 전화 또는 온라인 등으로 사이트에 해지신청을 하여야 합니다. 사이트는 해지신청이 접수된 당일부터 해당 회원의 서비스 이용을 제한합니다. 사이트는 회원이 다음 각 항의 1에 해당하여 이용계약을 해지하고자 할 경우에는 해지조치 7일전까지 그 뜻을 이용고객에게 통지하여 소명할 기회를 주어야 합니다.
① 이용고객이 이용제한 규정을 위반하거나 그 이용제한 기간 내에 제한 사유를 해소하지 않는 경우
② 정보통신윤리위원회가 이용해지를 요구한 경우
③ 이용고객이 정당한 사유 없이 의견진술에 응하지 아니한 경우
④ 타인 명의로 신청을 하였거나 신청서 내용의 허위 기재 또는 허위서류를 첨부하여 이용계약을 체결한 경우
사이트는 상기 규정에 의하여 해지된 이용고객에 대해서는 별도로 정한 기간동안 가입을 제한할 수 있습니다.

제6장 손해배상

제 14 조 (면책조항)
① 사이트는 회원이 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
② 사이트는 회원의 귀책사유나 제3자의 고의로 인하여 서비스에 장애가 발생하거나 회원의 데이터가 훼손된 경우에 책임이 면제됩니다.
③ 사이트는 회원이 게시 또는 전송한 자료의 내용에 대해서는 책임이 면제됩니다.
④ 상표권이 있는 도메인의 경우, 이로 인해 발생할 수도 있는 손해나 배상에 대한 책임은 구매한 회원 당사자에게 있으며, 사이트는 이에 대한 일체의 책임을 지지 않습니다.

제 15 조 (관할법원)
서비스와 관련하여 사이트와 회원간에 분쟁이 발생할 경우 사이트의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.
[부칙]

(시행일) 이 약관은 2015년 01월부터 시행합니다.
`;
