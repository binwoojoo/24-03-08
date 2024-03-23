// 무한히 바뀌어야하는 값과 정해져있는 값을 정확히 구분하기!!

var level = +prompt
  (`사칙 연산 게임\n난이도를 선택하세요. 1. 상(1~100) 2. 중(1~50) 3. 하(1~20)`);
var game = 1;
var win = 0;
var lose = 0;
var maxnum;

if(level === 1) {
  maxnum = 100; 
} else if(level === 2) {
  maxnum = 50;
} else if(level === 3){
  maxnum = 20;
} else {
  alert(`난이도를 설정하지않아 Max 난이도로 실행됩니다.`)
  maxnum = 9999
}

while(true) {
  var num1 = Math.floor(Math.random() * maxnum) + 1,
      num2 = Math.floor(Math.random() * maxnum) + 1;
      if(num1 - num2 === 0) {
        continue
      }
  var markNum = Math.floor(Math.random() * 3) + 1;
  var mark = '';
  var rightAnswer;
      if(markNum === 1) {
        mark = '+';
        rightAnswer = num1 + num2;
      } else if(markNum === 2) {
        mark = '-';
        rightAnswer = num1 - num2;
      } else { 
        mark = 'x'
        rightAnswer = num1 * num2 
      } 

  var userAnswer = +prompt(`문제를 풀다가 지겨우면 0을 입력하세요.\nQ${game}. ${num1} ${mark} ${num2} = ??`);

  if (rightAnswer === userAnswer) {
    alert('정답입니다'); game++; win++;
  } else if (rightAnswer !== userAnswer && userAnswer !== 0) {
    alert('오답입니다'); game++; lose++;
  } else if (userAnswer === 0) {
    alert(`게임 종료\n정답: ${win} 오답: ${lose}`); break;
  }
}