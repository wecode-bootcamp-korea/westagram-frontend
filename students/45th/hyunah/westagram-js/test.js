// button 요소에 접근 (HTML 요소에 접근)
const btnElement = document.getElementById('btn');

// button 요소에 이벤트 부여 (클릭시 알림창 출력) >>> 동적 기능 구현
btnElement.addEventListener('click', function () {
	alert('Welcome to Wecode Coding Bootcamp!');
});