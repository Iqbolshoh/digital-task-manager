let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `
      <li>
        ${t}
        <button onclick="removeTask(${i})">X</button>
      </li>
    `;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;

  tasks.push(input.value);
  input.value = "";
  render();
}

function removeTask(i) {
  tasks.splice(i, 1);
  render();
}

render();