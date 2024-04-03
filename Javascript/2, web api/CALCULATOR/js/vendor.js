// 프로그램 전체에서 사용할 전역적인 변수와 상수를 정의
const $userInput = document.getElementById("input-number");
const $addBtn = document.getElementById("btn-add");
const $subtractBtn = document.getElementById("btn-subtract");
const $multiplyBtn = document.getElementById("btn-multiply");
const $divideBtn = document.getElementById("btn-divide");
const $ulBox = document.querySelector(".log-entries");
// result 요소노드
const $currentResult = document.getElementById("current-result");

// 계산 로그 요소노드
const $currentCalculation = document.getElementById("current-calculation");

// result에 그려질 숫자
let currentResult = 0;

//======================함수 정의 영역=======================//

const calculate = (clicked) => {
  // 더하기를 해라

  if (clicked.id === "btn-add") {
    // 계산 전 값을 백엄
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야 함.
    const enteredNumber = +$userInput.value;
    // 2. 결과에 누적
    currentResult += enteredNumber;
    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} + ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    const $newLi = document.createElement("li");
    $newLi.textContent = descriptionLog;
    $ulBox.appendChild($newLi);
  }
  // 빼기 일때
  else if (clicked.id === "btn-subtract") {
    // 이전 결과를 저장
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어옴
    const enteredNumber = +$userInput.value;
    // 2. 결과에 누적
    currentResult = prevResult - enteredNumber; // 이전 결과에서 입력한 숫자를 빼서 새로운 결과를 계산
    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} - ${enteredNumber} = ${currentResult}`; // 계산 과정을 설명하는 문자열 생성
    $currentCalculation.textContent = descriptionLog;
    $userInput.value = "";
    const $newLi = document.createElement("li");
    $newLi.textContent = descriptionLog;
    $ulBox.appendChild($newLi);
  }
  // 곱하기 일때
  else if (clicked.id === "btn-multiply") {
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함
    const enteredNumber = +$userInput.value;
    // 2. 결과에 누적
    currentResult *= enteredNumber;
    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} x ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    $userInput.value = "";
    const $newLi = document.createElement("li");
    $newLi.textContent = descriptionLog;
    $ulBox.appendChild($newLi);
  }
  // 나누기 일때
  else if (clicked.id === "btn-divide") {
    const prevResult = currentResult;
    // 1. 입력창에 입력한 숫자를 읽어와야함
    const enteredNumber = +$userInput.value;
    // 2. 결과에 누적
    currentResult /= enteredNumber;
    // 3. 화면에 렌더링
    $currentResult.textContent = currentResult;
    // 계산 로그 생성
    const descriptionLog = `${prevResult} / ${enteredNumber} = ${currentResult}`;
    $currentCalculation.textContent = descriptionLog;
    $userInput.value = "";
    const $newLi = document.createElement("li");
    $newLi.textContent = descriptionLog;
    $ulBox.appendChild($newLi);
  }
};
