// 댓글 게시 구현
const $commentAdd = document.getElementById('commentAdd')
const $postBtn = document.querySelector('.postBtn')
const $newComments = document.querySelector('.newComments')
function postComment(e){    
    e.preventDefault()
    const commentValue = $commentAdd.value
    const newComment = document.createElement('p')
    newComment.className = 'comments'
    newComment.innerHTML = `<span>jyp_1234</span>${commentValue}`
    
    const newLike = document.createElement('img')
    newLike.src = "img/heart.png"
    newLike.className = 'commentLike'
    
    const newDelete = document.createElement('img')
    newDelete.src = 'img/delete.png'
    newDelete.className = 'commentDelete'
    $newComments.appendChild(newComment)
    newComment.appendChild(newLike)
    newComment.appendChild(newDelete)
    
    newDelete.addEventListener('click',()=>{
        const $comments = document.querySelector('.comments')
        $newComments.removeChild($comments)
    })

    // 구현안됨
    let cnt = 0
    newLike.addEventListener('click',()=>{
        const $commentLike = document.querySelector('.commentLike')
        if (cnt % 2 == 0){
            $commentLike.src = 'img/redheart.png'
        } else{
            $commentLike.src = 'img/heart.png'
        }
        cnt++
    })
    $commentAdd.value = '' 
}
$commentAdd.addEventListener('keyup',(e)=>{
    const key = e.key
    if(key === 'Enter' && !e.shiftKey){
        postComment(e)
    }
})
$postBtn.addEventListener('click',function(e){
    postComment(e)
})

// 검색창 클릭시 빈칸
const $searchInput = document.getElementById('searchInput')
const $searchImg = document.getElementById('searchImg')
function eraseSearchInPut(e){
    e.target.removeAttribute('placeholder')
    $searchImg.remove()
}
$searchInput.addEventListener('click',(e)=>{eraseSearchInPut(e)})

// 검색창 입력시 아이디 찾기
const idData = [
    { id : 'zhwltlr', profile : 'img/zhwltlr.png'},
    { id : 'jyp_0808', profile : 'img/flower.jpg'},
    { id : 'jyinfo_music', profile : 'img/song.jpg'},
    { id : 'jyinfo_dog', profile : 'img/dog.jpg'},
    { id : 'jyinfo_movie', profile : 'img/movie.jpg'},
    { id : 'christmas_soon', profile : 'img/christmas.jpg'},
    { id : 'gonnatrip', profile : 'img/trip.jpg'},
    { id : 'jyfav_conan', profile : 'img/detective.png'},
    { id : 'jyfav_itzy', profile : 'img/itzy.jpg'},
    { id : 'jyfav_baseball', profile : 'img/baseball.png'},
]
function searchId(e){
    const idKeyup = e.target.value
    const idArray = idData.map(function(name){
        return name.id
    })
    const filterArray = idArray.filter(word => word.includes(idKeyup))

    filterArray.forEach((el) => {
        const listId = document.createElement('li')
        listId.innerText = el
        document.querySelector('.searchBox').appendChild(listId)
    });
}
$searchInput.addEventListener('keyup',(e)=>{searchId(e)})


// 프로필 클릭시 메뉴 박스
const $navProfile = document.querySelector('.navProfile')
function clickProfile(){
    const $hidemenu = document.querySelector('.hidemenu')
    $hidemenu.classList.toggle('active')
}
$navProfile.addEventListener('click',clickProfile)



