function addMessage() {
    const makeP = document.createElement('p');
    const message = document.getElementById('writeComment').value;
    makeP.innerHTML = `<a href="" class="re_id">wecode_bootcamp</a><span class="re_p">${message}</span><span class="deletespan"><button class="deleteBtn">
    <i class="fas fa-ellipsis-h"></i>
</button></span><span><button class="re_heart"><i class="far fa-heart"></i></button></span>`;

    document.getElementById('other_re').appendChild(makeP);
}

// function deleteInput() {
//     const message = document.getElementById('writeComment').value;
//     message = null;
// }



// <input id ="writeComment" type="text" placeholder="댓글 달기..." onkeypress="if(window.event.keyCode==13) addMessage();"></input>



// const addM = document.querySelector('#writeComment')
// addM.addEventListener('keyup', enterkey() )

// function addMessage() {
//     const makeP = document.createElement('p');
//     const message = document.getElementById('writeComment').value;
//     const asdasd = document.getElementById('other_re');
    // const messageAdd = document.getElementById('addR').innerHTML = `<a href="" class="re_id">wecode_bootcamp</a><span class="re_p">${message}</span><span><button class="re_heart"><i class="far fa-heart"></i></button></span>`

//     const messageAdd = document.getElementById('other_re').innerHTML = `<a href="" class="re_id">wecode_bootcamp</a><span class="re_p">${message}</span><span><button class="re_heart"><i class="far fa-heart"></i></button></span>`
    
//     makeP.innerHTML = message;
//     asdasd.appendChild(makeP);
// }


// function addMessage() {
//     const message = document.getElementById('writeComment').value;
//     document.getElementsByClassName('other_re').innerText = `<p><a href="" class="re_id">wecode_bootcamp</a><span class="re_p">${message}</span><span><button class="re_heart"><i class="far fa-heart"></i></button></span></p>`
// }


