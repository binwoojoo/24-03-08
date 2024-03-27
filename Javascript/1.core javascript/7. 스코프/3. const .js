let x;
x = "zz";
x = "gg";
console.log(x);

// const : 상수 선언
const y = "메롱";
y = "qq";
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = "#0f0";
/*
    $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성을 유지할 수 있다.

const kim = {
  name: "김철수",
  age: 30,
};
kim.age = 31;
kim.name = "마이클 킴";

// kim = {
//     name : '김철수',
//     age : 30
// };

// 배열도 객체의 일부이다.
const array = {
  0: "z",
  1: "dd",
  2: "ff",
  length: 3,
};

const username = 'qt' // 무지성 const 이후 바꿔야하면 let으로 바꾸자

