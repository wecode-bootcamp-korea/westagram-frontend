const commentInput = document.getElementsByClassName('comment')[0];
const commentBtn = document.getElementsByClassName('fa-check')[0];

const makeComment = () => {
    const container = document.createElement('div'); 
    const userImg = document.createElement('img');
    const innerContainer = document.createElement('div');
    const userId = document.createElement('span');
    const comment = document.createElement('span');
    container.className = 'commentContainer';
    userImg.src = './img/profile.png';
    userImg.className = 'profile';
    userId.innerHTML = 'Doyun';
    userId.className = 'name';
    comment.innerHTML = commentInput.value;
    comment.className = 'comValue';

    innerContainer.appendChild(userId);
    innerContainer.appendChild(comment);
    container.appendChild(userImg);
    container.appendChild(innerContainer);

    document.getElementsByClassName('commentLine')[0].appendChild(container);

    commentInput.value = ''; 
}

commentBtn.addEventListener('click', makeComment)

addArray = arr => {
    const newArr = arr;
    for(let i=0; i<arr.length; i++){
      newArr[i] = this.arr[i]
    }
    console.log(arr)
    return arr;
  }
  
addArray([1,2])



// for (j = 0; j < commentBtn.length; j++) {
//     const commentValue = []
//     commentValue.push(document.querySelectorAll('.articleComment input')[j].value)
//     commentBtn[j].addEventListener('click', () => {
//         console.log(commentValue);
//     })
// }



// for (i = 0; i < commentInput.length; i++) {
//     commentInput[i].addEventListener("keyup", (e) => {
//         //const commentValue = e.target.value;
//         const comment = document.createElement('p');


        

//     });
// }