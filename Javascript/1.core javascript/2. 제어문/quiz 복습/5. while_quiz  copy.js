// 문제1: 두 수를 입력받아 해당 범위의 누적합을 구하세요

var num1 = +prompt("숫자 1")
var num2 = +prompt("숫자 2")
var sum = 0;

while(num1 <= num2) {
  sum += num1
  num1++
}

// for(i = num1; i <= num2; i++){
//   sum += i;
// }

alert(`두 수의 누적합은 ${sum}입니다.`)

