const userIdArray = [
  {
    id: 1,
    userName: "jiwon.lee",
    userInfo: "안녕하세요ㅋㅋㅋㅋ",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 2,
    userName: "rlawldnjs",
    userInfo: "반가워용",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 3,
    userName: "wecode",
    userInfo: "위코드입니당ㅋ",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 4,
    userName: "hello",
    userInfo: "랄라라라라",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 5,
    userName: "gogogogo",
    userInfo: "gogo!",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 6,
    userName: "byebye",
    userInfo: "안녕히계세요",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 7,
    userName: "jiwon.lee",
    userInfo: "안녕하세요ㅋㅋㅋㅋ",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 8,
    userName: "jojo",
    userInfo: "조조영화",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 9,
    userName: "toto",
    userInfo: "토요일 좋아",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
  {
    id: 10,
    userName: "abcdefghijklmn",
    userInfo: "나는 알파벳",
    img: "https://images.unsplash.com/photo-1580891756752-f163333bfd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
  },
];

// id userName userInfo img

/*

1. input창에 검색
2. 아래에 div 생성
3. div에 일치하는 내용 표시
filter 

*/
const searchedId = document.getElementsByClassName("nav-input-id")[0];

searchedId.addEventListener("keyup", () => {
  console.log(searchedId.value);
  if (searchedId.value.length == 0) {
    const emptyBox = document.createElement("div");
    emptyBox.innerHTML = `<div class="result-box"><div class ="result-box-item">결과가 없습니다</div></div>`;
    body.appendChild(emptyBox);
  } else {
    const seachedResult = userIdArray
      .map((e) => e.userName)
      .filter((e) => e.includes(searchedId.value));

    const searchedResultSetted = seachedResult.map((e) => {
      return `<div class="result-box-item">${e}</div>`;
    });

    console.log(searchedResultSetted);

    console.log(searchedResultSetted.join(""));

    const newResultBox = document.createElement("div");
    newResultBox.className = "result-box";

    newResultBox.innerHTML = searchedResultSetted.join("");
    body.appendChild(newResultBox);
  }
  //   for (i = 0; i < seachedResult.length; i++) {
  //     body.appendChild(
  //       document.createElement("div", { innerHTML: `${seachedResult[]}` })
  //     );
});

// console.log(
//     userIdArray.userName.filter((e) => {
//       e.includes(searchedId.value);
//     })
//   );
