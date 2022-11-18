const navSearch = document.getElementById("navSearch");
let searchSection = document.getElementById("searchSection");

function test1() {
  user.forEach((element) => {
    console.log(
      `id :${element.id} name :${element.name} profile :${element.profile}`
    );
    searchSection.innerHTML += `<li>id :${element.id} name :${element.name} profile :${element.profile}</li>`;
  });
}

navSearch.addEventListener("input", function () {
  test1();
});
