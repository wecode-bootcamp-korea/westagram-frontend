// 1.canvas 엘리먼트 취득
const canvas = document.getElementById("userProfile"); 

// 2. 2d모드의 그리기 객체 취득 
const ctx = canvas.getContext("2d"); 

// 3. path 그리기 시작 설정 
ctx.beginPath(); 

// 4. 원 모양 설정 
ctx.arc(100, 75, 50, 0, 2*Math.PI); 

// 5. 그리기 
ctx.stroke(); 

// 6. 원 내부 색 채우기 
ctx.fillStyle = 'blue'; 
ctx.fill();
