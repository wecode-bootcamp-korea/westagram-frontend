document.addEventListener('DOMContentLoaded', () => {
    const $replyText = document.querySelector('.reply');
    const $replyBtn = document.querySelector('.reply-section > button');
    const $reply = document.querySelector('.text-section');
    let replyKeyNumber = 0;

    function replyHandler(){
        const $replyContainer = document.createElement('div');
        const $spanId = document.createElement('span');
        const $spanReply = document.createElement('span');
        const $btnLike = document.createElement('button');
        const $btnRemove = document.createElement('button');
        
        let key = replyKeyNumber;
        replyKeyNumber += 1;
        
        $replyContainer.setAttribute('data-key', key);
        $spanId.textContent = 'hj_kim';
        $spanReply.textContent = $replyText.value;
        $btnLike.innerHTML = '<i class="fa-solid fa-heart"></i>';
        $btnRemove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        $replyContainer.appendChild($spanId);
        $replyContainer.appendChild($spanReply);
        $replyContainer.appendChild($btnLike);
        $replyContainer.appendChild($btnRemove);
        $reply.appendChild($replyContainer);

        $replyText.value = '';
        $replyBtn.disabled = true;
        
        $btnLike.addEventListener('click', () => {
            $btnLike.style.color = ($btnLike.style.color !== 'rgb(255, 0, 0)')? 
            'rgb(255, 0, 0)' : 'rgb(92, 92, 92)';
        })
        
        $btnRemove.addEventListener('click', () => {
            removeReply(key);
        })
    }
    
    function removeReply(key){
        const $targetDiv = document.querySelector(`[data-key = '${key}']`);
        $reply.removeChild($targetDiv);
    }
    
    $replyText.addEventListener('keyup', (event) => {
        $replyBtn.disabled = ($replyText.value.length !== 0) ? false : true;
        if(event.key === 'Enter' && $replyText.value.length !== 0){
            replyHandler();
        }
    })
    
    $replyBtn.addEventListener('click', () => {
        if($replyText.value.length !== 0){
            replyHandler();
        }
    })

    const $searchBar = document.querySelector('.searchBar');
    const userList = ['hj_kim', 'hk_kim', 'jj_kim', 'yj_shin', 'sy_jang'];

    $searchBar.addEventListener('keyup', (event) => {
        const $searchPopup = [...document.querySelectorAll('.searchPopup')];
        const $divOuter = document.createElement('div');

        if(userList.includes($searchBar.value)){
            const $divImgContainer = document.createElement('div');
            const $profileImg = document.createElement('img');
            const $divUserId = document.createElement('div');
            
            $divImgContainer.className = 'profileImg-container';
            $profileImg.setAttribute('src', 'images/profile02.jpeg');
            $divUserId.className = 'user-id';
            $divUserId.textContent = $searchBar.value;
            
            $divImgContainer.appendChild($profileImg);
            $divOuter.appendChild($divImgContainer);
            $divOuter.appendChild($divUserId);
            
            $searchPopup[0].appendChild($divOuter);
            $searchPopup[0].style.display = 'block';
            $searchPopup[1].style.display = 'block';
        } else {
            $searchPopup[0].removeChild($searchPopup[0].firstChild);
            $searchPopup[0].style.display = 'none';
            $searchPopup[1].style.display = 'none';
        }
    })

    const $profileMenuBtn = document.querySelector('.profileMenuBtn');
    const $profilePopups = document.querySelectorAll('.profilePopup');
    let isOpenMenu = false;

    document.body.addEventListener('click', (event) => {
        if(isOpenMenu){
            $profilePopups[0].style.display = 'none';
            $profilePopups[1].style.display = 'none';
            isOpenMenu = false;
        }
    })
    
    $profileMenuBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        if(!isOpenMenu){
            $profilePopups[0].style.display = 'block';
            $profilePopups[1].style.display = 'block';
            isOpenMenu = true;
        } else {
            $profilePopups[0].style.display = 'none';
            $profilePopups[1].style.display = 'none';
            isOpenMenu = false;
        }
    })
})