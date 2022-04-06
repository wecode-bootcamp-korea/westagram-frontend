const inputForm = document.querySelector('.commit_comment');
const commentForm = document.querySelector('.comment')
const pressForm = document.querySelector(".upload_comment")

const getValueInput = () =>{
    if(inputForm.value) {
        const allAdd = document.querySelector('.add_all_comment')
        const add = document.createElement('div')
        const divAdd = document.createElement('div')
        const addCommentName = document.createElement('div')
        const addCommentContent = document.createElement('div')
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
    
        addImg.src = "/img/heart.png"
        addImg.alt = "comment_heart"
        addImg.className = "add_comment_heart"
        add.appendChild(addImg)
    }
    inputForm.value=null;
}

const pressEnter = () => {
    if(inputForm.value) {
        const allAdd = document.querySelector('.add_all_comment')
        const add = document.createElement('div')
        const divAdd = document.createElement('div')
        const addCommentName = document.createElement('div')
        const addCommentContent = document.createElement('div')
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
    
        addImg.src = "/img/heart.png"
        addImg.alt = "comment_heart"
        addImg.className = "add_comment_heart"
        add.appendChild(addImg)
    }
    inputForm.value=null;
}



// 태그 생성
// let div = document.createElement('div')
// 태그에 class부여
// div.className = "DOM"
// 요소에 텍스트 추가
// div.innerHTML = "dom"
// h1태그 안에 추가
// h1.appendchild(div)


// const getValueInput = () =>{
//     let inputValue = document.querySelector(".commit_comment").value; 
//     document.querySelector(".add_comment").innerHTML = inputValue;
//     document.querySelector(".add_name").innerHTML = "jhw"
//     const img = document.createElement('img')
//     img.src = "/img/heart.png"
//     img.alt = "comment_heart"
//     img.className = "comment_heart"
//     let addImg = document.querySelector(".add_img")
//     addImg.appendChild(img)
//     inputForm.value=null;
//   }

// const pressEnter = () => {
//     let inputValue = document.querySelector(".commit_comment").value;
//     document.querySelector(".add_comment").innerHTML = inputValue;
//     document.querySelector(".add_name").innerHTML = "jhw"
//     const img = document.createElement('img')
//     img.src = "/img/heart.png"
//     img.alt = "comment_heart"
//     img.className = "comment_heart"
//     let addImg = document.querySelector(".add_img")
//     addImg.appendChild(img)
//     inputForm.value=null;
// }



// const complete = () => {
//     let inputValue = document.querySelector(".commit_comment").value;
//     const p = document.createElement('p')
//     p.className = "add_comment"
//     document.querySelector(".add_comment").innerHTML = inputValue;
//     document.querySelector(".add_name").innerHTML = "jhw"
//     div.appendChild('div')
// }



