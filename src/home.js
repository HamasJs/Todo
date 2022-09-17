import { format } from "date-fns";
import { active_status } from "./active";
import { addDays } from "./date";
import { differenceInCalendarDays } from "date-fns/fp";

const All_Tasks = document.getElementById("All-Tasks");
const Today_Tasks = document.getElementById("Today-Tasks");
const Weekly_Tasks = document.getElementById("Weekly-Tasks");
const Important_Tasks = document.getElementById("Important-Tasks");
const tasks = document.querySelector(".tasks");

function showToday() {
  for (let i = 0; i < tasks.childElementCount; i++) {
    const task = document.getElementById(`task-${i}`);
    const date = document.getElementById(`date-${i}`);
    let Today = format(new Date(), "yyyy-MM-dd");

    if (Today != date.textContent) {
      task.classList.add("hidden");
    }
  }
}
function showAll() {
  for (let i = 0; i < tasks.childElementCount; i++) {
    const task = document.getElementById(`task-${i}`);
    task.classList.remove("hidden");
  }
}

function showWeekly() {
  for (let i = 0; i < tasks.childElementCount; i++) {
    const task = document.getElementById(`task-${i}`);
    const date = document.getElementById(`date-${i}`);
    let Today = new Date();
    let Weekly = new Date(date.textContent);
    const result = differenceInCalendarDays(Today, Weekly);
    if (result >=0 && result <= 7) {
      task.classList.remove("hidden");
    }
    else
    {
        task.classList.add('hidden');
    }
  }
}

function showImportant (){
    for(let i=0;i<tasks.childElementCount;i++)
    {
        const task = document.getElementById(`task-${i}`);
        const star = document.getElementById(`star-${i}`);
        if(!star.classList.contains('checked'))
        {
            task.classList.add('hidden');
        }
        else
        {
            // task.classList.remove('hidden');
        }
    }
}

function showHome() {
  All_Tasks.addEventListener("click", function () {
    active_status(All_Tasks);
    showAll();
  });
  Weekly_Tasks.addEventListener("click", function () {
    active_status(Weekly_Tasks);
    showWeekly();
  });
  Today_Tasks.addEventListener("click", function () {
    active_status(Today_Tasks);
    showToday();
  });
  Important_Tasks.addEventListener("click", function () {
    active_status(Important_Tasks);
    showImportant();
  });
}

export { showHome };
