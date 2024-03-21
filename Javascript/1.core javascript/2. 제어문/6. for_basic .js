
var i = 1; /* begin */

while (i <= 5 /* end */) {
  console.log('hello'); /* execute*/
  i++ /* step */
}
// 횟수를 알수없을 때 유리

//      1         2      4
for(var i = 1; i <= 5 ; i++) {
  console.log('안녕하세요');
//           3
}
// 횟수가 정해져있을 때 유리
// 증감식은 마지막에 실행 1-2-3-4-2-3-4-2-3-4-2-3-4

var total = 0

for(i = 1; i <= 10; i++){
   total += i
}
console.log(total);

// 횟수 지정 반복문
for (var i = 0; i < 5; i++) {
  console.log('ㅗㅗㅗ');
}