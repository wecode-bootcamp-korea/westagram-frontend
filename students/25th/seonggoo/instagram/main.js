let more = document.querySelector(".more");

const a = function toggleClass(){
  document.querySelector("#lines2").classList.toggle("lines2");
  // document.querySelector(".more").innerHTML = "내리기";
}
more.addEventListener("click", a)

////////////////// 팔로우, 팔로우 취소 /////////////////

let followBtn = document.querySelector(".follow");
console.log(followBtn.innerHTML);
followBtn.addEventListener('click', myFunction);

function myFunction() {
  if (followBtn.innerHTML === "팔로우") {
    followBtn.innerHTML = "팔로우 취소!";
  } else {
    followBtn.innerHTML = "팔로우";
  }
}

// ///////////// 댓글 달기 /////////////////////


let applyBtn = document.querySelector('#button');
// let writeHere = document.querySelector('.writeSomething');
let commentBox = document.querySelector('.commentBox');
// let p = document.createElement('p'); //태그 생성
// let newBox = document.createElement('div');

// let newArray = []; // 전역변수
// let value;



// writeHere.value = difjdifj




let sentence = [
                {"id":1,"fruit":"사과"},
                {"id":2,"fruit":"바나나"},
                {"id":3,"fruit":"메론"}
               ];
// console.log(arr[arr.length-1].id);


// console.log(arr1);
//commentBox.append(arr1);
// console.log(commentBox);


// type="submit"의 부모로 form을 감싸야하는건가?
// 배열에 객체 추가하는 법 : push

let arr = [
           { "id" : 1, "reply" : "댓글1"},
           { "id" : 2, "reply" : "댓글2"},
           { "id" : 3, "reply" : "댓글3"}
          ];
// console.log(Object.assign({},['a','b','c'])); 
// str -> 배열 -> 객체
// split써서 '배열화'
// Object.assign 써서 '객체화'
// writeHere.addEventListener("keyup", (e) => {
//   arr.push(e.target.value);
//   arr.map((item, i) => {
//     // console.log(i);
//   });
// });

let cnt = 1;
// applyBtn.addEventListener("click", () => {
//   let temp = document.createElement('div');
//   temp.setAttribute('class','list-group-item');
//   temp.setAttribute('id','li'+cnt);
//   temp.innerHTML = input.value;
//   temp.innerHTML += "<button style='float: right;'  type='button' onclick='remove("+cnt+")'>삭제</button>";
//   commentBox.appendChild(temp);
//   cnt++;
//   input.value = '';


//   let arr1 = newComment.map((item, i) => {
//     let div = document.createElement('div');
//     div.innerHTML = item.reply;
//     newComment.push(div.innerHTML);
//     commentBox.appendChild(newComment);
//     return commentBox;
//   });
    
//   commentBox.value = p.innerHTML;
//   commentBox.classList.add("commentBoxShow");
//   writeHere.value = ''; // 댓글 view clear
// })

let button = document.getElementById('button');
let input = document.getElementById('input');
let list = document.getElementById('list'); // 꽂아 넣을 리스트 한개
// let cnt = 1;
// form type='submit'으로 바꿔서 엔터키와 클릭을 댓글 입력 가능하게 바꾸기
input.addEventListener('keyup', () => {
  button.disabled = false;
  button.style.opacity = 1;
  button.style.color = "red";
});

button.addEventListener('click', clickButton);
button.addEventListener('keypress', enter);

function clickButton() {
  let temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right' type='button' onclick='remove("+cnt+")'>삭제</button>";
  list.appendChild(temp);
  cnt++;
  input.value = '';
  button.disabled = true;
  button.style.opacity = 0.3;
  button.style.color = "black";
}

console.log(input.value);
function enter(event){
  if(event.key == 'Enter'){
    let temp = document.createElement('li');
    temp.setAttribute('class', 'list-group-item');
    temp.setAttribute('id', 'li'+cnt);
    temp.innerHTML = input.value;
    list.appendChild(temp);
    cnt++;
    input.value = '';
    
  }
}

function remove(cnt) {
  let li = document.getElementById('li'+cnt);
  list.removeChild(li);
}