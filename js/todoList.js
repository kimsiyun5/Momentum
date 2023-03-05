const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");

const SCHEDULE_LIST = "schedules";
let schedules = [];

// 하나의 스케줄 틀 만드는 함수
function setSchedule(obj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.id = obj.id;

  span.innerText = obj.todo;

  btn.addEventListener("click", deleteSchedule);
  btn.innerText = "❌";

  li.appendChild(span);
  li.appendChild(btn);
  document.querySelector("#todoList").appendChild(li);
}

function getSchedule() {
  return JSON.parse(localStorage.getItem(SCHEDULE_LIST));
}

// 스케줄 추가 함수
function addTodo(e) {
  const obj = {
    id: Date.now(),
    todo: todoInput.value
  };

  schedules.push(obj);
  updateSchedule();
  setSchedule(obj);

  todoInput.value = "";
  e.preventDefault();
}

todoForm.addEventListener("submit", addTodo);

// 스케줄 삭제 함수
function deleteSchedule(e) {
  schedules = schedules.filter(obj => obj.id !== parseInt(e.target.parentNode.id));

  if (schedules.length === 0) {
    localStorage.removeItem(SCHEDULE_LIST);
  } else {
    updateSchedule();
  }

  e.target.parentNode.remove();
}

// 현재 스케줄을 로컬 스트리지에 반영하는 함수
function updateSchedule() {
  localStorage.setItem(SCHEDULE_LIST, JSON.stringify(schedules));
}

function hideTodoForm() {
  todoForm.classList.add(HIDDEN_CLASSNAME);
}


// 스케줄이 이미 있는지 검사
if (getSchedule()) {
  schedules = getSchedule();
  schedules.forEach(setSchedule);
}