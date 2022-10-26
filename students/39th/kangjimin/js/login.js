// id, pw에 각각 한 글자 이상 써야 버튼이 활성화
// 원래 연한 파란색 -> 활성화되면 파란색

const button = document.getElementsByClassName('button')[0];
const id = document.getElementsByClassName('id')[0];
const pw = document.getElementsByClassName('pw')[0];

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

id.addEventListener("keyup", active);
pw.addEventListener("keyup", active);
