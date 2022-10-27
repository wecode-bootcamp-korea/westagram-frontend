// 댓글 게시 구현
const $commentAdd = document.getElementById('commentAdd')
const $postBtn = document.querySelector('.postBtn')
const $newComments = document.querySelector('.newComments')

function postComment(e){    
    e.preventDefault()

    // 사용자 입력 댓글
    const commentValue = $commentAdd.value
    // 새로운 댓글 생성
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
    
    // delete click시 
    newDelete.addEventListener('click',(e)=>{
        const delComment = e.target.closest('.comments')
        $newComments.removeChild(delComment) 
    })

    // like 표시하기
    let cnt = 0
    newLike.addEventListener('click',()=>{
        if (cnt % 2 == 0){
            newLike.src = 'img/redheart.png'
        } else{
            newLike.src = 'img/heart.png'
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
    // 사용자 입력값
    const idKeyup = e.target.value
    const idArray = idData.map(function(name){
        return [name.id, name.profile]
    })
    
    // 사용자 입력갑과 id array에서 일치하는거 filtering
    const filterArray = idArray.filter(word => word[0].includes(idKeyup))
    const $filterBox = document.querySelector('.filterBox');
    $filterBox.innerHTML = '';
    $filterBox.style.display = 'block'
    
    if (filterArray.length !== 0){
        filterArray.forEach((el) => {
            const listId = document.createElement('div')
            const listImg = document.createElement('img')
            listId.className = 'filterId'
            listImg.className = 'filterImg'
            listId.innerText = el[0]
            listImg.src = `${el[1]}`
            $filterBox.appendChild(listId)
            listId.appendChild(listImg)
        });
    } else{ // 해당 조건 없을 때
        $filterBox.style.display = 'none'
    }
}
// 검색창 클릭시 빈칸
const $searchInput = document.getElementById('searchInput')
const $searchImg = document.getElementById('searchImg')
function eraseSearchInPut(e){
    e.target.removeAttribute('placeholder')
    $searchImg.style.display = 'none'
}
$searchInput.addEventListener('click',(e)=>{
    eraseSearchInPut(e)
    if (!(e.target.value)){
        e.target.addEventListener('keyup',(e)=>{searchId(e)})
    }
    e.target.addEventListener('focusout',function(e){
        document.querySelector('.filterBox').style.display = 'none'
        $searchInput.value = ''
        $searchInput.setAttribute("placeholder","search")
        $searchImg.style.display = 'block'
    })
})

// 프로필 클릭시 메뉴 박스
const $navProfile = document.querySelector('.navProfile')
function clickProfile(){
    const $hidemenu = document.querySelector('.hidemenu')
    $hidemenu.classList.toggle('active')
}
$navProfile.addEventListener('click',clickProfile)



