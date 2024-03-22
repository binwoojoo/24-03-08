
// 1~100 사이의 랜덤정수
// for (;;) === 무한 루프

while (true) {
  var random = Math.floor(Math.random() * 10) + 1;
  console.log('hello');
  if(random === 7) {
    break;
  }
}