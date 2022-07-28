

let post = document.getElementById("post");
let commentAdd = document.querySelector(".commentBottom")
    post.addEventListener("click", function(){
    let commentBoxValue= document.querySelector(".commentPlz").value;

    commentAdd.innerHTML +=`<div class="feedMiddleComment">
        <p><span class="commentId">haydemMoon127</span> ${commentBoxValue}</p>
    </div>`
});

window.addEventListener('keyup', function() {

    const idvalue = document.querySelector('.commentPlz').value;
    const thisIsButton = document.querySelector('#post');

    if(idvalue.length === 0){
        thisIsButton.disabled = true;
        thisIsButton.style.backgroundColor = "#B2DFFC";
    };
    
    if(idvalue.length > 0){
       thisIsButton.disabled = false;
       thisIsButton.style.backgroundColor = "#0095F6";
    };
})

const enterComment = document.querySelector('.commentPlz');
enterComment.addEventListener('keyup', (e)=>{

    if (e.key === 'Enter'){

        let commentBoxValue= document.querySelector(".commentPlz");

        console.log(commentAdd)

        commentAdd.innerHTML +=`<div class="feedMiddleComment">
        <p><span class="commentId">haydemMoon127</span> ${commentBoxValue.value}</p>
    </div>`
       commentBoxValue.value = '';

    }
})




/*
window.addEventListener('keyup', function() {

    const idvalue = document.getElementById('id').value;
    const passwordvalue = document.getElementById('password').value;
    const thisIsButton = document.getElementById('loginButton');

    if(idvalue.length === 0 || passwordvalue.length === 0){
        thisIsButton.disabled = true;
        console.log('a')
        thisIsButton.style.backgroundColor = "#B2DFFC";

    
    };
    
    if(idvalue.length > 0 && passwordvalue.length > 0){
       thisIsButton.disabled = false;
       thisIsButton.style.backgroundColor = "#0095F6";

    };
});


/*
let post= document.querySelectorall('.commentPlz')[0].addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let commentBoxValue= document.querySelector(".commentPlz").value;
        console.log(commentBoxValue)
           let li = document.createElement("li");
           let text = document.createTextNode(commentBoxValue);
           li.appendChild(text);
           document.getElementById("unordered").appendChild(li);
    }
});*/
/*
let post= document.getElementById("post");

post.addEventListener("click", function(){
    let commentBoxValue= document.querySelector(".commentPlz").value;
    let li = document.createElement("li");
    let text = document.createTextNode(commentBoxValue);
    let commentWithId = `hayedenmoon127 + $[text]`
    li.appendChild(commentWithId);
    document.getElementById("unordered").appendChild(li);
});
*/