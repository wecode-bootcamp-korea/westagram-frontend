//// js #1. 윈도우 이벤트

window.addEventListener('resize',function(event){
    const sideWrapper = document.querySelector('#sideWrapper')
    const bodyContainer = document.querySelector('#bodyContainer');
    if (window.innerWidth<=627){
        document.getElementById('navRowBarSearch').style.display='none'
    }else{
        document.getElementById('navRowBarSearch').style.display='inline-block'
        if (window.innerWidth<=1001 && window.innerWidth>690){
            sideWrapper.style.display='none'
            bodyContainer.style.marginLeft='7vw'
        }else if(window.innerWidth<=690){
            bodyContainer.style.marginLeft='0vw'
        }else{
            bodyContainer.style.marginLeft='0px'
            sideWrapper.style.display='block'   
        }
    }
})
// 리사이징 이벤트
////




//// js #2. navigation bar 이벤트

document.getElementById('mainSearchInput').addEventListener('focusin',function(event){
    const searchInput = document.getElementById('mainSearchInput');
    const searchIcon = document.getElementById('searchIcon');
    const searchResultBox = document.getElementById('searchResultBox');
    searchIcon.style.display='none'
    searchResultBox.style.display='block'
    searchInput.style.paddingLeft='12px'
})

document.getElementById('mainSearchInput').addEventListener('focusout',function(event){
    const searchInput = document.getElementById('mainSearchInput');
    const searchIcon = document.getElementById('searchIcon');
    const searchResultBox = document.getElementById('searchResultBox');
    searchIcon.style.display='inline'
    searchResultBox.style.display='none'
    searchInput.style.paddingLeft='30px'
})
// 검색바 focus in/out 애니메이트

const memberArray = [
    {id:'wecode', desc:'>wecode | 위코드'},
    {id:'westudy', desc:'>wecode | 위코드 스터디'},
    {id:'KJH', desc:'leit_motif'},
    {id:'abcdefg', desc:'alphabet'},
    {id:'lovepet', desc:'love_pet'}
]

document.getElementById('mainSearchInput').addEventListener('input',function(event){
    const searchResult = document.getElementById('searchResult')
    if (event.target.value.length>1){
        const result = memberArray.filter(member=>member['id'].toLowerCase().includes(event.target.value.toLowerCase()))
        if(!checkChildren(result)){
            for (let i=0; i<result.length; i++){
                const resultSpan = document.createElement('span');
                resultSpan.innerHTML = result[i].id+`  ${result[i].desc}`;
                searchResult.appendChild(resultSpan);
            }
        }
        if (searchResult.children.length>0){
            for (let i=0; i<searchResult.children.length; i++){
                if (!searchResult.children[i].innerHTML.toLowerCase().includes(event.target.value.toLowerCase())){
                    searchResult.removeChild(searchResult.children[i]);
                }
            }
        }
    }    
})

document.getElementById('mainSearchInput').addEventListener('keyup',function(event){
    const searchResult = document.getElementById('searchResult');
    if (event.key==='Backspace'){
        if (searchResult.children.length>0){
            for (let i=0; i<searchResult.children.length; i++){
                if (!searchResult.children[i].innerHTML.toLowerCase().includes(event.target.value.toLowerCase())){
                    searchResult.removeChild(searchResult.children[i]);
                }
            }
        }
        if (event.target.value.length===0){
            if (searchResult.hasChildNodes){
                for (let i=0; i<searchResult.children.length; i++){
                    searchResult.removeChild(searchResult.children[i]);
                }
            }
        }
    }
})

const checkChildren = (result) =>{
    if (searchResult.children.length>0){
        for (let i=0; i<searchResult.children.length; i++){
            for (let j=0; j<result.length; j++){
                if (searchResult.children[i].innerHTML.toLowerCase().includes(result[j].id.toLowerCase())){
                    return true;
                }
            }
        }
        return false;
    }else{
        return false;
    }
}
// 검색 결과 이벤트. input, backspace 이벤트 및 영역 include 유효 검사 함수 

const navGoMain = () =>{
    window.location.href='main.html'
}

