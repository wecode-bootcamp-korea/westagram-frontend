let $id = document.querySelector(".user-id");
let $pw = document.querySelector(".user-pw");
let $loginBtn = document.querySelector(".login button");

// 버튼 활성화
// $loginBtn.style.backgroundColor = "color명" 방법 대신 toggle 이용하기
// toggle()는 괄호 안의 것이 존재하면 고대로 두고, 없으면 넣어주는 역할을 해서 이것만 써도 된다.
// toggle()은 하나의 class가 있을 때와 없을 때 결과가 다르다.
// 처음에는 두가지의 class를 이용하기 위해 add()와 remove()를 사용하려 했으나 잘 되지 않음
// 🙄add()와 remove()도 하나의 class가 있을 때와 없을 때를 나타낸다.😲
// 이 경우에는 toggle()을 사용해서도 구현 가능한가? ()


// $id와 $pw에 value(?)가 있는지를 확인해야함
// value가 없다면 remove active class
function activateLoginBtn() {
  $loginBtn.classList.add('active');
  if (($id.value) == '' || ($pw.value) == '') {
    $loginBtn.classList.remove('active');
  }
}

// $id, $pw 둘다 이루어져야 함
$id.addEventListener('input', activateLoginBtn);
$pw.addEventListener('input', activateLoginBtn);

// console.log("ID: ", $id.value);
// console.log("PW: ", $pw.value);
// console.log(e); // InputEvent
// console.log(e.currentTarget.value); // 내가 입력한 값