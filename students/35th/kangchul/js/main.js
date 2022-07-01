


// Reply 페이지로 이동.
const postings = document.querySelector(".postings");

postings.addEventListener("click" , (e) => {

    e.target.className==="post" ?
    window.location = './reply.html' :
    window.location = '#';
})


// search bar 검색구현

const searchContainer = document.querySelector(".search__list--container");
const searchInput = document.querySelector(".search");
const searchList = document.querySelectorAll(".search__id");
const searchArray = [...searchList];
const searchWord = document.querySelector(".search__focus");


function searchWordDelete() {
    if (searchInput.value !== "") {
        searchWord.innerHTML ="";
    } else {
        searchWord.innerHTML ="검색";
    }
}

searchInput.addEventListener("focusin", ()=>{
    searchContainer.classList.remove("hidden");
})
searchInput.addEventListener("focusout", ()=>{
    searchContainer.classList.add("hidden");
})



searchInput.addEventListener("input", () => {
    
   searchWordDelete(); 
    const inputValue = searchInput.value;
    searchArray.forEach((element) => {
        if (element.innerHTML.includes(inputValue)) {
            element.parentElement.parentElement.style.display="flex";
        } else {
            element.parentElement.parentElement.style.display ="none";
        }
    })
    

})





// const searchList = document.querySelector(".search__bar--list");
// const searchBar = document.querySelector(".search__bar");

// console.log(searchList)

// searchBar.addEventListener("click", (e) => {
//      searchList.classList.remove("hidden")
// })




// class idList {
//     constructor(id, address="") {
//         this.id = id;
//         this.address = address;
//     }   
// }

// const user1 = new idList("wecode_bootcamp", ">wecode|위코드");
// const user2 = new idList("wecode_student", "이강철 (Kangchul Lee");
// const user3 = new idList("wecode_korea");

//직접 html로 작성하지 않고, class로 인스턴스 생성해서 내용을 넣을 수 있는 방법.
//? 그 뒤로 생성되는 인스턴스들도 array 안으로 들어갈 수 있게 하는 방법?
//인스턴스를 만들면? search__bar list로 들어간다.
//일일히 push 해줘야 하나?