const navDirectMessage = () =>{
    const floatingArea = document.querySelector('#navBtnsFloatingArea')
    if (floatingArea.children.length===0){
        const newDmSpan = document.createElement('span');
        newDmSpan.innerHTML = 'new direct message area';
        floatingArea.appendChild(newDmSpan);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform='translateX(2.3em) rotate(45deg)'
}

const navNewPost = () =>{
    const floatingArea = document.querySelector('#navBtnsFloatingArea')
    if (floatingArea.children.length===0){
        const newPostSpan = document.createElement('span');
        newPostSpan.innerHTML = 'new post area';
        floatingArea.appendChild(newPostSpan);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform='translateX(4.2em) rotate(45deg)'
}

const navTripFeeds = () =>{
    const floatingArea = document.querySelector('#navBtnsFloatingArea')
    if (floatingArea.children.length===0){
        const tripSpan = document.createElement('span');
        tripSpan.innerHTML = 'trip feeds area';
        floatingArea.appendChild(tripSpan);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform='translateX(6em) rotate(45deg)'
}

const navViewLikes = () =>{
    const floatingArea = document.querySelector('#navBtnsFloatingArea')
    if (floatingArea.children.length===0){
        const likeSpan = document.createElement('span');
        likeSpan.innerHTML = 'like area';
        floatingArea.appendChild(likeSpan);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform='translateX(7.96em) rotate(45deg)'
}

const navViewProfile = () =>{
    const floatingArea = document.querySelector('#navBtnsFloatingArea')
    if (floatingArea.children.length===0){
        const profileSpan = document.createElement('span');
        profileSpan.innerHTML = 'profile area'
        floatingArea.appendChild(profileSpan);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform='translateX(9.9em) rotate(45deg)'
}

const removeNavActive = () =>{
    document.querySelector('#navBtnsFloatingBox').classList.remove('active');
    document.querySelector('#hideContainer').classList.remove('active');
    const floatingArea = document.querySelector('#navBtnsFloatingArea')
    if (floatingArea.hasChildNodes){
        for (let i=0; i<floatingArea.children.length; i++){
            floatingArea.removeChild(floatingArea.children[i])
        }
    } 
}
// navbar button onclick 함수
////




//// js #3. 피드 이벤트

const feedContentsCommentBody = document.querySelectorAll('#feedContentsCommentBody')
let temp = [];

for (let i=0; i<feedContentsCommentBody.length; i++){
    temp.push(feedContentsCommentBody[i].innerHTML);
    const reduceCommentString = feedContentsCommentBody[i].innerHTML.slice(0,10).trim() + '...';
    feedContentsCommentBody[i].innerHTML = reduceCommentString;
}

const feedExtendContents = (event) =>{
    const extendBtn = document.querySelectorAll('#feedExtendContents');
    extendBtn[event.target.name].style.display = 'none';
    feedContentsCommentBody[event.target.name].innerHTML=temp[event.target.name];
}

// 각 피드 컨텐츠 reduce & extend

const setInputCommentsSubmitBtnEvent = () =>{
    const inputCommentsSubmitBtn = document.querySelectorAll('#inputCommentsSubmitBtn');    
    const inputCommentsTextArea = document.querySelectorAll('#inputCommentsTextArea')
    for (let i=0; i<inputCommentsSubmitBtn.length; i++){
        const submitBtnChangeFunc = (event) =>{
            if (event.target.value.replace(/(^\s*)|(\s*$)/gi, "")){
                inputCommentsSubmitBtn[i].style.opacity=1;
                inputCommentsSubmitBtn[i].style.cursor='pointer';
            }else{
                inputCommentsSubmitBtn[i].style.opacity=0.3;
                inputCommentsSubmitBtn[i].style.cursor='inherit'
            }
        }
        inputCommentsTextArea[i].addEventListener('input',function(event){
            submitBtnChangeFunc(event);
            
        })
        inputCommentsTextArea[i].addEventListener('keydown',function(event){
            if (event.key==='Enter' && event.target.value.length>0){
                addFeedComment(event);
            }   
            submitBtnChangeFunc(event);
        })
    }
}

setInputCommentsSubmitBtnEvent();

const addFeedComment = (event) =>{
    const index = event.target.name;
    const feedCommentsBox = document.querySelectorAll('#feedCommentsBox');
    const inputCommentsTextArea = document.querySelectorAll('#inputCommentsTextarea');
    let inputComments = inputCommentsTextArea[index].value.replace(/\n/g, "");

    if (inputComments.length>0){   
        const commentSpan = document.createElement('span');

        const clientName = document.createElement('span');
        clientName.id = 'feedCommentsBold';
        clientName.innerHTML = 'test2'
        commentSpan.appendChild(clientName);
        
        const inputCommentsTextNode = document.createTextNode(inputComments);
        commentSpan.appendChild(inputCommentsTextNode);
        

        const heartIcon = document.createElement('i');
        heartIcon.className='far fa-heart'
        heartIcon.onclick = function(event){
            likeClick(event);
        }
        commentSpan.appendChild(heartIcon);

        const removeBtn = document.createElement('span');
        removeBtn.innerHTML='삭제';
        removeBtn.id='removeBtn';
        removeBtn.onclick = function(event){
            removeComment(event);
        }
        
        commentSpan.append(removeBtn);

        feedCommentsBox[index].appendChild(commentSpan);
        inputCommentsTextArea[index].focus();
        inputCommentsTextArea[index].value=null;
    }

    if (event.target.tagName==='BUTTON'){
        event.target.style.opacity=0.3;
        event.target.style.cursor='inherit'
    }
}
// 댓글 작성시 발생하는 이벤트 ( 댓글 달기, 댓글 textarea 유효 검사)

const likeClick = (event) =>{
    event.target.style.color='red';
}

const removeComment = (event) =>{
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}
// 좋아요, 삭제 버튼 이벤트
////




//// js #4. 사이드바 이벤트

const followOrNotReduce = () =>{
    const followOrNot = document.getElementsByClassName('followOrNot');
    for (let i=0; i<followOrNot.length; i++){
        if (followOrNot[i].innerHTML.length>24){
            followOrNot[i].innerHTML = followOrNot[i].innerHTML.slice(0,25).trim()+'...';
        }
    }
}

followOrNotReduce();
// 사이드바 follow 문장 축소
////

document.getElementById('friendsFeed').addEventListener('scroll',function(event){
    const ulWidth = document.getElementById('friendsFeedUl').scrollWidth
    const scrollEndPos = ulWidth-event.target.clientWidth;
    const scrollLeft = Math.round(event.target.scrollLeft);
    
    if (scrollLeft===0){
        document.getElementById('friendsFeedPrev').style.visibility='hidden'
        document.getElementById('friendsFeedNext').style.visibility='visible'
    }else if (scrollLeft===scrollEndPos){
        document.getElementById('friendsFeedPrev').style.visibility='visible'
        document.getElementById('friendsFeedNext').style.visibility='hidden'
    }else if (scrollLeft>0 && scrollLeft<scrollEndPos){
        document.getElementById('friendsFeedPrev').style.visibility='visible'
        document.getElementById('friendsFeedNext').style.visibility='visible'
    }
})

const friendsFeedScrollPrev = () =>{
    const friendsFeedWidth = document.getElementById('friendsFeed').clientWidth;
    const ulWidth = document.getElementById('friendsFeedUl').offsetWidth
    const scrollEndPos = ulWidth-friendsFeedWidth;
    document.getElementById('friendsFeed').scrollLeft-=scrollEndPos*0.6;
}

const friendsFeedScrollNext = () =>{
    const friendsFeedWidth = document.getElementById('friendsFeed').clientWidth;
    const ulWidth = document.getElementById('friendsFeedUl').offsetWidth
    const scrollEndPos = ulWidth-friendsFeedWidth;
    document.getElementById('friendsFeed').scrollLeft+=scrollEndPos*0.6;
}

if (document.getElementById('friendsFeedUl').scrollWidth === document.getElementById('friendsFeed').clientWidth){
    document.getElementById('friendsFeedNext').style.visibility='hidden';
}
