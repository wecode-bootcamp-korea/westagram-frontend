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

document.getElementById('mainSearchInput').addEventListener('focusin',function(event){
    const searchInput = document.getElementById('mainSearchInput');
    const searchIcon = document.getElementById('searchIcon');
    const searchResultBox = document.getElementById('searchResultBox');
    searchIcon.style.display='none'
    searchResultBox.style.display='block'
    searchResultBox.style.left='-1.1vw'
    searchInput.style.paddingLeft='12px'
})

document.getElementById('mainSearchInput').addEventListener('focusout',function(event){
    const searchInput = document.getElementById('mainSearchInput');
    const searchIcon = document.getElementById('searchIcon');
    const searchResultBox = document.getElementById('searchResultBox');
    searchIcon.style.display='inline'
    searchResultBox.style.display='none'
    searchResultBox.style.left='0vw'
    searchInput.style.paddingLeft='30px'
})

//

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

//



const setInputCommentsSubmitBtnEvent = () =>{
    const inputCommentsSubmitBtn = document.querySelectorAll('#inputCommentsSubmitBtn');    
    const inputCommentsTextArea = document.querySelectorAll('#inputCommentsTextArea')
    for (let i=0; i<inputCommentsSubmitBtn.length; i++){
        inputCommentsTextArea[i].addEventListener('input',function(event){
            console.log(event.target.value);
            if (event.target.value.replace(/(^\s*)|(\s*$)/gi, "")){
                inputCommentsSubmitBtn[i].style.opacity=1;
                inputCommentsSubmitBtn[i].style.cursor='pointer';
            }else{
                inputCommentsSubmitBtn[i].style.opacity=0.3;
                inputCommentsSubmitBtn[i].style.cursor='inherit'
            }
        })
    }
}

setInputCommentsSubmitBtnEvent();

document.getElementById('inputCommentsTextarea').addEventListener('keydown',function(event){
    if (event.key==='Enter' && event.target.value.length>0){
        addFeedComment(event);
    }
})

const addFeedComment = (event) =>{
    const index = event.target.name;
    const feedCommentsBox = document.querySelectorAll('#feedCommentsBox');
    const inputCommentsTextArea = document.querySelectorAll('#inputCommentsTextarea');
    const inputComments = inputCommentsTextArea[index].value;

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
        inputCommentsTextArea[index].value='';
    }    
}

const likeClick = (event) =>{
    event.target.style.color='red';
}

const removeComment = (event) =>{
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}

// 

const followOrNotReduce = () =>{
    const followOrNot = document.getElementsByClassName('followOrNot');
    for (let i=0; i<followOrNot.length; i++){
        if (followOrNot[i].innerHTML.length>24){
            followOrNot[i].innerHTML = followOrNot[i].innerHTML.slice(0,25).trim()+'...';
        }
    }
}

followOrNotReduce();

//

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
                resultSpan.innerHTML = result[i].id;
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