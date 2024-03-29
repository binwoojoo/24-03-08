// 자바스크립트의 함수는 함수를 리턴할 수 있음

function calculator(a) {
  return function (n1, n2) {
    return n1 + n2;
  };
}

const x = calculator();
console.log(typeof x);
const y = x(10, 20);
console.log(`y:${y}`);

console.log("============================");

const z = calculator()(6, 9);
console.log(`z:${z}`);

const operate = () => (n1, n2) => n1 * n2;
const k = operate();
const m = k(3, 5);
console.log(`m:${m}`);

console.log("=============================");

function bar() {
  function fas() {
    return 10;
  }
  return fas;
}

const h = bar()();

console.log(h);

console.log("=============================");

// 카운트를 증가시키는 함수

// let count = 0; // 전역 변수

// const increase = () => count++;

// console.log(increase());
// console.log(increase());
// count = 999;
// console.log(increase()); // ??
// console.log(`count: ${count}`);

// const increase = () => {
//     let count = 0;
//     return ++count;
// };

// increase();
// increase();
// const count = increase();
// console.log(`count: ${count}`);

// 클로저를 통해서 지역변수의 스코프를 늘려줄 수 있다.
const increaseCloser = () => {
  let count = 0; // 지역변수

  return () => ++count;
};

const increase = increaseCloser();

console.log(increase());
console.log(increase());
count = 999;
console.log(increase());

// 즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수

(function () {
  console.log("Hello");
})();

const incCloser = () => {
  let count = 0;
  return () => count++;
};

const increase_ = (() => {
  let count = 0;
  return () => count++;
})();

increase_();
increase_();
increase_();

