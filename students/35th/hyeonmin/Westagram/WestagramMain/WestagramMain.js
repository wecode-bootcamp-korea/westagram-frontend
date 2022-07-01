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
    newDiv.appendChild(newP);
    newP.appendChild(txtnod);
    let newImg = document.createElement("img");
        newImg.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        newDiv.appendChild(newImg)
        let newButton = document.createElement("button");
        newButton.innerText = "삭제";
        newDiv.appendChild(newButton);

    commentInput.value = "";
    //아래 노드삭제 시도
    let commentListDivs = document.querySelectorAll("#commentList div");
    let newButtonList = document.querySelectorAll("#commentList button");
    for(i = 0; i < commentListDivs.length; i++) {
        newButtonList[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
            //newDiv.parentNode.removeChild(newDiv) 전체삭제
            //commentListDivs[i] i=1넣으면 commentListDivs[1]이 지워짐
        });
    }
    //좋아요
    let blackHeart = document.querySelectorAll("#commentList img");
    blackHeart[0].addEventListener("click", function(){
        blackHeart[0].src = "https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656488760~hmac=bd72a8495e22fb2a8bc5f197e59a39b9";
    });
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
        commentInput.value = "";
        //아래 노드삭제 시도
        let commentListDivs = document.querySelectorAll("#commentList div");
        let newButtonList = document.querySelectorAll("#commentList button");
        for(i = 0; i < commentListDivs.length; i++) {
            newButtonList[i].addEventListener("click", function(){
                if(this.parentNode.parentNode) {
                    this.parentNode.parentNode.removeChild(this.parentNode);
                }
                //newDiv.parentNode.removeChild(newDiv) 전체삭제
                //commentListDivs[i] i=1넣으면 commentListDivs[1]이 지워짐
            });
        }
        //좋아요
        let blackHeart = document.querySelectorAll("#commentList img");
        for(i = 0; i < blackHeart.length; i++) {
            blackHeart[i].addEventListener("click", function(){
                if(this.parentNode) {
                    this.src = "https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656660255~hmac=de935654d7b441a9db2fda3fd490f484";
                }
                //newDiv.parentNode.removeChild(newDiv) 전체삭제
                //commentListDivs[i] i=1넣으면 commentListDivs[1]이 지워짐
            });
        }
        // newButtonList[0].addEventListener("click", function(){
        //     if(commentListDivs[0].parentNode) {
        //         commentDiv.removeChild(commentListDivs[0]);
        //     }
        // });
    }
}) 





// let blackHeart = document.querySelector(commentDiv.newImg)
// blackHeart.addEventListener("click",function(){
//     newImg.src = "https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656488760~hmac=bd72a8495e22fb2a8bc5f197e59a39b9";
// });
//빨간하트
//https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1656488760~hmac=bd72a8495e22fb2a8bc5f197e59a39b9

