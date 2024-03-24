// 문제2: 입력받은 정수만큼의 기호를 출력하되 + - 가 교차되어 나오도록 하세요

var num = +prompt(`양의 정수 하나를 입력하세요`)
var result = ''
var i = 1;

while(i <= num){
  if(i % 2 === 0){
    result += '-'
  } else result += '+'
  i++
}
alert(result);


