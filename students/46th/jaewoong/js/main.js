document.querySelector('.reply').addEventListener('keydown',function(e){
    let reply = e.target.value;
    if( e.keyCode === 13){
        createComment(reply);

        uploadHeart();

        uploadDelete();
    }
});


document.querySelector('.upload').addEventListener('click',function(){
    let reply = document.querySelector('.reply').value;

    createComment(reply);
    
    uploadHeart();

    uploadDelete();
});


uploadHeart();

uploadDelete();

searchId();

profileSettings();

function createComment(reply){
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
    document.querySelector('.content-reply').insertAdjacentHTML('beforeend',템플릿);
}

function uploadHeart(){
    let click = 0 ;
    for(let i = 0 ; i < $('.heart').length ; i++){
            $('.heart').eq(i).click(function(e){
                click++;
                if(click%2 === 1){
                    $(e.target).addClass('red');
                }else{
                    $(e.target).removeClass('red');
                }
            })
    }
}

function uploadDelete(){
    for(let i = 0 ; i < $('.delete').length ; i++){
        $('.delete').eq(i).click(function(e){
        $(e.target).parents('.template').remove();
        })
    }
}

const id = [{ nickname : 'wecode_bootcamp' , name : '>wecode' , img : 'img/wecode.png' },
          { nickname : 'wecode_founder' , name : '송은우' , img : 'img/zebra.jpg' },
          { nickname : 'wecode' , name : '강남구 테헤란로 427,서울', img : 'img/explore.png'},
          { nickname : '이건안되게' , name : '강남구 테헤란로 427,서울', img : 'img/explore.png'}
        ];

function searchId(){
    $('.search').on('keyup', e => {
        $('.search-result').html('');
        $('.search-result').addClass('show');
        let search = $(e.target).val();
        if(search.length > 0){
            id.forEach( (a,i) => {
                if(a.nickname.includes(search)===true){
                    let template = `
                    <div class="story-time border-bottom">
                    <div><img src=${a.img} alt="" class="story-img"></div>
                    <div>
                      <p class="nick">${a.nickname}</p>
                      <p>${a.name}</p>
                    </div>
                    </div>`;
                    $('.search-result').append(template);
                    $('.search-result').removeClass('show');
                    if($('.nick').eq(i).html().includes(search) === true){
                    }
                }
            })
        }else{
            $('.search-result').html('');
            $('.search-result').addClass('show');
        }
    })
}

function profileSettings(){
    $('.nav-button').eq(2).click(function(){
        $('.nav-menu').toggleClass('show');
    })
}