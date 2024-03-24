var a = +prompt("정수 A")  // 3
var b = +prompt("정수 B")  // 2
var c = +prompt("정수 C")  // 1

var min = a; // 3

if(b < min) min = b;
if(c < min) min = c;

alert(`최소값은 ${min}입니다`)
