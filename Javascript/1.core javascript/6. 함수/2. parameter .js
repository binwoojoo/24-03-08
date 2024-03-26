// x부터 y까지의 누적합을 구해야함

// 1~10
function calRangeTotal(x, y) {
  var total = 0;
  for (var i = x; i <= y; i++) {
    total += i;
  }
  return total;
}
var result1 = calRangeTotal(1, 10);
console.log(result1);

var result2 = calRangeTotal(4, 7);
console.log(result2);

// 매개변수의 기본값
function sayHello(language = "한국어") {
  //language = language || "한국어";   ES5문법

  switch (language) {
    case "한국어":
      console.log("안녕하세요");
      break;
    case "영어":
      console.log("hello");
      break;
    case "일본어":
      console.log("곤니찌와");
      break;
    default:
      console.log("우가우가");
  }
}
sayHello();

// 매개변수가 없는 함수
function selectRandomPet() {
  var pets = ["멍멍이", "야옹이", "낑낑이", "고라니", "노루"];
  var rn = Math.floor(Math.random() * pets.length);
  return pets[rn];
}

var r1 = selectRandomPet();
var r2 = selectRandomPet();
var r3 = selectRandomPet();
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);
