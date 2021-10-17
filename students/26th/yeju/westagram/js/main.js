"use strict";

/* Mission4 - 댓글 게시 기능 */
const feedCmt = document.getElementById('feedComment');
const feedBtn = document.getElementById('feedButton');
const cmtUp = document.getElementById('CMT_WRITE');

function btnColor() {
    if(feedCmt.value.length>0){
        feedBtn.style.color="#0095F6";
        feedBtn.disabled = false;
    }else{
        feedBtn.style.color = "#B8E2FD";
        feedBtn.disabled = 'disabled';
    }
}

function commentUp(){
    cmtUp.innerHTML+='<div><span><strong>yestagram </strong></span>'+feedCmt.value+'</div>';
}

feedCmt.addEventListener('keyup', btnColor);
feedBtn.addEventListener('click',commentUp);