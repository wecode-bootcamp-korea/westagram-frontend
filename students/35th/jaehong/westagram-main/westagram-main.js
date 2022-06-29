const clickBtn = document.getElementsByTagName('button')[0];
const typeC = document.getElementsByTagName('input')[1];

typeC.addEventListener("keydown", uploadComment);

function uploadComment(e) {
    if(e.keyCode === 13 ) {
        let comment = document.getElementsByClassName('commentPlus')[0];
        let makeDiv = document.createElement('div');
        let makeUser = document.createElement('strong');
        let makeMsg = document.createElement('span');
        let makeBtn = document.createElement('BUTTON');

        makeDiv.className = "commentDiv"
        makeUser.className = "commentUser"
        makeMsg.className = "commentMsg"
        makeBtn.className = "deleteBtn"

        makeMsg.innerHTML = typeC.value;
        makeUser.innerHTML = "allong_sio";
        makeBtn.innerHTML = "삭제";

        comment.appendChild(makeDiv);
        makeDiv.appendChild(makeUser);
        makeDiv.appendChild(makeMsg);
        makeDiv.appendChild(makeBtn);

        typeC.value = "";


        clickBtn.addEventListener("click", (event) => {

            uploadComment()
            typeC.value = "";
 
        });
    }
}