const postings = document.querySelector(".postings");



postings.addEventListener("click" , (e) => {

    e.target.className==="post" ?
    window.location = './reply.html' :
    window.location = '#';

})