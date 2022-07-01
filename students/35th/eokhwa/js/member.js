
  

  const isSearchMember () {
    let searchVelue = document.querySelector(".search_input").value;

    


    let memberArr = [
        { name: "김정은", imgUrl: "./img/some01.png" },
        { name: "윤석렬", imgUrl: "./img/some01.png" },
        { name: "문재인", imgUrl: "./img/some01.png" },
        { name: "박근혜", imgUrl: "./img/some01.png" },
        { name: "트럼프", imgUrl: "./img/some01.png" },
        { name: "오바마", imgUrl: "./img/some01.png" },
        { name: "푸틴", imgUrl: "./img/some01.png" },
      ];
      



      for (let idx in memberArr) {
        const objInName = memberArr[idx].name;
       
      
        if (objInName.indexOf(searchVelue) === 0) {
          console.log(memberArr[idx]);
        } else {
          console.log("없음");
        }
      }


  }