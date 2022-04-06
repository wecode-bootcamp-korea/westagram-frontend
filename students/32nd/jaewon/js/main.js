const input = document.querySelector('.comment__input');
const btn = document.querySelector('.comment__button');
const commentFooter = document.querySelector('.footer__comment__results');
const account = document.querySelector('.comment__account');
const text = document.querySelector('.comment__text');

input.addEventListener('keyup', () => {
    if (input.value.length > 0) {
        btn.disabled = false;
        btn.style.color = "#3897F0";
    } else {
        btn.disabled = true;
        btn.style.color = "#BFE0FD";
    }
})
btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.length > 0) {
        let newDiv = document.createElement('div');
        newDiv.className = 'footer__comment__result';
        newDiv.innerHTML = `
    <span class="comment__account">lily</span>
    <span class="comment__text">${input.value}</span>
    <button class="comment__heart"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"></button>`;
        commentFooter.appendChild(newDiv);
        input.value = null;
    }
});
