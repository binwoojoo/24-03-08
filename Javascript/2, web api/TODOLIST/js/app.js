const $plusToDoList = document.getElementById("add");
const $userInputToDoList = document.getElementById("todo-text");
const $ul = document.querySelector(".todo-list");

// 새로운 todo리스트 생성 함수
function createToDoList() {
  const $ul = document.querySelector(".todo-list");
  // 기존의 아이콘들을 모두 삭제
  $ul.innerHTML += `<li data-id="1" class="todo-list-item">
  <label class="checkbox">
    <input type="checkbox" />
    <span class="text">${$userInputToDoList.value}</span>
  </label>
  <div class="modify">
    <span class="lnr lnr-undo"></span>
  </div>
  <div class="remove">
    <span class="lnr lnr-cross-circle"></span>
  </div>
</li>`;
  $userInputToDoList.value = "";
}

// 실행 영역 ㅋㅋ
$plusToDoList.addEventListener("click", (e) => {
  e.preventDefault();
  createToDoList();
  if (($userInputToDoList.value = "")) {
    $userInputToDoList.placeholder.value = "ㄲㅈ";
  }
  console.log($userInputToDoList);
});
