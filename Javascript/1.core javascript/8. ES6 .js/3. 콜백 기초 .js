// 어떤 계산을 하는 함수
function operate(param) {
  console.log(`param:${param}`);

  console.log("계산기 작동ㅋ");
  const n1 = 10;
  n2 = 20;
  const result = param(n1, n2);
  //   const result = n1 + n2;
  return result;
}

function add(n1, n2) {
  return n1 + n2;
}

const result = operate(function (n1, n2) {
  return ++n2;
});

console.log(`result:${result}`);
