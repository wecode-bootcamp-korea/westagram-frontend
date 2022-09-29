//댓글 관련 기능

const commentinput = document.getElementById("commentinput");
const commentbutton = document.getElementById("commentbutton");
const commentbox = document.getElementById("commentbox");

//댓글쓰고 엔터치면 추가
commentinput.addEventListener("keyup",function(e){

  if(e.keyCode==13&&commentinput.value){
      
    const inputvalue = commentinput.value;

    const cdiv = document.createElement('div');
    const cspan = document.createElement('span');
    const cb = document.createElement('b');
    const cid = document.createTextNode( 'kimdoyoung12345  ' );

    cb.appendChild( cid );
    cspan.appendChild( cb );
    cspan.innerHTML+=inputvalue;
    cspan.innerHTML+='<img src="/heart.png" onclick="javascript:imgToggle()" class="comheart">';
    cspan.innerHTML+='<img src="/xxx.png" onclick="javascript:comdelete()" class="xxx">';
    cdiv.appendChild( cspan );
    commentbox.appendChild(cdiv);
    commentinput.value=null;
  }
if(!commentinput.value) { 
    commentbutton.disabled = true;
  } 
  else { 
    commentbutton.disabled = false;
  }
  });


//댓글쓰고 '게시' 버튼 누르면 추가
commentbutton.addEventListener("click",function(e){

  const inputvalue = commentinput.value;
  const cdiv = document.createElement('div');
  const cspan = document.createElement('span');
  const cb = document.createElement('b');
  const cid = document.createTextNode( 'kimdoyoung12345  ' );

  cb.appendChild( cid );
  cspan.appendChild( cb );
  cspan.innerHTML+=inputvalue;
  cspan.innerHTML+='<img src="/heart.png" onclick="javascript:imgToggle()" class="comheart">';
  cspan.innerHTML+='<img src="/xxx.png" onclick="javascript:comdelete()" class="xxx">';
  cdiv.appendChild( cspan );
  commentbox.appendChild(cdiv);
  commentinput.value=null;

});

//하트누르면 좋아요/취소
function imgToggle(){

    if(event.target.getAttribute('src')=="/heart.png"){
        event.target.src="/heart2.png";
    }else if(event.target.getAttribute('src')=="/heart2.png"){
        event.target.src="/heart.png";
        }
}

// X 누르면 댓글삭제
function comdelete(){
  event.target.parentNode.parentNode.remove();
}

//프로필 이미지 누르면 메뉴박스 뜨고, 다른 곳 누르면 사라지는 기능
const settingboximg = document.getElementById("settingboximg");
const person = document.getElementById("person");

let boxboolean= '1';


person.addEventListener("click",function(e){
  console.log("dd")
  settingboximg.style.display='block';
  boxboolean= '2';
})

document.onmousedown = function leftClick() {
  let target = window.event.target;
  if(boxboolean==2){
   if (target!=settingboximg) {
    settingboximg.style.display='none';
    boxboolean= '1';
  }
  }
 };