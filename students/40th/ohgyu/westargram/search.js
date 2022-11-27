const navSearch = document.getElementById("navSearch");
let searchSection = document.getElementById("searchSection");

navSearch.addEventListener("input", function () {
  searchFunc();
});

function searchFunc() {
  //검색창 초기화
  const searchSectionUl = searchSection.querySelector("ul");
  const searchSectionLi = searchSectionUl.children;
  let search1 = [...searchSectionLi];
  if (searchSectionLi) {
    search1.forEach((element) => {
      element.remove();
    });
  }

  //검색창 요소 추출
  user.forEach((element) => {
    let searchInput = navSearch.value;
    const userId = element.id;
    const userName = element.name;

    if (
      (searchInput.length > 0 && userId.includes(`${searchInput}`)) ||
      (searchInput.length > 0 && userName.includes(`${searchInput}`))
    ) {
      searchSectionUl.innerHTML += `<li>${element.profile} ${element.id} ${element.name}</li>`;
    }
  });
}
