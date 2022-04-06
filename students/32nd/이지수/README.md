# 33. Event

## 33-1. event(이벤트)

좋은 웹사이트인지 아닌지 어떻게 판단할까요? 오류가 없고, 이동이 자연스럽고 부드러워야 하며, 클릭했을 때 빠르게 반응해서 사용자의 분노를 일으키지 않는 사이트가 좋은 사이트입니다. 특히 요즘에는 화려하고 다양한 기능이 들어가는 웹 사이트가 늘어나면서 프론트앤드 개발자가 처리해야할 interaction이 더 많아졌습니다.

`interaction`은 특별히 무엇을 의미하는 것일까요? 예를 들어 옷 쇼핑몰에서 사진 위에 마우스를 올렸을때(mouse over) 다른 각도의 제품 사진으로 바꿔서 보여주는 것이 있습니다.

interaction은 HTML이나 CSS만으로 구현할 수 없고 자바스크립트 코딩이 필요합니다. 이렇게 특정 요소에 interactive한 반응을 할 수 있게 하는 것을 이벤트라고 합니다.

- 클릭 이벤트
- 마우스 이벤트
- 스크롤 이벤트
- 터치 이벤트
- resize(화면 크기 변화) 이벤트

등 다양합니다.

JavaScript에서 이벤트를 감지하고 그에 맞는 결과를 내어줄 수 있도록 프로그래밍을 작성해야합니다.

---

## 33-2. addEventListener

이벤트를 달 때 사용하는 함수 이름은 `addEventListener`입니다. event listener 단어를 해석하면 이벤트를 듣고 있다는 뜻이겠죠. `addEventListener`는 특정 이벤트가 언제 발생하는지 가만히 듣고 있다가, 발생하면 인자로 받은 함수를 실행시켜줍니다.

모양은 아래와 같습니다. 자세한 예제는 다음에 나와있으니 어떻게 생겼는지 형태만 봐주세요.

```js
요소.addEventListener(이벤트종류, function() {
  //이벤트가 일어났을 때 실행할 내용
});
```

특정 요소에 `addEventListener` 함수를 붙이고(호출하고), 인자로 이벤트 종류와, 이벤트가 발생했을 때 실행할 함수를 전달합니다. 그 동안에 인자로 배열, String, Number, Date 객체는 전달하는 것을 봤는데... 함수도 인자로 전달할 수 있군요! 이렇게 인자로 전달된 함수를 콜백 함수라고 부릅니다.

"콜백함수"라는 단어는 지금 있다는 것만 알고 넘어갑시다!

---

## 33-3. **이벤트 종류**

공식 문서에 나와있는 이벤트 목록 중에 10%정도 가져왔습니다. 이벤트 종류는 정말 많지만, 실제적으로 쓰는 이벤트는 그렇게 많지 않습니다.

[https://storage.googleapis.com/replit/images/1554723016530_25b06f82c125862353d80bdbbfee752b.pn](https://storage.googleapis.com/replit/images/1554723016530_25b06f82c125862353d80bdbbfee752b.pn)

앞으로 자주 쓰는 이벤트는 모두 다룰 예정입니다. 이벤트 종류는 너무 자세히 보지 않아도 괜찮습니다.

참고)

