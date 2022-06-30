const comIt= document.getElementsByClassName('comment')[0];
const textBox = document.getElementsByClassName('commtext')[0];
const comitBtn = document.getElementsByClassName('commbtn')[0];
let i = 0;

//게시버튼을 클릭하면
comitBtn.addEventListener('click' , ()=>{
  //<p>태그를 생성하겠다.
  const userText = document.createElement('p')
  //게시글을 올렸을때 따라올 id명으로 가져올 name의 아이디명을 불러온다.
  const userName = document.getElementById('name');
  //생성한 <p>태그를 가져오겠다.
  const get = userName.querySelectorAll('p')

  //클릭을 눌렀을때 텍스트 박스의 내용을 하단에 출력하겠다.
  userName.appendChild(userText);
  //p태그에 html태그인 span을 불러와서 텍스트 박스에 입력한 값이랑 같이 보여지게 출력해준다.
  get[i].innerHTML = `<strong>ID*</strong> ${textBox.value}`;
  //위에 선언해준 변수 i가 0일때 내용 1개 출력 후 반복하여 2개,3개.... 내용들이 추가된다.
  i++;
  //글을 게시한 후에는 텍스트박스의 값을 없애겠다.
  textBox.value="";
});

//Enter를 눌러도 값이 출력되게해라
comitBtn.addEventListener('keypress', (event)=>{
  (event.key === 'Enter')
  event.preventDefault();
  comitBtn.clikc();
});
