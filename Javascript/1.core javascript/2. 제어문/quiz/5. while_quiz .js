
// var a = +prompt('정수 A')
// var b = +prompt('정수 B')

// var  total = 0;

// while (a <= b) {
//   total += a
//   a++
// }
// alert(`누적합은 ${total}입니다`);


var num = +prompt(`숫자를 입력하세요`);
var i = 1;
var p = '+';
var m = '-';
var total = '';

while(i <= num) {
  if(i % 2 === 0){
    total += m;
  } 
  else {total += p;}
  i++
}
alert(total);