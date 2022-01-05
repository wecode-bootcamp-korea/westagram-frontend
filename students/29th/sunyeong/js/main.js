window.onload = function(){
    heartFn()
    let writeBox = document.getElementsByClassName("feed-comment-write");

    
    

    for(let i = 0; i<writeBox.length; i++){
        writeBox[i].addEventListener('keydown',function(e){
            if(e.code === 'Enter'){
                let addTag = document.createElement('span');addTag.innerHTML=
                `<span><strong>wecode</strong> ${writeBox[i].value}</span><div><i class='fas fa-heart'></i><button onclick=deleteComment(this) class = 'border-none background-none'>삭제</button></div>`
                writeBox[i].parentNode.parentNode.children[5].appendChild(addTag)
                writeBox[i].parentNode.children[0].value='';
            }
        })
    }
}

function heartFn(){
    let hearts = document.getElementsByClassName("fa-heart");
    for(let i = 0; i<hearts.length; i++){
        hearts[i].addEventListener('click',function(){
            if(this.style.color==='' ||this.style.color==='gray' )this.style.color='red';
            else{
                this.style.color='gray';
            }
        });
    }
}



function fnComment(buttonInfo){
    let addTag = document.createElement('span');
    let text = buttonInfo.parentNode.children[0].value;
    addTag.innerHTML=`<span><strong>wecode</strong> ${text}</span><i class="fas fa-heart"></i>`
    console.log(buttonInfo)
    // console.log(buttonInfo.previousSibling)
    // console.dir(parentNode)
    // console.dir(buttonInfo.parentNode.parentNode.children[5].childNodes)
    // console.log(buttonInfo.parentNode.parentNode.children[5].childNodes)
    // console.dir(buttonInfo.parentNode.children[0].value)
    buttonInfo.parentNode.parentNode.children[5].appendChild(addTag);
    buttonInfo.parentNode.children[0].value='';

}


function deleteComment(comment){
    comment.parentNode.parentNode.remove()
}

//search 이벤트
const searchButton = document.getElementById('input-search');

const instaId = [
    { id : 'wecode1', introduction : '반갑습니다', img:"./img/example1.jpg"},
    { id : 'wecode12', introduction : '위코드', img:"./img/example2.jpg"},
    { id : 'ode1', introduction : '반갑', img:"./img/example1.jpg"},
    { id : 'line', introduction : '라인', img:"./img/example3.jpg"},
    { id : 'hi', introduction : '반갑습다', img:"./img/example1.jpg"},
    { id : 'wecode_korea', introduction : '위코드 코리아', img:"./img/example4.jpg"},
    { id : 'wecode_founder', introduction : '위코드 설립자', img:"./img/example5.jpg"},
    { id : 'wecode_bootcamp', introduction : '부트캠프', img:"./img/example6.jpg"},
    { id : 'Wecode', introduction : 'hi', img:"./img/example7.jpg"},
    { id : 'suuu', introduction : 'hello', img:"./img/example8.jpg"},
    { id : 'banana', introduction : 'bbbbbb', img:"./img/example1.jpg"},
    { id : 'apple', introduction : '@@@~~~~', img:"./img/example2.jpg"}
]
function fnSearch(info){
    let data=instaId.filter(function(v){
        return v.id.includes(searchButton.value);
    });;
    console.log(data);
    console.log(searchButton.parentNode)
    let divTag = document.createElement('div');
    divTag.innerHTML=`<div class='aside-story-img-box'><img src="img/example1.jpg" class='aside-img img-border-circle'>
    <div class = 'aside-img-owner'> <p>gildong</p><span>hi!</span> </div></div>`
    searchButton.parentNode.appendChild(divTag)

}

searchButton.addEventListener('keyup', fnSearch);

`<div class='aside-story-img-box'>
                        <img src="img/example1.jpg" class='aside-img img-border-circle'>
                        <div class = 'aside-img-owner'>
                            <p>gildong</p>
                            <span>hi!</span>
                        </div>
                    </div>`



