// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력

// var max = +prompt('양의 정수를 입력하세요.')
// var result = ''

// for(i = 1; 2**i <= max; i++){
//   result += `${2**i} `;
// }
// alert(result);

// var n = +prompt('양의 정수를 입력하세요.'); 

// // 제곱수를 누적한 변수
// var accum = '';

// for (var i = 2; i <= n; i *= 2) {
//   accum += `${i} `;
// }
// alert(accum);


// 문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력

var max = +prompt('양의 정수를 입력하세요.')
var result = ''
var count = 0

for(i = 1; i <= max; i++) {
  if(max % i === 0){
    result += `${i}\n`
    count++;
  }
}
result += `약수의 개수 ${count}개`;
alert(result);