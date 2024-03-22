for (var i = 1; i <= 50; i++) {
  console.log(i);
  if (i > 10) {
    break;
  } 
}

console.log('=================');

// break가 있는 가장 가까운 반복문만 종료됨

grape: for (var i = 0; i < 3; i++) {
apple: for(var j = 0; j < 2; j++) {
    if(i === j) {
      break apple;
    }
    console.log(`${i},${j}`);
  }
}