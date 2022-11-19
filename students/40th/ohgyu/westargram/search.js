const navSearch = document.getElementById("navSearch");
let searchSection = document.getElementById("searchSection");

navSearch.addEventListener("input", function () {
  test4();
});

function test3() {
  const searchSectionUl = searchSection.querySelector("ul");
  const searchSectionLi = searchSectionUl.children;
  let search1 = [...searchSectionLi];
  if (searchSectionLi) {
    // console.log("ul있음");
    // console.log(searchSectionLi);
    // console.log(search1);
    search1.forEach((element) => {
      element.remove();
    });
  }
  user.forEach((element) => {
    let searchInput = navSearch.value;
    const userId = element.id;
    if (searchInput.length > 0 && userId.includes(`${searchInput}`)) {
      // console.log(searchInput);
      // console.log(element.id);
      searchSectionUl.innerHTML += `<li>${element.id} ${element.name}</li>`;
    }
  });
}

function test4() {
  const searchSectionUl = searchSection.querySelector("ul");
  const searchSectionLi = searchSectionUl.children;
  let search1 = [...searchSectionLi];
  if (searchSectionLi) {
    // console.log("ul있음");
    // console.log(searchSectionLi);
    // console.log(search1);
    search1.forEach((element) => {
      element.remove();
    });
  }
  user.forEach((element) => {
    let searchInput = navSearch.value;
    const userId = element.id;
    const userName = element.name;

    if (searchInput.length > 0 && userId.includes(`${searchInput}`)) {
      // console.log(searchInput);
      // console.log(element.id);
      searchSectionUl.innerHTML += `<li>${element.id} ${element.name}</li>`;
    }

    if (searchInput.length > 0 && userName.includes(`${searchInput}`)) {
      searchSectionUl.innerHTML += `<li>${element.id} ${element.name}</li>`;
    }
  });
}
