
// js는 정수나눗셈이여도 실수 결과값이 나온다.
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);
// 뒤에 숫자가 더 크면 앞의 숫자가 그대로 나머지다.
console.log(4 % 10);
// 0 나눗셈 불가
console.log(5 % 0);
// 나머지 항상 0
console.log(0 % 5);


// 제곱 연산
console.log(3 ** 4);

// 증감 연산자
var x = 3;
x++;
++x;
x--;
--x;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++; // n1을 n2에 먼저 대입하고 ++을 계산한다.
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3; // ++을 먼저 계산하고 n4에 대입한다.
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
xx++;
xx += 1;  // xx = xx + 1; 연산자가 많아서 계산이 더 느림

xx--;
xx -= 1;  //xx = xx - 1;

xx *= 3; // 15
xx /= 5; // 3
xx **= 2; // 9
xx %= 4; // 1

console.log(`xx: ${xx}`);