- [https://www.w3schools.com/js/js_htmldom_eventlistener.asp](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---

## 33-4. 클릭이벤트

버튼, 사진, 글 등 웹사이트에서 이루어지는 이벤트 중 가장 많은 것이 클릭 이벤트 입니다. 프론트앤드 개발자는 버튼, 사진, 글 등의 요소마다 클릭 이벤트를 달아서 각자 클릭이벤트에 맞는 reaction을 프로그래밍합니다.

- 로그인 버튼 클릭 -> 로그인 api 호출
- 상품 사진 클릭 -> 상품 상세 화면으로 이동
- 자세히 보기 버튼 클릭 -> 팝업화면 출력

간단한 예제로 보겠습니다. event 함수를 추가하고 싶으면, 앞에서 배웠던 DOM을 사용합니다. 그래서 DOM에 어떻게 접근하고, 어떻게 수정하는지 잘 알고 있어야 합니다.

```js
const thisIsButton = document.getElementsByClassName('login-btn')[0];

thisIsButton.addEventListener('click', function() {
  const password = document.getElementById('password').value;
  const rePassword = document.getElementById('re-password').value;

  if (!password) {
    alert('비밀번호를 입력해주세요!');
    return;
  }
  
  if (!rePassword) {
    alert('비밀번호 확인을 입력해주세요!');
    return;
  }
  
  if (password !== rePassword) {
    alert('비밀번호가 맞지 않습니다!');
    return;
  }
  
  alert('회원가입 성공!!');
});
```

한 줄씩 보겠습니다.

```js
const thisIsButton = document.getElementsByClassName('login-btn')[0];
```

`getElementsByClassName`함수로 login-btn라는 클래스 이름이 있는 요소를 찾습니다. 뒤에 [0]은 왜 붙었을까요? class 이름은 여러 요소에 중복해서 이름을 줄 수 있습니다. 그래서 `getElementsByClassName` 으로 요소를 찾으면 여러 요소가 담긴 배열이 반환됩니다.

해당 클래스 이름을 가진 요소가 하나 밖에 없으면, 요소가 하나인(배열 길이가 한 개인) 배열이 반환됩니다. 위에서 `button`이라는 변수에 `.login-btn` 요소를 찾아서 저장하였죠. 그 요소에 `addEventListener`를 달아줍니다. 첫 번째 인자에 `'click'`이라고 세팅했습니다.

```js
thisIsButton.addEventListener('click', function() {
  //click 했을 때 실행되어야할 기능
});
```

앞으로 `button.login-btn`을 클릭(click 이벤트가 발생) 하면,두 번째 인자로 넘긴 함수가 실행됩니다.

---

## 33-5. 키이벤트

이 번에는 키이벤트입니다. 사람이 키보드를 누르면 발생하는 이벤트 입니다.

- 키보드를 눌렀을 때 발생하는 keydown
- 키보드를 누르고 떼는 순간 발생하는 keyup
- 키보드를 눌러 어떤 텍스트가 작성되는 순간 발생하는 keypress

이중에 `keydown` 이벤트로 `addEventListener` 추가해봅시다.

```js
const thisIsPw = document.getElementById('password');
const thisIsCode = document.getElementById('code');

thisIsPw.addEventListener('keydown', function(event) {
  thisIsCode.innerHTML = event.code; 
});
```

아까 `getElementsByClassName` 으로 요소를 찾으면 배열이 return 되어서 [0] 으로 접근해야 했는데,이번에는 `getElementById`으로 바로 사용할 수 있습니다.

```js
const thisIsPw = document.getElementById('password');
```

id는 중복이 될 수 없으니 전체 페이지에서 요소가 한 개밖에 없어서 배열로 `return`되지 않고 요소가 `return`된 것입니다. `input#password` 요소에 `keydown`이라는 이벤트가 발생하면 걸릴 수 있도록 eventListener를 추가하였습니다.

```js
thisIsPw.addEventListener('keydown', function(e) {
  thisIsCode.innerHTML = e.code;
});
```

input에 키보드로 뭔가를 누르면 두 번째 인자인 function이 실행됩니다. 그래서 키보드를 누르면 `span#code`의 내용에 `e.code` 가 들어가게 됩니다. 여기서 code 는 입력된 키의 이름 정보를 의미합니다.

**(IE의 경우, e.code 대신 e.keyCode 로 입력된 키의 정보를 받아옵니다 😕 )**

평소에 다른 웹 사이트에서 로그인 할 때, 어디는 엔터를 치면 로그인이 되고, 어디는 엔터쳐도 로그인이 되지 않아 불편하다고 생각했을 것입니다. 이는 프론트엔드 개발자가 key 이벤트를 추가해서 엔터를 감지하여 로그인이 되도록 프로그래밍을 했느냐, 아니냐의 차이입니다.

enter키의 code는 'Enter' 입니다. 따라서 아래와 같이 코드를 짤 수 있습니다.

```js
thisIsPw.addEventListener('keydown', function(e) {
  if (e.code === 'Enter') {
     //로그인 함수로 이동
  }
});
```

33-4 에서 클릭 이벤트를 했을 때는 두 번째 인자로 받는 함수에 `e` 라는 인자가 없었는데, 이번에는 추가했습니다. **이와 같이 두 번째 인자로 들어오는 함수에서 항상 event와 관련된 정보를 인자로 받을 수 있습니다.**

```js
console.log(e) 
```

콘솔로 어떤 정보가 들어오는지 확인해 보세요!

&nbsp
&nbsp

# Assignment

### 이벤트가 발생하면 실행될 함수에 아래의 기능을 만들어주세요.

- `input#re-password`에 `keyup` 이벤트를 추가해주세요.
- `input#password` 와 `input#re-password`의 `value` 속성을 통해 input에 작성된 값을 가져오고,
- 서로 같은지 아닌지 확인해서 같지 않다면
- `<p>`태그의 `.alert` 클래스에 `"비밀번호가 일치하지 않습니다"` 라는 문구를 넣어주세요.
- 서로 비밀번호가 같다면 `""` 빈 문구를 넣어주시면 됩니다.

수고하셨습니다! 이번 과제는 **레플잇 마지막 문제**였습니다.
완료하신 분들은 지금까지 배운 HTML, CSS, JavaScript 목차 쭉 보시면서 복습해보시고,
어려웠던 부분은 블로그 글도 작성하시면서 보완해보세요!