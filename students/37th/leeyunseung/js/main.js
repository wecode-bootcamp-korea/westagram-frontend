const inputRiple = document.querySelector('.reple');
const submitRiple = document.querySelector('.reple_button');
const thisRiple = document.querySelector('.reple_container');

const submitFuncion = () => {

    const thisComments = document.createElement('div');
    const thisP = document.createElement('p');

    thisComments.classList.add('newreple');
    const inputValue = inputRiple.value;
    thisP.innerText = inputValue;

    thisRiple.appendChild(thisComments);
    thisComments.appendChild(thisP);
    inputRiple.value = '';
}

inputRiple.addEventListener('keydown', (e) => {
    if(e.code=== 'Enter') {
   submitFuncion();
   inputRiple.value = '';

    }
});

submitRiple.addEventListener('click',submitFuncion);
