const twoSum = (nums, target) => {
  // 아래 코드를 작성해주세요.
  let idx = [];

  for(i = 0 ; i< nums.length ; i++){
    for(j = i + 1 ; j < nums.length ; j++){
      if(nums[i] + nums[j] == target){
        idx.push(i,j);
        // idx.push(j);
        // console.log(i)
        return idx;
      }
    }
  }
}

console.log(twoSum( [4,9,11,14], 13 ));

// forEach 로 변경'