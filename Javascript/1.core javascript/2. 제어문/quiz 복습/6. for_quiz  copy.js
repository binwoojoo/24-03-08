// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력
var result = ''
var num = 25; // 2 4 8

for(i = 1; i <= num; i++) {
  if(2**i < num) {
    result += `${2**i} `
  }
}

console.log(result);

// 문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력
var result = '';
var count = 0;
var num = 27; // 1 2 3 4 6 8 12 24

for(i = 1; i <= num; i++) {
  if(num % i === 0) {
    result += `${i} `;
    count++;
  }
}
console.log(`${result} 약수의 갯수는 ${count}개`);

