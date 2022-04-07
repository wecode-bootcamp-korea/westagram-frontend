const inputForm = document.querySelector('.commit_comment');
const commentForm = document.querySelector('.comment')
const pressForm = document.querySelector(".upload_comment")


const pressEnter = () => {
    if(inputForm.value) {
        const allAdd = document.querySelector('.add_all_comment')
        const add = document.createElement('div')
        const divAdd = document.createElement('div')
        const addCommentName = document.createElement('div')
        const addCommentContent = document.createElement('div')
        const heartBtn = document.createElement('button')
        const addImg = document.createElement('img')
        const inputValue = document.querySelector(".commit_comment").value;


        add.className = "add_comment"
        allAdd.appendChild(add)
    
        divAdd.className = "add_comment_preview"
        add.appendChild(divAdd)
    
        addCommentName.className = "add_comment_name"
        addCommentName.innerHTML = "jhw"
        divAdd.appendChild(addCommentName)
    
        addCommentContent.className = "add_comment_content"
        addCommentContent.innerHTML = inputValue
        divAdd.appendChild(addCommentContent)
    
        heartBtn.className = "img_box"
        heartBtn.type = "button"
        heartBtn.addEventListener("click", function () {

            // 기존 이미지 삭제
            heartBtn.remove()

            // 새로운 이미지 생성
            const RedHeart = document.createElement('img')
            RedHeart.src = "./img/heart1.png"
            RedHeart.className = "add_comment_heart"
            RedHeart.alt="changeHeart"

            // 새로운 div 생성, 그 안에 새로운 이미지 추가
            const newHeartBtn = document.createElement("div")
            newHeartBtn.className = "new_img_box"
            add.appendChild(newHeartBtn)
            newHeartBtn.appendChild(RedHeart)
        })
        add.appendChild(heartBtn)

        addImg.src = "./img/heart.png"
        addImg.alt = "comment_heart"
        addImg.className = "add_comment_heart"
        heartBtn.appendChild(addImg)

        const removeComment = document.createElement("button")
        removeComment.className = "remove_comment"
        removeComment.innerHTML = "삭제"
        removeComment.type = "button"
        removeComment.addEventListener("click", function() {
            removeComment.closest(".add_comment").remove()
        })
        divAdd.appendChild(removeComment)

    }
    inputForm.value=null;

}

// 똑같은 거 클릭에서도 구현

const getClick = () =>{
    if(inputForm.value) {
        const allAdd = document.querySelector('.add_all_comment')
        const add = document.createElement('div')
        const divAdd = document.createElement('div')
        const addCommentName = document.createElement('div')
        const addCommentContent = document.createElement('div')
        const heartBtn = document.createElement('button')
        const addImg = document.createElement('img')
        const inputValue = document.querySelector(".commit_comment").value;


        add.className = "add_comment"
        allAdd.appendChild(add)
    
        divAdd.className = "add_comment_preview"
        add.appendChild(divAdd)
    
        addCommentName.className = "add_comment_name"
        addCommentName.innerHTML = "jhw"
        divAdd.appendChild(addCommentName)
    
        addCommentContent.className = "add_comment_content"
        addCommentContent.innerHTML = inputValue
        divAdd.appendChild(addCommentContent)
    
        heartBtn.className = "img_box"
        heartBtn.type = "button"
        heartBtn.addEventListener("click", function () {

            // 기존 이미지 삭제
            heartBtn.remove()

            // 새로운 이미지 생성
            const RedHeart = document.createElement('img')
            RedHeart.src = "./img/heart1.png"
            RedHeart.className = "add_comment_heart"
            RedHeart.alt="changeHeart"

            // 새로운 div 생성, 그 안에 새로운 이미지 추가
            const newHeartBtn = document.createElement("div")
            newHeartBtn.className = "new_img_box"
            add.appendChild(newHeartBtn)
            newHeartBtn.appendChild(RedHeart)
        })
        add.appendChild(heartBtn)

        addImg.src = "./img/heart.png"
        addImg.alt = "comment_heart"
        addImg.className = "add_comment_heart"
        heartBtn.appendChild(addImg)

        const removeComment = document.createElement("button")
        removeComment.className = "remove_comment"
        removeComment.innerHTML = "삭제"
        removeComment.type = "button"
        removeComment.addEventListener("click", function() {
            removeComment.closest(".add_comment").remove()
        })
        divAdd.appendChild(removeComment)

    }
    inputForm.value=null;
}



// 기존에 있는 댓글 좋아요 삭제 기능
const likeComment = () => {
    // 기존 이미지 삭제
    document.querySelector(".comment_heart").remove()

    // 새로운 이미지 생성
    const redHeart = document.createElement("img")
    redHeart.src = "./img/heart1.png"
    redHeart.className = "new_comment_heart"
    redHeart.alt="changeHeart"

    // 새로운 div 생성
    const firstNewBtn = document.createElement("div")
    firstNewBtn.className = "comment_heart"
    document.querySelector(".comment_already").appendChild(firstNewBtn)

    // 이미지 추가
    firstNewBtn.appendChild(redHeart)


}

const removeComment = () => {
    document.querySelector(".remove_comment").closest(".comment_already").remove()
}



// 태그 생성
// let div = document.createElement('div')
// 태그에 class부여
// div.className = "DOM"
// 요소에 텍스트 추가
// div.innerHTML = "dom"
// h1태그 안에 추가
// h1.appendchild(div)