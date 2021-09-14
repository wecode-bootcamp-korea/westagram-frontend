// const a = 1;
// console.log(typeof(a)); //num
// console.log(typeof(String(a))); // string



//[4,9,11,13] ,13

const twoSum = (nums, target) => {
  // 아래 코드를 작성해주세요.
  // for(let num in nums){
  //   console.log(num);
  // }
  
  for(i = 0 ; i < nums.length; i++) {
    for(j = 0; j < nums.length ; j++) {
      if( (nums[i] + nums[j] == target) && (i!==j) ){

        return [i,j]
      }
    }
  }
  
}

console.log(twoSum([[4,9,11,13] ,13]))

