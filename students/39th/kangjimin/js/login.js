// id, pw에 각각 한 글자 이상 써야 버튼이 활성화
// 원래 연한 파란색 -> 활성화되면 파란색

const button = document.getElementsByClassName('button')[0];
const id = document.getElementsByClassName('id')[0];
const pw = document.getElementsByClassName('pw')[0];

// 삼항연산자 공부!!!
function active() {
    if (id.value.length >= 1 && pw.value.length >= 1) {
        button.disabled = false;
        button.style.backgroundColor = "#1483ff";
        // 버튼 활성화가 되었다가 다시 비활성화 되게 만들기 위해서 else if에 조건넣어줌
    } else if (id.value.length < 1 || pw.value.length < 1) {
        button.disabled = true;
        button.style.backgroundColor = "#b7d9ff";
    }
}

// keyup도 많이 쓰지만 input도 많이씀 (마우스우클릭 붙여넣기 했을때 input은 콘솔에 찍힘)
id.addEventListener("keyup", active);
pw.addEventListener("keyup", active);

// functio init() {addEventListener} // init() //하나의 function으로 관리할 수 있음