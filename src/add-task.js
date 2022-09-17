import { getTask, storeTask } from "./task";

const add_task_btn = document.querySelector(".add-task-form");
const task_form = document.querySelector(".task-form");
const tasks = document.querySelector(".tasks");
const Title = document.getElementById("Title");
const Details = document.getElementById("Details");
const Date = document.getElementById("Date");
const cancel_task_btn = document.querySelector(".cancel-task");

let noOfTasks = localStorage.length;
let Task = [];
let date = [];
let cl;

function getDate() {
  return date;
}

function getvalue() {
  Task = [Title.value, Details.value, Date.value];
}
function createExistingTask() {
  for (let i = 0; i < localStorage.length; i++) {
    let n = JSON.parse(localStorage.getItem(i));
    if (n.priority) {
      cl = "checked";
    } else {
      cl = "";
    }
    const task = document.createElement("div");
    task.className = "task";
    task.id = `task-${i}`;
    task.innerHTML = `<div class="ct">
    <div class="checkbox checked"></div>
    <div class="details">
      <h3 class="taskname">${n.title}</h3>
      <p class="task-details">
      ${n.description}
      </p>
    </div>
    </div>
  <div class="details-task">
    <div class="date" id ="date-${i}">${n.date}</div>
    <span class="fa fa-star ${cl}" id="star-${i}"  value = "false"></span>
    <button class="cancel-btn" id="cancel-btn-${i}">Delete</button>
  </div>`;
    tasks.appendChild(task);
    const cancel = document.getElementById(`cancel-btn-${i}`);
    cancel.addEventListener("click", function () {
      document.getElementById(`task-${i}`).remove();
      console.log(i);
      localStorage.removeItem(i);
    });
    date[i] = n.date;
    getDate();
  }
}
function createTask() {
  const task = document.createElement("div");
  task.className = "task";
  task.id = `task-${noOfTasks}`;
  task.innerHTML = `<div class="ct">
    <div class="checkbox checked"></div>
    <div class="details">
      <h3 class="taskname">${Title.value}</h3>
      <p class="task-details">
      ${Details.value}
      </p>
    </div>
    </div>
  <div class="details-task">
    <div class="date" id ="date-${noOfTasks}">${Date.value}</div>
    <span class="fa fa-star" id="star-${noOfTasks}" value = "false"></span>
    <button class="cancel-btn" id="cancel-btn-${noOfTasks}">Delete</button>
  </div>`;
  tasks.appendChild(task);
  const cancel = document.getElementById(`cancel-btn-${noOfTasks}`);
  cancel.addEventListener("click", function () {
    document.getElementById(`task-${noOfTasks - 1}`).remove();
    console.log(noOfTasks - 1);
    localStorage.removeItem(noOfTasks - 1);
  });
  date[noOfTasks] = Date.value;
  getDate();
  noOfTasks++;
}

function priority() {
  for (let i = 0; i < tasks.childElementCount; i++) {
    const star = document.getElementById(`star-${i}`);
    star.addEventListener("click", function () {
      star.classList.toggle("checked");
      if (star.classList.contains("checked")) {
        getTask(i, true);
      } else {
        getTask(i, false);
      }
    });
  }
}

const add_task = function () {
  createExistingTask();
  add_task_btn.addEventListener("click", function () {
    getvalue();
    createTask();
    storeTask(Task);
    priority();
    task_form.classList.toggle("hidden");
  });
  priority();
  cancel_task_btn.addEventListener("click", function () {
    task_form.classList.toggle("hidden");
  });
};

export { add_task, getDate };
