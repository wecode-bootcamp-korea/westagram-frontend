// 1차 리팩토링후
window.onload = function() {
    let inputUpload = document.querySelector('.input_upload');
    let btnUpload = document.querySelector('.btn_upload');
    let contentFlag = false;
    let comments = document.querySelector('.comments');
    let hearts = document.querySelectorAll('.hearts');

    // 댓글좋아요기능 / 삭제기능
    comments.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target.classList.contains('hearts')) { // 좋아요기능
            e.target.classList.toggle("red");
            if (e.target.className.startsWith("far")) e.target.className = e.target.className.replace("far", "fas");
            else if (e.target.className.startsWith("fas")) e.target.className = e.target.className.replace("fas", "far");
        } else if (e.target.classList.contains('fa-times-circle')) e.target.parentNode.remove();
    });

    // 댓글 제거기능

    // 게시버튼 활성화 && 내용포함여부확인 기능
    inputUpload.addEventListener("keydown", function() {
        if (inputUpload.value) {
            btnUpload.style.color = '#3e99ed';
            contentFlag = true;
        } else {
            btnUpload.style.color = '#c5e2fa';
            contentFlag = false;
        }
    });

    const addComment = (el) => {
        el.innerHTML = `<strong>username </strong>${inputUpload.value}<small> 방금전</small><i class="fas fa-times-circle circles"></i><i class="far fa-heart hearts"></i>`;
        if (!contentFlag) return;

        comments.appendChild(el);
        inputUpload.value = "";

        hearts = document.querySelectorAll('.hearts');
    }

    const handleComment = (event) => {
        const eventClassName = event.target.className;

        if(eventClassName === 'btn_upload') addComment(document.createElement('span'));
        if(eventClassName === 'input_upload') {
            if(event.keyCode === 13) addComment(document.createElement('span'));
        }
    }

    btnUpload.addEventListener("click", handleComment);
    inputUpload.addEventListener("keyup", handleComment);
}

// 리팩토링전
// window.onload = function() {
//     let body = document.querySelector('body');
//     let inputUpload = document.querySelector('.input_upload');
//     let btnUpload = document.querySelector('.btn_upload');
//     let contentFlag = false;
//     let comments = document.querySelector('.comments');

//     const addComment = (el) => {
//         el.innerHTML = `<strong>username </strong>${inputUpload.value}<small> 방금전</small>`;
//         if (contentFlag) {
//             comments.appendChild(el);
//         }
//     }

//     inputUpload.addEventListener("keyup", function() {
//         if (inputUpload.value) {
//             btnUpload.style.color = '#3e99ed';
//             contentFlag = true;
//         } else {
//             btnUpload.style.color = '#c5e2fa';
//             contentFlag = false;
//         }
//     });

//     btnUpload.addEventListener("click", function() {
//         addComment(document.createElement('span'));
//     });

//     inputUpload.addEventListener("keyup", function(e) {
//         if (e.keyCode === 13) addComment(document.createElement('span'));
//     });
// }