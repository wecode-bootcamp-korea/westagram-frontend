const commnetArea = document.getElementsByClassName('posting-area')[0];
const postingBtn = document.getElementsByClassName('posting-button')[0];

// comment button active event
commnetArea.addEventListener('input', function(){
    if(commnetArea.value.length > 0){
        postingBtn.style.opacity = '1';
        postingBtn.style.cursor = 'pointer';
    }else{
        postingBtn.style.opacity = '0.3';
        postingBtn.style.cursor = 'default';
    }
});

// comment upload event : click
postingBtn.addEventListener('click', function(){
    if(postingBtn.style.opacity === "1") commentEvent();
})

// comment upload event : enter -> error : 공백시에도 들어감
commnetArea.addEventListener('keyup', function(event){
    if(event.keyCode == 13 && postingBtn.style.opacity === "1") commentEvent();
})

// comment upload function
const commentEvent = function(){
    const addLocation = document.getElementsByClassName('comment-list')[0];
    const addCommentWrap = document.createElement('li');
    const addUser = document.createElement('a');
    const addDescription = document.createElement('span');
    const addIconWrap = document.createElement('a');
    const addIcon = document.createElement('i');

    addCommentWrap.setAttribute('class', 'comment-list-add');
    addUser.setAttribute('class', 'comment-user');
    addDescription.setAttribute('class', 'user-comment');
    addIconWrap.setAttribute('class', 'icon-mini-heart');
    addIcon.setAttribute('class', 'far fa-heart');

    addCommentWrap.appendChild(addUser);
    addCommentWrap.appendChild(addDescription);
    addCommentWrap.appendChild(addIconWrap);
    addIconWrap.appendChild(addIcon);
    addLocation.appendChild(addCommentWrap);

    addUser.innerHTML = 'raccoons';
    addDescription.innerHTML = commnetArea.value;
    commnetArea.value = null;

    postingBtn.style.opacity = '0.5';
    postingBtn.style.cursor = 'default';

    // comment-counting
    const commnetCounting = function(){
        const counting = document.getElementsByClassName('comment-list')[0].children.length;
        const conutTxt = document.getElementsByClassName('comment-counting')[0];
        conutTxt.innerHTML = counting;
    };

    commnetCounting();
}

// description more button
const moreBtn = document.getElementsByClassName('desc-more-btn')[0];

moreBtn.addEventListener('click', function(){
    const descTxt = document.getElementsByClassName('desc-txt')[0];
    moreBtn.style.display = "none";
    descTxt.style.width = "auto";
    descTxt.style.WebkitBoxOrient = "unset"
})

// why...?? 1. 버튼변수에담기 2.버튼클릭시 이벤트발생 3.style로 값 못가져와서 getComputedStyle 사용 4. 상단값은 되고 여기는 왜..?
const userBtn = document.getElementsByClassName('icon-human')[0];

userBtn.addEventListener('click', function(){
    const profilePopUpWrap = document.getElementsByClassName('pop-wrap')[0];
    const profilePopUpWrapProps = window.getComputedStyle(document.getElementsByClassName('pop-wrap')[0]).display

    if(profilePopUpWrapProps == "none") profilePopUpWrap.style.display = "block"
})

document.addEventListener('click', function(){
    const profilePopUpWrap = document.getElementsByClassName('pop-wrap')[0];
    const profilePopUpWrapProps = window.getComputedStyle(document.getElementsByClassName('pop-wrap')[0]).display
    if(profilePopUpWrapProps == "block") profilePopUpWrap.style.display = "none"
})


// function clickInEvent(event) {
//     event.currentTarget.querySelector(userBtn).show();
// }
// clickInEvent();

// function clickOutEvent(event){
//     var target = event.target;
//     if(target == event.currentTarget.querySelector(userBtn)){
//         target.hide();
//     }
// }
// clickOutEvent();