document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    commentinput();
    let inputdata = document.getElementById("comment");
    inputdata.value=null;
  }
});

const commentinput = () => {
  let userID;
  if(localStorage.getItem('userid')){
    userID = window.localStorage.getItem('userid');
  }

  let pTag = document.createElement("p");
  let inputdata = document.getElementById("comment").value;
  pTag.innerHTML=`<b>${userID}</b> ${inputdata}`;

  let htmlP = document.getElementsByClassName('commentlist')[0];
  htmlP.appendChild(pTag);
};
