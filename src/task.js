let key = 0;

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

function setkey() {
  for (let i = 0; i <= localStorage.length; i++) {
    key = i;
  }
}

function storeTask(Tas) {
  let task = new Task(Tas[0], Tas[1], Tas[2], false);
  setkey();
  localStorage.setItem(key, JSON.stringify(task));
}

function getTask(key, state) {
  var existing = localStorage.getItem(key);
  existing = existing ? JSON.parse(existing) : {};
  existing["priority"] = state;
  localStorage.setItem(key, JSON.stringify(existing));
}

export { storeTask, getTask };
