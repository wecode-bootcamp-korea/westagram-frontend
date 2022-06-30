const cmntBox = document.getElementsByClassName('comment-box')[0];
const cmntValue = cmntBox.value;



class Comment {
    constructor() {
        this.create();
    }

    create (){
        let cmntValue = cmntBox.value;

        this.cmntValue = cmntValue;
        this.newcmnt = document.createElement('div');
        this.newcmnt.classname = 'cmnt';
        this.newcmnt.innerHTML = 
    }
}