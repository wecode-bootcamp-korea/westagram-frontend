const commentForm = document.querySelector('.comments_form');
const comments = document.querySelector("#comment_input");
const submitButton = document.querySelector(".btn span");

function commentUpdate() {
        const ulbox = document.querySelector(".comments_info.comment_list_ul")
        const liBox = document.createElement("li");
        const pBox =  document.createElement("div");
        const userBox = document.createElement("span");
        const commentCtnBox = document.createElement("span");
        let user ="seo0&nbsp;";

        userBox.setAttribute("class", "user_id");
        commentCtnBox.setAttribute("class", "comment_contents");
        pBox.setAttribute("class", "comments_tit");
       
        userBox.innerHTML = user;
        commentCtnBox.innerHTML = comments.value;
       
        pBox.appendChild(userBox);
        pBox.appendChild(commentCtnBox);
        liBox.appendChild(pBox);
        ulbox.appendChild(liBox);
        comments.value = "";
};


// keydown시 page stop
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
});

// 게시버튼 클릭 시 발생하는 함수
submitButton.addEventListener("click",commentUpdate);

// 게시글 작성 후 엔터를 쳤을 때 발생하는 함수
comments.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {
        commentUpdate();
    }
});

//댓글 버튼 disabled
comments.addEventListener("keyup" , function(e) {
    let commentValue = comments.value;

    if(commentValue.length > 0) {
        submitButton.disabled = false;
        submitButton.style.cursor = "pointer";
        submitButton.style.color = "#1c7ed6";
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = "default";
        submitButton.style.color = "#bfdffd";
    }
});


const togglingBtns = document.querySelectorAll('.heart'); 

togglingBtns.forEach(function(btns){ 
    btns.addEventListener ("click", function() { 
        btns.classList.toggle('heart_on')
    });
})

void 2 == '2';   // (void 2) == '2', returns false
void (2 == '2'); // void (2 == '2'), returns undefined