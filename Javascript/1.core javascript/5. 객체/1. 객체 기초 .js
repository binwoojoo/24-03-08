// 객체 생성
// 우리 집 강아지 정보 저장

var name = "뽀삐";
var kind = "진돗개";
var age = 3;
var injection = true;
var favorite = ["산책", "간식"];
var bark = () => console.log("왈왈");


var dog = {
  name: "뽀삐",
  kind: "진돗개",
  age: 3,
  injection: true,
  favorite: ["산책", "간식"],
  bark: () => console.log("왈왈"),
};

console.log(dog.age);

// 우리 집 고양이 정보 저장

var cat = {
    name: "형배",
    kind: "코숏",
    age: 2,
    injection: true,
    favorite: ["낮잠", "지랄 떨기"],
    bark: () => console.log("냐엉"),
    hate: null
  };

  console.log(cat.name);

  console.log('==========================');

  // 객체에 저장된 데이터 참조(조회)

console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]);

// 데이터 타입: 어떤 데이터가 할 수 있는 일을 정의

dog.age++;
!dog.injection;
dog.favorite.push('똥 싸기');
cat.favorite.splice(0, 1);
dog.favorite.splice(1, 1);
dog.favorite.reverse();

console.log(dog.favorite);

console.log('===========================');
// 객체를 참조하는 두번째 방법

var key = 'name'
console.log(dog.name);
console.log(dog['name']);
console.log(dog[key]);

console.log('==========================');
// 프로퍼티 수정 (기존에 있는 key로 접근)

dog.age = 4;
cat.favorite[1] = '실뭉치';

console.log(dog);
console.log(cat);

console.log('=========================');
// 프로퍼티 동적 추가

cat.friend = '철수'

console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);