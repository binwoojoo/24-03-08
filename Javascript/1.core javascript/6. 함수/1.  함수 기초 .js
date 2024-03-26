// console.log('김철수님 안녕하세요!!!');
// console.log('오늘도 즐거운 하루되세요ㅋ');

// 코드 1000000000000줄.............

// 함수 정의
function sayHello(userName) {
  console.log(`${userName}님 ㅎㅇ!!!`);
  console.log(`오늘도 즐거운 하루되세요ㅋ`);
}

// 함수 호출 (사용한다)
sayHello(`둘리`);
sayHello(`뽀로로`);
sayHello(`김두한`);
sayHello(`김뚜깡`);

function makeline() {
  console.log("============================");
}

sayHello("a");
makeline();
sayHello("a");
makeline();
sayHello("a");

// 나의 프로그램에서는 원의 넓이를 자주 구함
const PI = 3.14159265;

// 반지름이 r인 원의 넓이
function calAreaCircle(r) {
  return PI * r ** 2;
}

// 반지름이 5인 원의 넓이
var circle = calAreaCircle(5);
console.log(circle);

var circle2 = calAreaCircle(15);
console.log(circle2);

// 게시글을 삭제하는 함수
function removeBoardArticle() {}
