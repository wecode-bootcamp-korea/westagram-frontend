const commentList = document.getElementsByClassName('commentList')[1];
const inputVal = document.getElementsByClassName('input')[0];
const uploadClick = document.getElementById('textUpload');


let createEl = document.createElement("span");

uploadClick.addEventListener('click', function() {
    if (inputVal.value.length > 0) {
     commentList.appendChild('inputVal');
    }
});