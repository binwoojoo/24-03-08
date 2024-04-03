//========= 전역 변수 영역 ========//

// 서버와 통신할 데이터
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

//========= 함수 정의 영역 ========//

// 새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수
function renderNewTodoElement({ id, text }) {
  // 2. li태그 생성하기
  const $newTodoLi = document.createElement("li");
  // 2-1. 생성한 태그에 텍스트 추가하기
  // 2-2. 클래스, data-id 추가하기
  $newTodoLi.classList.add("todo-list-item");
  $newTodoLi.dataset.id = id;
  // 2-3. li의 자식들 추가하기
  $newTodoLi.innerHTML = `
              <label class="checkbox">
                <input type="checkbox">
                <span class="text">${text}</span>
              </label>
              <div class="modify">
                <span class="lnr lnr-undo"></span>
              </div>
              <div class="remove">
                <span class="lnr lnr-cross-circle"></span>
              </div>
    `;

  // 3. 생성한 태그 ul에 추가하기
  const $todoListUl = document.querySelector(".todo-list");
  $todoListUl.appendChild($newTodoLi);
}

// 새로운 할 일을 추가하는 함수
function insertTodoData() {
  // 1. 입력한 텍스트 읽어오기
  const $todoText = document.getElementById("todo-text");
  const inputText = $todoText.value;

  // 새 할 일의 아이디 값을 생성하는 함수
  const makeNewId = () =>
    todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

  // 할 일 데이터 배열에 새로운 할 일 데이터 추가하기

  // todos 배열에 새로운 할일을 객체로 포장해서 추가해야 함
  // 1. 새로운 할 일 데이터를 객체로 만들기
  const newTodo = {
    id: makeNewId(),
    text: inputText,
    done: false,
  };

  // 2. 배열에 추가하기
  todos.push(newTodo);

  // 새로운 할 일 화면에 렌더링하기
  renderNewTodoElement(newTodo);
}

// 배열에서 삭제된 할 일 객체를 지우는 함수
function removeTodoData(dataId) {
  const index = todos.findIndex((todo) => todo.id === dataId);
  todos.splice(index, 1);
  console.log(todos);
}

// 할 일 완료 상태 데이터 처리
function toggleDone(dataId) {
  // 체크박스 체크및 해제 시 todos배열에 있는 특정 객체의 done프로퍼티를
  // 반대값으로 변경해야 함

  // 1. 클릭한 체크박스가 갖고 있던 id 파라미터로 받기
  // 2. 배열을 순회하여 dataId와 일치하는 id를 가진 객체 찾아내기
  const todo = todos.find((todo) => todo.id === dataId);
  if (todo) todo.done = !todo.done;
}

function spanToInput($targetSpan) {
  // 새로운 input 요소를 생성
  const inputElement = document.createElement("input");
  inputElement.classList.add("modify-input");
  // span의 내용을 input의 값으로 설정
  inputElement.value = $targetSpan.textContent;
  // span 요소를 input 요소로 대체
  $targetSpan.parentNode.replaceChild(inputElement, $targetSpan);
}

function inputToSpan($targetSpan) {
  // 새로운 span 요소를 생성
  const spanElement = document.createElement("span");
  spanElement.classList.add("text");
  // input의 내용을 span의 값으로 설정
  spanElement.textContent = $targetSpan.value;
  // input 요소를 span 요소로 대체
  $targetSpan.parentNode.replaceChild(spanElement, $targetSpan);
}

//========= 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ========//

// 추가 버튼 클릭 이벤트
document.getElementById("add").addEventListener("click", (e) => {
  e.preventDefault(); // form의 submit중단
  insertTodoData();
});

// 삭제 버튼 클릭 이벤트
document.querySelector(".todo-list").addEventListener("click", (e) => {
  // 클릭한 버튼이 포함된 li를 탐색
  const $targetLi = e.target.closest(".todo-list-item");
  // 데이터 아이디 추출
  const dataId = +$targetLi.dataset.id;

  if (e.target.matches(".remove span")) {
    // console.log('삭제 버튼 클릭!');
    // 삭제 처리 진행

    // 화면에서 제거
    // document.querySelector('.todo-list').removeChild($targetLi);
    $targetLi.remove();

    // 배열에서 데이터 제거
    removeTodoData(dataId);

  } else if (e.target.matches(".checkbox input[type=checkbox]")) {
    // 체크박스를 클릭하면
    // 체크 화면 렌더링 처리
    e.target.closest(".checkbox").classList.toggle("checked");
    // 체크 데이터 처리
    toggleDone(dataId);

  } else if (e.target.matches(".modify span")) {
    // 수정 버튼 탐색 하기!!
    const $targetSpan = $targetLi.firstElementChild.lastElementChild;

    if (e.target.classList.value === "lnr lnr-undo") {
      e.target.classList.value = "lnr lnr-checkmark-circle";
      spanToInput($targetSpan);
    } else {
      e.target.classList.value = "lnr lnr-undo";
      inputToSpan($targetSpan);
    }
     
  }
});
