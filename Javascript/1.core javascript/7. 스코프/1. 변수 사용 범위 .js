var x = 99; // global scope : 전역 변수
var y = true;

function foo() {
  var x = "홍길동"; // local scope : 지역 변수
  console.log(`foo x:${x}`);
  //   var y = '메롱'
  console.log(`foo y:${y}`);
  return x; // 홍길동을 사용하고 싶으면 반드시 내보내줘야함
}

var y = foo(); // 그리고 다른 변수에 저장
foo();
console.log(`x:${x}`);

console.log("===================================");

function outer(m) {
  var n = "outer local n";
  var v = "outer local v";
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수: 바깥쪽 함수 전용함수
  function inner() {
    console.log(n);
    var m = 'inner local m'
    console.log(m);
  }
  inner()
}
outer("outer param m");


