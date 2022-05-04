document.addEventListener('DOMContentLoaded', () => {
    const replyInput = document.querySelector('.reply-input');
    const replyBtn = document.querySelector('.replies > button');
    const reply = document.querySelector('.content-text');
    let replyKeyNumber = 0;

    function addReply(){
        const divReply = document.createElement('div');
        const spanId = document.createElement('span');
        const spanReply = document.createElement('span');
        const btnLike = document.createElement('button');
        const btnRemove = document.createElement('button');
        
        divReply.appendChild(spanId);
        divReply.appendChild(spanReply);
        divReply.appendChild(btnLike);
        divReply.appendChild(btnRemove);
        
        let key = replyKeyNumber;
        replyKeyNumber += 1;
        
        divReply.setAttribute('data-key', key);
        spanId.textContent = 'hj_kim';
        spanReply.textContent = replyInput.value;
        btnLike.innerHTML = '<i class="fa-solid fa-heart"></i>';
        btnRemove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        reply.appendChild(divReply);
        
        btnLike.addEventListener('click', () => {
            if(btnLike.style.color !== 'red'){
                btnLike.style.color = 'red';
            } else {
                btnLike.style.color = 'rgb(92, 92, 92)';
            }
        })
        
        btnRemove.addEventListener('click', () => {
            // reply.removeChild(divReply);
            removeReply(key);
        })
        
        replyInput.value = '';
        replyBtn.disabled = true;
    }
    
    function removeReply(key){
        const targetDiv = document.querySelector(`[data-key = '${key}']`);
        reply.removeChild(targetDiv);
    }
    
    replyInput.addEventListener('keyup', (event) => {
        replyBtn.disabled = (replyInput.value.length !== 0) ? false : true;
        if(event.key === 'Enter' && replyInput.value.length !== 0){
            addReply();
        }
    })
    
    replyBtn.addEventListener('click', () => {
        if(replyInput.value.length !== 0){
            addReply();
        }
    })

    const searchBar = document.querySelector('.searchBar');
    
    // 아이디 검색 구현부
    const userList = ['hj_kim', 'hk_kim', 'jj_kim', 'yj_shin', 'sy_jang'];

    let isFindId = false; // 검색한 아이디를 여러번 띄우지 않도록 - 별도 정리 할 것
    searchBar.addEventListener('keyup', (event) => {
        const searchPopup = [...document.querySelectorAll('.searchPopup')];
        const divOuter = document.createElement('div');
        
        userList.forEach((ele) => {
            if(!isFindId && ele === searchBar.value){
                const divImgContainer = document.createElement('div');
                const divUserId = document.createElement('div');
                const profileImg = document.createElement('img');
                
                divImgContainer.className = 'profileImg-container';
                divUserId.className = 'user-id';
                divUserId.textContent = ele;
                profileImg.setAttribute('src', 'images/profile02.jpeg');
                
                divImgContainer.appendChild(profileImg);
                divOuter.appendChild(divImgContainer);
                divOuter.appendChild(divUserId);
                
                searchPopup[0].appendChild(divOuter);
                searchPopup[0].style.display = 'block';
                searchPopup[1].style.display = 'block';
                isFindId = true;
            }
        })
        // 리셋 구문 - 따로 정리 할 것
        if(isFindId && !userList.includes(searchBar.value)){
            searchPopup[0].removeChild(searchPopup[0].firstChild);
            searchPopup[0].style.display = 'none';
            searchPopup[1].style.display = 'none';
            isFindId = false;
        }
    })

    // 메뉴버튼 구현부
    const profileMenuBtn = document.querySelector('.profileMenuBtn');
    const profilePopups = document.querySelectorAll('.profilePopup');
    let isOpenMenu = false;

    document.body.addEventListener('click', (event) => {
        if(isOpenMenu){
            profilePopups[0].style.display = 'none';
            profilePopups[1].style.display = 'none';
            isOpenMenu = false;
        }
    })
    
    // 아래 함수가 위 함수보다 0.1초 늦게 동작하도록 하는 꼼수를 씀....
    // 이벤트 버블링 방지로 구현해보자
    profileMenuBtn.addEventListener('click', (event) => {
        if(!isOpenMenu){
            profilePopups[0].style.display = 'block';
            profilePopups[1].style.display = 'block';
            setTimeout(() => {
                isOpenMenu = true;
            }, 100)
        } else {
            profilePopups[0].style.display = 'none';
            profilePopups[1].style.display = 'none';
            isOpenMenu = false;
        }
    })
})