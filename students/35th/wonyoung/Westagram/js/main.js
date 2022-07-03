"use strict";

const cmntBox = document.getElementsByClassName('comment-box')[0];
// const user = document.getElementsByClassName('userOfComment-container')[0];
const cmnt = document.getElementsByClassName('feed-comment')[0];
// const cmntLike = document.getElementsByClassName('comment-like-container')[0];
// const cmntDelete = document.getElementsByClassName('comment-delete-container')[0];
const cmntPost = document.getElementsByClassName('comment-enter-button')[0];
let likeState = 0;
let cmntArr = [];


const create = () => {

    if(checkValue()){
        let cmntValue = cmntBox.value;
        cmntArr = [];

        // let myId = document.createElement('span');
        // myId.className = 'userOfComment';
        // myId.innerHTML = 'ore.zeno';
        // cmnt.appendChild(myId);
        createCmnt('userOfComment', 'ore.zeno');

        // let newcmnt = document.createElement('span');
        // newcmnt.className = 'commentOfUser';
        // newcmnt.innerHTML = cmntValue;
        // cmnt.appendChild(newcmnt);
        createCmnt('commentOfUser', cmntValue);

        // let likeIcn = document.createElement('span');
        // likeIcn.className = 'comment-like';
        // likeIcn.style.backgroundImage = "url('image/love.png')";
        // cmnt.appendChild(likeIcn);
        // cmntArr.push(likeIcn);
        createIcon('comment-like', "url('image/love.png')");

        // liked(likeIcn);

        // let deleteIcn = document.createElement('span');
        // deleteIcn.className = 'comment-delete';
        // deleteIcn.style.backgroundImage = "url('image/delete.png')";
        // cmnt.appendChild(deleteIcn);
        // cmntArr.push(deleteIcn);
        createIcon('comment-delete', "url('image/delete.png')");

        // deleted(deleteIcn, cmntArr);

        cmntBox.value = '';
        
    }
}

const createCmnt = (cl, ine) => {
    var target = document.createElement('span');
    target.className = cl;
    target.innerHTML = ine;
    cmnt.appendChild(target);
    cmntArr.push(target);
}

const createIcon = (cl, imgUrl) => {
    let target = document.createElement('span');
    target.className = cl;
    target.style.backgroundImage = imgUrl;
    cmnt.appendChild(target);
    cmntArr.push(target);

    if(cl == 'comment-like'){
        likeHandler(target);
    }
    else if(cl == 'comment-delete'){
        deleteHandler(target, cmntArr);
    }
}

const likeHandler = (likeIcn) => {
    likeIcn.addEventListener('click', ()=>{
        if(likeState == 0){
            likeIcn.style.backgroundImage = "url('image/liked.png')";
            likeState = 1;
            }
        else {
            likeIcn.style.backgroundImage = "url('image/love.png')";
            likeState = 0;                
         }
     })
 }

 const deleteHandler = (deleteIcn, Arr) => {
    deleteIcn.addEventListener('click', ()=>{
        deleteAll(Arr)
    })   
 }

 const deleteAll = (Arr) => {
    for (let i in Arr){
        Arr[i].remove();
    }
 }

const checkValue = () => {
    let cmntValue = cmntBox.value;
    return (cmntValue.length > 0 && !!(cmntValue.trim()))
}

const activatePostButton = () => {
    cmntPost.disabled = !checkValue();
}

const init = () => {
    cmntBox.addEventListener('input', activatePostButton);
    cmntBox.addEventListener('keyup', activatePostButton);
    cmntPost.addEventListener('click',()=>{
        create();
    })
    cmntBox.addEventListener('keypress', e => {
        if (e.key == 'Enter'){
            create();
        }
    })    
}

init();


// class Comment {
//     constructor() {
//         this.likeState = 0;
//         this.create();
//         this.liked();
//         this.deleted();
//     }

//     create(){

//         if(checkValue()){
//             let cmntValue = cmntBox.value;

//             this.cmntValue = cmntValue;
            
//             this.myId = document.createElement('span');
//             this.myId.className = 'userOfComment';
//             this.myId.innerHTML = 'ore.zeno';
//             user.appendChild(this.myId);

//             this.newcmnt = document.createElement('span');
//             this.newcmnt.className = 'commentOfUser';
//             this.newcmnt.innerHTML = this.cmntValue;
//             cmnt.appendChild(this.newcmnt);

//             this.like = document.createElement('img');
//             this.like.className = 'comment-like';
//             this.like.src = 'image/love.png';
//             this.like.alt = '댓글-좋아요';
//             cmntLike.appendChild(this.like);

//             this.delete = document.createElement('img');
//             this.delete.className = 'comment-delete';
//             this.delete.src = 'image/delete.png';
//             this.delete.alt = '댓글-삭제';
//             cmntDelete.appendChild(this.delete);

//             cmntBox.value = '';
//         }
//     }

//     liked(){
//         this.like.addEventListener('click', ()=>{
//             if(this.likeState == 0){
//                 this.like.src = 'image/liked.png';

//                 this.likeState = 1;
//             }
//             else {
//                 this.like.src = 'image/love.png';
//                 this.likeState = 0;                
//             }
//         })
//     }

//     deleted (){
//         this.delete.addEventListener('click', ()=>{
                
//             this.myId.remove();
//             this.newcmnt.remove();
//             this.like.remove();
//             this.delete.remove();


//         })
// }
//     }