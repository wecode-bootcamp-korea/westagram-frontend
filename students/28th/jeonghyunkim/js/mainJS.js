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
            sideWrapper.style.display='none'
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
    searchIcon.style.display='none'
    searchInput.style.paddingLeft='12px'
})

document.getElementById('mainSearchInput').addEventListener('focusout',function(event){
    const searchInput = document.getElementById('mainSearchInput');
    const searchIcon = document.getElementById('searchIcon');
    searchIcon.style.display='inline'
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
        
        feedCommentsBox[index].appendChild(commentSpan);
        inputCommentsTextArea[index].value='';
    }    
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