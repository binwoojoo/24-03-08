// =================전역 변수 영역 ㅋㅋ===================
const $plusToDoList = document.getElementById("add");
const $userInputToDoList = document.getElementById("todo-text");
const $ul = document.querySelector(".todo-list");
const todos = [
  {
    id: 1,
    text: "할 일 1",
    done: false,
  },
  {
    id: 2,
    text: "할 일 2",
    done: false,
  },
  {
    id: 3,
    text: "할 일 3",
    done: false,
  },
];
// =================함수 정의 영역 ㅋㅋ===================

const makeNewId = () => {
  return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
};

const newTodo = {
  id: makeNewId(),
  text: $userInputToDoList.value,
  done: false,
};

todos.push(newTodo);

// 새로운 todo리스트 생성 함수
function createToDoList() {
  $ul.innerHTML += `<li data-id="${newTodo.id}" class="todo-list-item">
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

// ================실행 영역 ㅋㅋ===================

// 새로운 todo리스트 추가 생성 함수 실행
$plusToDoList.addEventListener("click", (e) => {
  e.preventDefault(); // form의 submit 중단!
  createToDoList();
});
