// 1차 리팩토링후
window.onload = function() {
    let inputUpload = document.querySelector('.input_upload');
    let btnUpload = document.querySelector('.btn_upload');
    let contentFlag = false;
    let comments = document.querySelector('.comments');
    let profileBtn = document.querySelector('.profile');
    let profileMenu = document.querySelector('.profile_menu');
    let searchInput = document.querySelector('.search_bar');
    let filteredList = document.querySelector('.suggestions_list');
    let resultContainer = document.querySelector('.suggestions_container');
    let accountArray = [
        {
            id: "wecode_bootcamp",
            nickname: ">wecode | 위코드",
            image: "images/wecode.jpg"
        },
        {
            id: "wecode_fullstack_bootcamp",
            nickname: "Wecode Fullstack Bootcamp",
            image: "images/fullstack.jpg"
        }   
    ];

    const searchFunc = (objId) => {
        const searchId = searchInput.value;
        return objId.indexOf(searchId) !== -1;
    }

    const showFilteredAccount = (account) => {
        const containerCap = document.querySelector(".suggestions_cap");
        resultContainer.style.display = "block";
        containerCap.style.display = "block";
        const filteredOne = document.createElement("li"); // 새로만들 li
        filteredOne.innerHTML = `
        <img src=${account.image} alt=${account.id} />
        <div class="uservalue">
            <p class="userid">${account.id}</p>
            <p class="usernickname">${account.nickname}</p>
        </div>`; // 내용추가
        filteredList.appendChild(filteredOne);//붙이기
      };

    const openSearchWindow = () => {
    // 초기화
        filteredList.innerHTML = "";
        resultContainer.style.display = "none";

        if (searchInput.value) { // input 값이 있다면,
            const filteredAccount = accountArray.filter((x) => searchFunc(x.id)); // 인풋값을 id에 포함한 객체만 남은 배열
            if (filteredAccount) { // filteredAccout 배열이 있다면,
                filteredAccount.forEach((acc) => showFilteredAccount(acc)); // 해당객체들을 li에 추가
            }
        }
    }

    // focusout시, 검색 결과 사라지기
    const closeSearchWindow = () => {
        const containerCap = document.querySelector(".suggestions_cap");
        resultContainer.style.display = "none";
        containerCap.style.display = "none";
    }

    // 프로필버튼
    const activateProfile = (e) => profileMenu.classList.toggle('on');

    // 댓글좋아요기능 + 삭제기능
    const modifyCommentStatus = (e) => {
        if (e.target.classList.contains('hearts')) { // 좋아요기능
            e.target.classList.toggle("red");
            if (e.target.className.startsWith("far")) e.target.className = e.target.className.replace("far", "fas");
            else if (e.target.className.startsWith("fas")) e.target.className = e.target.className.replace("fas", "far");
        } else if (e.target.classList.contains('fa-times-circle')) e.target.parentNode.remove(); // 삭제기능
    }

    // 게시버튼 활성화 && 내용포함여부확인 기능
    const activateBtn = (e) => {
        if (e.target.value) {
            btnUpload.style.color = '#3e99ed';
            contentFlag = true;
        } else {
            btnUpload.style.color = '#c5e2fa';
            contentFlag = false;
        }
    }

    // 댓글달기
    const addComment = (el) => {
        el.innerHTML = `<strong>username </strong>${inputUpload.value}<small> 방금전</small><i class="fas fa-times-circle circles"></i><i class="far fa-heart hearts"></i>`;
        if (!contentFlag) return;

        comments.appendChild(el);
        inputUpload.value = "";
        btnUpload.style.color = '#c5e2fa';

        hearts = document.querySelectorAll('.hearts');
    }

    const handleComment = (event) => {
        const eventClassName = event.target.className;

        if(eventClassName === 'btn_upload') addComment(document.createElement('span'));
        if(eventClassName === 'input_upload' && event.keyCode === 13) addComment(document.createElement('span'));
    }

    searchInput.addEventListener("input", openSearchWindow);
    searchInput.addEventListener("focusout", closeSearchWindow);
    btnUpload.addEventListener("click", handleComment);
    inputUpload.addEventListener("keyup", handleComment);
    inputUpload.addEventListener("keydown", activateBtn);
    comments.addEventListener("click", modifyCommentStatus);
    profileBtn.addEventListener("click", activateProfile);
}