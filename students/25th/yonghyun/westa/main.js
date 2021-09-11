function addMessage() {
    const makeP = document.createElement('p');
    const message = document.getElementById('writeComment').value;
    const firstP = '<a href="" class="re_id">wecode_bootcamp</a><span class="re_p">';
    const lastP = '</span><span class="deletespan"><button class="deleteBtn"><i class="fas fa-ellipsis-h"></i></button></span><span><button class="re_heart"><i class="far fa-heart"></i></button></span>'

    makeP.innerHTML = `${firstP}${message}${lastP}`;
    document.getElementById('other_re').appendChild(makeP);
}

function heartChange() {
    const heartClick = document.querySelector('.likeBtn');
    const emptyH = document.querySelector('#emptyheart');
    const redH = document.querySelector('#redheart');
    
    // if(emptyH.style.color = 'transparent'){
        // emptyH.style.color = 'black';
        // redH.style.color = 'transparent';
    // }else if(emptyH.style.color = 'red'){
        emptyH.style.color = 'transparent';
        redH.style.color = 'red';
    // }
}

// const clickE = document.querySelector('.erase');
// const asd = document.getElementsByClassName('re_p');

// function removeP() {
//     asd.remove();
// }

// clickE.addEventListener('click', removeP);