// please check user data in "/main_list_user_data"

const searchBarElement = document.getElementById("searchBarInNav");

const searchSectionElement = document.getElementById("searchSection");

searchBarElement.addEventListener("input", function () {
  createListFunction();
});

function createListFunction() {
  const createSection = document.createElement("ul");
  createSection.style.position = "absolute";
  createSection.style.maxHeight = "200px";
  createSection.style.overflowY = "scroll";
  createSection.style.margin = "0 0 0 -63px";
  createSection.style.padding = "0px";
  createSection.style.backgroundColor = "white";

  searchSectionElement.appendChild(createSection);

  let searchText = searchBarElement.value;
  let result = searchListArr.filter((word) =>
    word["listName"].includes(searchText)
  );
  b();
  function b() {
    result.forEach((element) => a(element));

    //   createSection.remove();

    function a(element) {
      const createList = document.createElement("li");
      createList.style.display = "flex";
      createList.style.alignItems = "center";
      createList.style.padding = "10px 25px";
      createList.style.border = "1px solid rgb(219, 219, 219)";

      // addProfileName();

      const listLayout = `
    <a href="" class="logoOfAuthor" style="background-image: ${element.listImage}; margin-right: 10px"></a>
    <div class="profileOfFriends">
     <a href="" class="nameOfFriends listName">${element.listName}</a>
     <a href="" class="textOfFriends">${element.listRealName}</a>
    </div>`;

      createList.innerHTML = listLayout;
      createSection.appendChild(createList);
    }
  }
  searchBarElement.addEventListener("keydown", function () {
    createSection.remove();
  });
}
