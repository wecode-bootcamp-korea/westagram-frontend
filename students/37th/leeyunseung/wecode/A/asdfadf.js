function removeGerm(arr) {
    // 여기에 코드를 작성해주세요!
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      let subresult = [];
      for (let j = 0; j < arr[i].length; j++) {
        // console.log(arr[i][j]);
        if (arr[i][j] === '곰팡이') {
            continue;
        }
        // console.log(arr[i][j]);
        subresult.push(arr[i][j]);
      } 
    //   console.log(arr[i]); 
      result.push(subresult);
    }
    // console.log(result);
    return result;
  }

  let basket = [['양파', '곰팡이'], ['곰팡이', '빵', '딸기잼'], ['귤', '곰팡이', '사과']];
  console.log(removeGerm(basket));
  
  module.exports = { removeGerm }