function getRandomNumber (min, max) {
  let panbyulgee = true;
  while(panbyulgee){
    // 0.01~0.99999
    // Math.random()은 0.1~99.999사이 랜덤수
    let randomNum = Math.random()*10;
    if(randomNum > min && randomNum < max){
      // panbyulgee = false;
      return randomNum;
    }else{
      continue;
    }
  }
}

console.log(getRandomNumber(3,6));