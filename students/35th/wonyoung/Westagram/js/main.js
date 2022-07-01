"use strict";

const cmntBox = document.getElementsByClassName('comment-box')[0];
const user = document.getElementsByClassName('userOfComment-container')[0];
const cmnt = document.getElementsByClassName('commentOfUser-container')[0];
const cmntLike = document.getElementsByClassName('comment-like-container')[0];
const cmntDelete = document.getElementsByClassName('comment-delete-container')[0];
const cmntPost = document.getElementsByClassName('comment-enter-button')[0];

class Comment {
    constructor() {
        this.likeState = 0;
        this.create();
        this.liked();
        this.deleted();
    }

    create(){
        let cmntValue = cmntBox.value;

        this.cmntValue = cmntValue;
        
        this.myId = document.createElement('span');
        this.myId.className = 'userOfComment';
        this.myId.innerHTML = 'ore.zeno';
        user.appendChild(this.myId);

        this.newcmnt = document.createElement('span');
        this.newcmnt.className = 'commentOfUser';
        this.newcmnt.innerHTML = this.cmntValue;
        cmnt.appendChild(this.newcmnt);

        this.like = document.createElement('img');
        this.like.className = 'comment-like';
        this.like.src = 'image/love.png';
        this.like.alt = '댓글-좋아요';
        cmntLike.appendChild(this.like);

        this.delete = document.createElement('img');
        this.delete.className = 'comment-delete';
        this.delete.src = 'image/delete.png';
        this.delete.alt = '댓글-삭제';
        cmntDelete.appendChild(this.delete);

        cmntBox.value = '';
    }

    liked(){
        this.like.addEventListener('click', ()=>{
            if(this.likeState == 0){
                this.like.src = 'image/liked.png';
                this.likeState = 1;
            }
            else {
                this.like.src = 'image/love.png';
                this.likeState = 0;                
            }
        })
    }

    deleted (){
        this.delete.addEventListener('click', ()=>{
                
            this.myId.remove();
            this.newcmnt.remove();
            this.like.remove();
            this.delete.remove();


        })
    }
}

function activatePostButton() {
    let cmntValue = cmntBox.value;
    let cmntLength = cmntValue.length;

    (cmntLength > 0) ? 
    (cmntPost.disabled = false) :
    (cmntPost.disabled = true)

}

cmntBox.addEventListener('keydown', activatePostButton);

cmntPost.addEventListener('click', function () {
    new Comment();
})

cmntBox.addEventListener('keypress', e => {
    if (e.key == 'Enter'){
        new Comment();
    }
})

