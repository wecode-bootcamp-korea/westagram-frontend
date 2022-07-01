a.addEventListener('keyup', () => {
  let searchVelue = document.querySelector(".search_input").value;
  let searchTargets = document.querySelector(".search_target"); 


// console.log(searchVelue)

    for (let idx in memberArr) {
      const objInName = memberArr[idx].name;
      const objInImg = memberArr[idx].imgUrl;
     
      let searchResult = ``;
      if (objInName.indexOf(searchVelue) === 0) {
        searchResult += searchTargets.innerHTML = `
          <div class="search_article">
              <div class='my_photo'>
                  <img src='${objInImg}'>
              </div>
              <div class='my_name'>${memberArr[idx].name}</div>
          </div>`
          
         
          
      } else {

          console.log("없음")
      }
    }





});
