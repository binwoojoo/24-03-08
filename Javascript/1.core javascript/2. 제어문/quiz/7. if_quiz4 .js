var num1 = +prompt('정수 A');
var num2 = +prompt('정수 B');
var num3 = +prompt('정수 C');

// if (num1 <= num2 && num1 <= num3) {
//   alert(`최소값은 ${num1}입니다`);
// } else if (num2 <= num1 && num2 <= num3) {
//   alert(`최소값은 ${num2}입니다`);
// } else if (num3 <= num1 && num3 <= num2) {
//   alert(`최소값은 ${num3}입니다`);
// }


// min : 최소값을 저장해 놓을 변수
var min = num1;                    //  num1: 9 ,  num2: 77,  num3: 99
if (num2 < min) min = num2;           //  min : 9
if (num3 < min) min = num3;

alert(`최소값은 ${min}입니다.`);