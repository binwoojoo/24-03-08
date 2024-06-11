// this를 조작하는 메서드

const kim = {
  name: "김철수",
  age: "33",
};

const park = {
  name: "박영희",
  age: "76",
};

function sayHello(lang1, lang2) {
  console.log("this: ", this);
  console.log(`hello i am ${this.name},
  i can speak ${lang1} and ${lang2}`);
}

// call: this를 조작하기 위한 메서드
// param1: 조작할 this를 전달
// ...param2: 원래 해당 함수가 받아야할 파라미터를 전달
// sayHello('Korean', 'English');
sayHello.call(kim, "Spanish", "Japanese");
sayHello.call(park, "Korean", "English");

console.log("==================================");

// apply: call이랑 같음, 다만 param2를 배열로 묶어서 전달
sayHello.apply(kim, ["한국어", "영어"]);

console.log("==================================");

// bind: call, apply와 같으나
// 함수를 바로 실행시키지 않고, this를 조작한 새로운 함수를 반환
const newSayHello = sayHello.bind(kim, "중국어", "힌두어");

newSayHello();

// bind 실제 사용 예시
const clickHandler = function (fruitname, e) {
  console.log("event객체: ", e);
  console.log("this: ", this);
  this.style.background = "red";
  console.log("전달한 과일명: ", fruitname);
};

const $input = document.getElementById("fruit");
const $btn = document.getElementById("btn");

const bindedClickHandler = clickHandler.bind($btn, "레몬");

// $btn.addEventListener("click", clickHandler.bind($input));
// 이벤트 핸들러에 추가 파라미터 전달
// $btn.addEventListener("click", clickHandler.bind($btn, "사과"));

// $btn.addEventListener("click", bindedClickHandler);

$btn.addEventListener(
  "click",
  function (name, e) {
    console.log("이름: ", name);
  }.bind($btn, "김무옥")
);
