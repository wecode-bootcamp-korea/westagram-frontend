const commentInput = document.getElementById('commentInput');
const Button = document.querySelector('#commentButton');

commentInput.addEventListener('keyup',() => {
    let Result = commentInput.value;
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
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    let txtnod = document.createTextNode(Result);
    commentDiv.appendChild(newDiv);
    commentDiv.appendChild(newP);
    newP.appendChild(txtnod);
    let newImg = document.createElement("img");
        newImg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        newDiv.appendChild(newImg)
        let newButton = document.createElement("button");
        newButton.innerText = "삭제";
        newDiv.appendChild(newButton);
}

commentInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let Result = commentInput.value;
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        let txtnod = document.createTextNode(Result);
        commentDiv.appendChild(newDiv);
        newDiv.appendChild(newP);
        newP.appendChild(txtnod);
        let newImg = document.createElement("img");
        newImg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        newDiv.appendChild(newImg)
        let newButton = document.createElement("button");
        newButton.innerText = "삭제";
        newDiv.appendChild(newButton);
    }
}) 
let readHeaper = commentInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let Result = commentInput.value;
        let newDiv = document.createElement("div");
        let newP = document.createElement("p");
        let txtnod = document.createTextNode(Result);
        commentDiv.appendChild(newDiv);
        newDiv.appendChild(newP);
        newP.appendChild(txtnod);
        let newImg = document.createElement("img");
        newImg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        newDiv.appendChild(newImg)
        let newButton = document.createElement("button");
        newButton.innerText = "삭제";
        newDiv.appendChild(newButton);

        let readHealper = function(){
            let blackHeart = document.querySelector(commentDiv.newImg)
            blackHeart.addEventListener("click",function(){
            newImg.src = "https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656488760~hmac=bd72a8495e22fb2a8bc5f197e59a39b9";
            });
        }

        readHealper();
    }
}) 



// let blackHeart = document.querySelector(commentDiv.newImg)
// blackHeart.addEventListener("click",function(){
//     newImg.src = "https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656488760~hmac=bd72a8495e22fb2a8bc5f197e59a39b9";
// });
//빨간하트
//https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656488760~hmac=bd72a8495e22fb2a8bc5f197e59a39b9

