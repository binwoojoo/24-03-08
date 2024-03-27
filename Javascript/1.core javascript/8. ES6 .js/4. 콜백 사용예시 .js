// 정수 n을 전달하면 1~n까지의 모든 짝수를 출력

function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showOddorEvenNumber(n, isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showTripleNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// showEvenNumber(7);
// showOddNumber(7);
// showOddorEvenNumber(7, 0);
// showTripleNumber(17,3);

// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1~n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(100, z => z % 6 === 0 && z % 12 !== 0);

console.log("===========================");

function makeCook(recipeName, recipeCode) {
  console.log("#### 나만의 레시피 ####");
  console.log(`!!! 요리이름: ${recipeName}`);
  // 실제 레시피 출력은 만들어서 전달해주세요
  recipeCode();
  console.log("개꿀맛!!!!!!!!!!!!!!!!!!");
}
makeCook("장독대", () => {
  console.log("1.아리수 팔팔 끼리기");
  console.log("2.대파 양파 손질하기");
  console.log("3.대파 양파 생으로 먹기");
});
