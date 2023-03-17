//이벤트 리스너를 적용 시킬 버튼 이름 정의
//데이터를 당겨올 input 정의
//이벤트 리스너에 정의된 변수 이름으로 함수 정의

//작동될 함수 정리 (이하 로그인 활성 함수라 부름)
function addComment() {
  //input(댓글입력)값을 변수
  const commentValue = document.getElementsByClassName('input-text')[0];

  //<li>태그를 생성하는 변수
  const commentElement = document.createElement('li');

  //유저아이디
  const id = document.createElement('span');
  id.innerText = 'username_';

  //하트아이콘
  const heartIcon = document.createElement('i');
  heartIcon.className += 'fa-regular fa-heart';
  heartIcon.style.color ='red';

  //<li>태그안에 input(댓글입력)값이 작성되게 설정
  commentElement.innerText = commentValue.value;


  //<button> : <button> 태그 생성 & class 이름 추가
  const removeComment = document.createElement('button');
  removeComment.className += 'remove-button';
  //<button> : 값 안에 x 기호 표시
  removeComment.innerText = '✕';

  //HTML에 작성해 놓은 <ul>
  //- id선택자와는 다르게 class선택자는 여러번 사용 가능하기 때문에 끝에 꼭! 인덱스를 지정해 주어야 됨!!
  //- !!한번만 사용된 class선택자라면 [0]을 사용!!
  const getListBox = document.getElementsByClassName('comment-ul')[0];
  
  //<button> : <li>태그안에 <button>태그가 자식태그로 들어감
  commentElement.appendChild(removeComment);
  //<ul>태그 안에 <li>태그가 자식태그로 들어감
  getListBox.appendChild(commentElement);
  //<li>태그 안에 <p>태그가 자식태그로 들어감
  commentElement.appendChild(id);
  //<li>태그 안에 <heart button>태그가 자식태그로 들어감
  commentElement.appendChild(heartIcon);

  //민서님이 도와줌 고마워용 민서님
  let count = 1;
  heartIcon.addEventListener('click', () => {
    
    if(count % 2 !== 0) {
      count++;
      heartIcon.className = 'fa-solid fa-heart';
      heartIcon.style.color ='red';
    } else if(count % 2 === 0){
      count++;
      heartIcon.className = 'fa-regular fa-heart';
    }
    }
  );

  //<button> : 클릭 시 삭제이벤트 진행
  removeComment.addEventListener('click', (event) => {
    commentElement.remove(event.currentTarget.parentNode);
  });
}

//!!콘솔 창에 함수()를 실행하면 함수가 작동하게됨!!
// console.log(addComment()) 

//작동해야될 버튼 변수이름 설정
const commentButton = document.getElementById('upload-btn');

//버튼의 변수에 이벤트 설정 : 클릭하면 정의해 놓은 로그인 활성 함수 작동
commentButton.addEventListener('click', addComment);
