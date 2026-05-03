document.addEventListener("DOMContentLoaded", () => {
  // your code here// Select the form
const form = document.getElementById("create-task-form");

// Listen for submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the value from input field
  const task = event.target["new-task-description"].value;

  // Build and display task
  buildToDo(task);

  // Clear form after submission
  form.reset();
});

// Function to create list item
function buildToDo(task) {
  // Create li element
  const li = document.createElement("li");

  // Set text
  li.textContent = task;

  // Append to correct UL
  document.getElementById("tasks").appendChild(li);
}
});
