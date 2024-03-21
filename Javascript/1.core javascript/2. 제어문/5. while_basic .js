// 10!! ~ 0!! 출력하기
// 조건이 참일 '동안' 반복

var begin = 10, end = 0, step = 1;

var n = 10;

while (n >= 0) {
console.log(`${n}!!`);
n -= 1;
}

console.log('==================');

// 구구단 2단 출력하기
var level = 2;
var n = 1;

while (n <= 9) {
console.log(`${level} x ${n} = ${level * n}`);
n++
}

console.log('==================');

// 10~34까지의 정수를 홀수만 출력

var m = 10; //begin

while (m <= 34) {
  if (m % 2 === 1) {
  console.log(m);
  }
  m++
}

console.log('==================');

// 1~10 까지의 누적합

var total = 0;
var i = 1;

while (i <= 10) {
  total += i
  i++
}
console.log(total);
