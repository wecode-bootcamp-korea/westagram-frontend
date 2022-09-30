let userArr = [
  { id: "tjdtnxkrmfoa" },
  { id: "WeCode" },
  { id: "Instagram" },
  { id: "Holywater" },
  { id: "JustCode" },
];

const searchInput = document.querySelector("header>input");
const searchBar = document.getElementById("searchBar");
let newarr = [];

function search() {
  if (searchInput.value != "") {
    newarr = userArr.filter((item) => item.id.includes(`${searchInput.value}`));
  } else {
    newarr = [];
  }
  paintSearchList();
}

function paintSearchList() {
  searchBar.innerHTML = "";
  newarr.map((item) => {
    let li = document.createElement("li");
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    span1.innerText = `${item.id}`;
    span2.classList.add("userImg");

    searchBar.appendChild(li);

    li.appendChild(span2);
    li.appendChild(span1);
  });
}

function searchbarShow() {
  searchBar.classList.remove("displaynone");
}
function searchBarHidden() {
  searchBar.classList.add("displaynone");
}
searchInput.addEventListener("input", search);
searchInput.addEventListener("focus", searchbarShow);
searchInput.addEventListener("blur", searchBarHidden);
