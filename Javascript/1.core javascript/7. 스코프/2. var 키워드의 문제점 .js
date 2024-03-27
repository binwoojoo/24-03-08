// 1. 변수의 중복 선언을 암묵적으로 허용
// let x = 10;

//.............12만줄

// var x = "ddd";
// let x = 'ddd';
// console.log(`x:${x}`);

// 2. 블록 레벨 스코프를 지원하지 않음

let i = "메롱";

for (let i = 0; i < 3; i++) {
  console.log(`for-i:${i}`);
}

console.log(`global-i: ${i}`);

// 3. 호이스팅 : 선언위치와 관계없이 참조가능함
hobby = '댄스';

//......................code

var hobby; // 지정을 늦게 해도 참조 해버림

console.log(hobby);