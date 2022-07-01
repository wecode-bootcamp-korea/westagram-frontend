const writeBtn = document.getElementById('writeBtn');
const profile = document.querySelector(".navProfile");
const profileMenu = document.querySelector(".navProfileMenu");

document.addEventListener('keydown', function(event) {
  event.key==='Enter' ? commentinput() : false;
});



function commentinput() {
  let userID = localStorage.getItem('userid') ? window.localStorage.getItem('userid') : false;
  let pTag = document.createElement("p");
  let inputdata = document.getElementById("comment").value;
  let htmlP = document.getElementsByClassName('commentlist')[0];

  pTag.innerHTML=`<b>${userID}</b> ${inputdata}` + "<img src='img/heart.png' class='heart'/>" + "<button type='button' class='deleteBtn'>삭제</button>";
  htmlP.appendChild(pTag);
  document.getElementById("comment").value = null;
};

writeBtn.addEventListener("click", function(event) {
  commentinput();
});



document.body.addEventListener('click', function (event) {

    if (event.target.className == "heart") {
          event.target.className = "redheart";
          event.target.setAttribute("src", "img/redheart.png");
    }
    else if(event.target.className == "redheart") {
          event.target.className = "heart";
          event.target.setAttribute("src", "img/heart.png");
    }

    if(event.target.className == "deleteBtn") {
      event.target.parentElement.remove();
    }

    if(event.target.classList.contains('mainSearch')){
      relContainer.classList.remove("hide");
    } else relContainer.classList.add("hide");


    if(!event.target.classList.contains('navProfile')){
      profileMenu.classList.add("hide");
    }

}, false);




const ul = document.querySelector(".pop_rel_keywords");
const searchInput = document.querySelector(".mainSearch");
const relContainer = document.querySelector(".rel_search");


searchInput.addEventListener('keyup', function(event) {
   if(searchInput.value !== "") {
    relContainer.classList.remove("hide");
    loadData(searchInput.value);
  }
  //else {
  //  relContainer.classList.add("hide");
  //}

});

function loadData(searchinput) {
  const idlist = ['wecode_bootcamp', 'wecode_korea', 'wecode_japan', 'kwangheekim', 'USA', 'apple', 'banana', 'kiwi'];
  const result = idlist.filter(function(element) {
    return element.includes(searchinput);
  });
  fillSearch(result);
}

function fillSearch(result) {
  ul.innerHTML = "";
  result.forEach(function(element) {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
}



profile.addEventListener("click", function(event) {
  profileMenu.classList.remove("hide");
});
