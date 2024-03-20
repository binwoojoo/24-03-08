var num1 = +prompt('정수 A');
var num2 = +prompt('정수 B');
var num3 = +prompt('정수 C');

if (num1 <= num2 && num1 <= num3) {
  alert(`최소값은 ${num1}입니다`);
} else if (num2 <= num1 && num2 <= num3) {
  alert(`최소값은 ${num2}입니다`);
} else if (num3 <= num1 && num3 <= num2) {
  alert(`최소값은 ${num3}입니다`);
}