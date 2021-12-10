const input = document.querySelector('.comment_test');
const inputAdd_btn = document.querySelector('.upload_btn_m_text');
const comments = document.querySelector('.comment');

const comment_function = () => {
    const text = input.value;
    
    const comment_detail = document.createElement('div');
    comment_detail.setAttribute('class', 'comment_detail');

    const comment_text_test = document.createElement('p');
    comment_text_test.setAttribute('class', 'comment_text_test');
    comment_text_test.innerHTML = text;

   comment_detail.appendChild(comment_text_test);
   comments.appendChild(comment_detail);

};
inputAdd_btn.addEventListener('click', () => {
comment_function();
input.value = "";

})
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        comment_function();
        input.value = "";
    }
    return;
});