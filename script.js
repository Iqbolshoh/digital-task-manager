let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `
      <li>
        <span onclick="toggle(${i})" style="cursor:pointer; ${t.done ? 'text-decoration:line-through' : ''}">
          ${t.text}
        </span>
        <button onclick="removeTask(${i})">❌</button>
      </li>
    `;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;

  tasks.push({ text: input.value, done: false });
  input.value = "";
  render();
}

function removeTask(i) {
  tasks.splice(i, 1);
  render();
}

function toggle(i) {
  tasks[i].done = !tasks[i].done;
  render();
}

render();