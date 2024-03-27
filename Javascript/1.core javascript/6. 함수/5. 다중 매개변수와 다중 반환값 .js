function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// 만약 n개 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다

function addAll(numbers, others) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

// ES6 - spread 문법
function addAlles6(x, y, ...numbers) {
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

var r1 = addAll([5, 9, 2], [1, 6, 2]);
console.log(r1);

var r2 = addAlles6(10, 20, 30, 40, 50);
console.log(r2);

console.log("==============================");

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
function operate(n1, n2) {
  //   var addResult = n1 + n2;
  //   var subResult = n1 - n2; 변수는 2회 이상 사용할때만 유용하다 리턴값에 지정
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  return {
    add: add2(n1, n2),
    sub: n1 - n2,
    multi: multiResult,
    div: divResult,
  };
}
// 객체 형식으로 사용하면 순서가 바뀌어도 상관없음
var r3 = operate(20, 10);
console.log(`덧셈결과:${r3.add}`);
console.log(`뺄셈결과:${r3.sub}`);
console.log(`곱셈결과:${r3.multi}`);
console.log(`나눗셈결과:${r3.div}`);

var r4 = operate(5, 3).multi; // 리턴값이 객체이기떄문에 사용가능
console.log(r4);
