const textbox = document.querySelector('#commentInput');
const whereToAdd = document.getElementsByClassName('commentSection')[0];
const button = document.getElementById('publish');
const pop = document.getElementsByClassName('popup')[0];
const deletepop = document.getElementById('deleteComment');
const heart = document.getElementById('heartImg');

button.disabled = true;


const createComment = () => {
    // userId
    let userId = "userId"
    // getting comment from input
    const comment = textbox.value;
    // element = comment + like button
    const element = document.createElement('p');
    element.className = "individualComment";
    element.setAttribute("style", "width:430px");
    // like 
    const like = document.createElement("input");
    like.className = "like";
    like.src = "img/navHeart.jpeg";
    like.type ='image';
    like.setAttribute("style", "height: 15px; width: 15px");
    like.style.float = 'right';
    // creating element and append it
    element.innerHTML = userId + "  " + comment;
    whereToAdd.appendChild(element);
    element.append(like);
}


const publishActive = () => {
    const comment = textbox.value;
    if (comment.length > 0) {
        button.style.color = "#0095f6"
        button.disabled = false;
    } else {
        button.style.color = "#BFE0FD"
        button.disabled = true;
    }
}

textbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createComment()
        textbox.value = '';
    }
});

button.addEventListener('click', function () {
    createComment()
    textbox.value = '';
});

textbox.addEventListener('keyup', function (e) {
    publishActive();
})

heart.addEventListener('click', function () {
    if (heart.src.match('img/navHeart.jpeg')) {
        heart.setAttribute('src', 'img/redHeart.jpeg');
    } else if (heart.src.match('img/redHeart.jpeg')) {
        heart.setAttribute('src', 'img/navHeart.jpeg')
    }
})

document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('individualComment')) {
        pop.style.visibility = 'visible';

        deletepop.addEventListener('click', function () {
            e.target.remove();
            pop.style.visibility = 'hidden';
        })
    }
})


document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('like') && e.target.src.match('img/navHeart.jpeg')) {
        e.target.setAttribute('src', 'img/redHeart.jpeg')
    } else if (e.target.classList.contains('like') && e.target.src.match('img/redHeart.jpeg')) {
        e.target.setAttribute('src', 'img/navHeart.jpeg')
    }

})
