const commwrap = document.querySelector('.comment')
const commInput = document.querySelector('.commtext')
const post = document.querySelector('.commbtn')
let i = 0;

post.addEventListener('click', function(){
  let inset = document.createElement('p');//p태그를 동적으로 만들고
  let idName = document.getElementById("name");
  let user = idName.querySelectorAll('p');
  console.log(i)
  //idName p태그를 하단에 추가한다.
  idName.appendChild(inset);
  //html은 태그까지 변경 가능
  user[i].innerHTML = `<span>yebin</span> ${commInput.value}`;
  i++;

  commInput.value="";
 });



