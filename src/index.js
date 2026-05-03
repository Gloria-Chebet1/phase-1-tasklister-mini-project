// Select form
const form = document.getElementById("create-task-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // ✅ FIX: use getElementById instead of event.target[name]
  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.value;

  buildToDo(task);

  form.reset();
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  document.getElementById("tasks").appendChild(li);
}