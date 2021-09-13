const repl = document.querySelector('.repl input');
const button = document.querySelector('.repl button');
const newUl= document.querySelector('.reply');


button.addEventListener('click', addCommnet);
repl.addEventListener('keydown',pressEnter);


//게시 버튼 클릭시 리플 달기
function addCommnet(){
  const li = document.createElement('li');
  const liList = repl.value;

  li.innerHTML=`thangno ${liList}`;
  newUl.appendChild(li);
  repl.value=null;
};



//엔터치면 리플달기
function pressEnter(e){
  if(e.keyCode == 13){
    addCommnet()

}
}

