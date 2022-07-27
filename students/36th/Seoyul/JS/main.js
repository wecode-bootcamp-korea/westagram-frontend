const submitbtn = document.querySelector(".submit");
let ptag = document.createElement('p');
const search = document.querySelector('.header_search');
// function currenTtime (){
//   let now = new Date();
//   const min =now.getMinutes();
//   ptag.innerHTML = `${min}분 전`
// }
 


 
function addComment(e) {
  e.preventDefault();
  let inputbox = document.querySelector(".commentinputbox");
  let divv = document.querySelector(".comment_list");
  let newdiv = document.createElement("div");
  let img = document.createElement("img");
  newdiv.classList.add("discription");
  let newstrong = document.createElement("strong");
  let newspan = document.createElement("span");

  newstrong.innerHTML = "ID ";
  newspan.innerHTML = `&nbsp${inputbox.value}`;

  divv.appendChild(newdiv);
  img.setAttribute('src',"https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg")
  img.classList.add("joayo");
  newdiv.append(newstrong, newspan, img);

  inputbox.value=""
  

  // currenTtime();
  // setInterval(currenTtime,1000)
  // divv.appendChild(ptag)
}
submitbtn.addEventListener("click", addComment);



function removetext () {
  search.innerHTML =""
}

search.addEventListener("click", removetext);