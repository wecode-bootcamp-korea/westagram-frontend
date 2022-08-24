function getData(salesArr, reviewArr, likeArr) {
  let sale = 0;
  let review = 0;
  let like = 0;

  for (let i = 0; i < salesArr.length; i++) {
    sale += salesArr[i][1];
  }
 
  for (let i = 0; i < reviewArr.length; i++) {
    review += reviewArr[i][1];
  }

  for (let i = 0; i < likeArr.length; i++) {
    like += likeArr[i][1];
  }
  let obj = {
    sumAmount: sale,
    sumReview: review,
    sumLike: like
  };
  return obj;
}

let sArr = [["20190401", 34], ["20190402", 23], ["20190403", 29]];
let rArr = [["20190328", 3], ["20190401", 0], ["20190403", 1]];
let lArr = [["20190328", 98], ["20190401", 102], ["20190403", 125]];

console.log(getData(sArr, rArr, lArr));
