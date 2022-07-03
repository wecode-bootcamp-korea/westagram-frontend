const inputText = document.getElementById('inputText');
const submit = document.getElementById('submit');
const commentBox = document.getElementById('commentBox');

inputText.addEventListener('keyup', function(e){
    if(inputText.value.length > 0){
        submit.style.color = "#0095F6";
    }
    else {
        submit.style.color = "#B2DFFC"
    }
});

function enter() {
    if(window.event.keyCode == 13){
        submitOnclick();
    }
}

function submitOnclick() {
    if(inputText.value.length > 0){
        const create = document.createElement('div');
        create.innerHTML = inputText.value;
        commentBox.appendChild(create);
        inputText.value = "";
        submit.style.color = "#B2DFFC"
        }
};