const commentInput = document.getElementById('commentInput');
const Button = document.querySelector('#commentButton');

commentInput.addEventListener('keyup',() => {
    let Result = commentInput.value;
    console.log(Result.length);
    if(Result.length !== 0){
        Button.style.color = "blue";
        Button.disabled = false;
    }else {
        Button.style.color = "rgb(162, 224, 255)";
        Button.disabled = true;
    }
})

const commentDiv = document.querySelector("#commentList");

Button.onclick = function(){
    let Result = commentInput.value;
    let newP = document.createElement("p");
    let txtnod = document.createTextNode(Result);
    commentDiv.appendChild(newP);
    newP.appendChild(txtnod);
    console.log(Result);
}

commentInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let Result = commentInput.value;
        let newP = document.createElement("p");
        let txtnod = document.createTextNode(Result);
        commentDiv.appendChild(newP);
        newP.appendChild(txtnod);
        console.log(Result);
    }
});