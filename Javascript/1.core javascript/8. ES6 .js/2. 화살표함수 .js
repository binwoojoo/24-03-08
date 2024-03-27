// 함수 선언문
// function add(n1, n2) {
//   return n1 + n2;
// }

// 함수 표현식
// const add = function (n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수
const add = (n1, n2) => n1 + n2;

const r1 = add(10, 30);
console.log(`r1:${r1}`);

const sayHello = () => console.log("Hello"); // 한줄 일때만 중괄호 제거

sayHello();

const kim = {
  name: "김철수",
  greeting: sayHello,
  dance: () => console.log("춤추기"),
};

kim.dance();
kim.greeting();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow 작성해보세요.
const pow = n => n ** 2; // 파라미터가 1개 일 경우만 소괄호 생략 가능

console.log(pow(4));
