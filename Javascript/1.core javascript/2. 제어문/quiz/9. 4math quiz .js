var game = 1;
var win = 0;
var lose = 0;
const levelHigh = 1, levelMid = 2, levelLow = 3;
level = +prompt('난이도를 선택하세요\n1.난이도 상(1~100) 2.난이도 중(1~50) 3.난이도 하(1~20')

while(true) {
  if(level === levelHigh){
  var secret1 = Math.floor(Math.random() * 100) + 1;
  var secret2 = Math.floor(Math.random() * 100) + 1;
  }
  else if(level === levelMid){
    var secret1 = Math.floor(Math.random() * 50) + 1;
    var secret2 = Math.floor(Math.random() * 50) + 1;
    }
    else if(level === levelLow){
      var secret1 = Math.floor(Math.random() * 20) + 1;
      var secret2 = Math.floor(Math.random() * 20) + 1;
      }
  // - x 경우의 수 만들기 

  var answer = +prompt(`문제를 풀다가 지겨우면 0을 누르세요ㅋㅋ\nQ${game}. ${secret1} + ${secret2} = ??` )

  if(secret1 + secret2 === answer) {
    alert('정답입니다'); game++; win++;
  } 
  else if(secret1 + secret2 !== answer && answer !== 0) {
    alert('오답입니다'); game++; lose++;
  }

  if(answer === 0) {
    alert(`ㄲㅈ\n정답 횟수: ${win} 오답 횟수:${lose}\n게임 종료`); break 
  }

}
