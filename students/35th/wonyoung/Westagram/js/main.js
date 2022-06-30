const cmntBox = document.getElementsByClassName('comment-box')[0];
const user = document.getElementsByClassName('userOfComment-container')[0];
const cmnt = document.getElementsByClassName('commentOfUser-container')[0];
const cmntPost = document.getElementsByClassName('comment-enter-button')[0];

class Comment {
    constructor() {
        this.create();
    }

    create (){
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

        cmntBox.value = '';
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
