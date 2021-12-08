// 1차 리팩토링후
window.onload = function() {
    let inputUpload = document.querySelector('.input_upload');
    let btnUpload = document.querySelector('.btn_upload');
    let contentFlag = false;
    let comments = document.querySelector('.comments');

    inputUpload.addEventListener("keyup", function() {
        if (inputUpload.value) {
            btnUpload.style.color = '#3e99ed';
            contentFlag = true;
        } else {
            btnUpload.style.color = '#c5e2fa';
            contentFlag = false;
        }
    });

    const addComment = (el) => {
        el.innerHTML = `<strong>username </strong>${inputUpload.value}<small> 방금전</small>`;
        if (contentFlag) {
            comments.appendChild(el);
        }
    }

    const handleComment = (event) => {
        console.dir(event.target);
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