
// 엔터시 댓글 업로드
document.querySelector('.reply').addEventListener('keydown',function(e){
    let reply = e.target.value;
    if( e.keyCode === 13){
        //댓글 추가
        createComment(reply);

        // upload 된 댓글에 하트 버튼 기능 추가  
        uploadHeart();

        // upload 된 댓글에 삭제 버튼 기능 추가 
        uploadDelete();
    }
})



// 게시 버튼 클릭시 댓글 업로드
document.querySelector('.upload').addEventListener('click',function(){
    let reply = document.querySelector('.reply').value;

    //댓글 추가
    createComment(reply);
    
    // upload 된 댓글에 하트 버튼 기능 추가  
    uploadHeart();

    // upload 된 reply 에 delete 버튼 기능 추가 

    uploadDelete();

})


//-----
//기존 댓글 좋아요 버튼 기능

uploadHeart();

// 기존 댓글 삭제 버튼 기능

uploadDelete();


// 아이디 목록 배열
let id = ['wecode_bootcamp','wecode_founder','wecode_korea']

// 아이디 검색 기능
$('.search').on('keyup', e => {
    console.log($(e.target).val())
})



//----------------------------
// 함 수

// 댓글 추가 함수
function createComment(reply){
    //댓글 입력 없으면 업로드 x
    if(reply === ''){
        return;
    }

    let 템플릿 = `
    <div class="template">
    <p>${reply}</p>
    <div>
    <button class="setting-reply heart"><i class="fa-solid fa-heart"></i></i></button> 
    <button class="setting-reply delete"">삭제</button>
    </div>
    </div>`;

     document.querySelector('.content-reply').insertAdjacentHTML('beforeend',템플릿)
}


// 업로드된 댓글 하트 버튼
function uploadHeart(){
    let click = 0 ;
    for(let i = 0 ; i < $('.heart').length ; i++){
            $('.heart').eq(i).click(function(e){
                click++;
                if(click%2 === 1){
                    $(e.target).addClass('red');
                }else{
                    $(e.target).removeClass('red')
                }
            })


    }
}


//업로드된 댓글 삭제 버튼
function uploadDelete(){
    for(let i = 0 ; i < $('.delete').length ; i++){
        $('.delete').eq(i).click(function(e){
        // 클릭한 요소의 부모만 찾아서 삭제
        $(e.target).parents('.template').remove();
        })
    }
}