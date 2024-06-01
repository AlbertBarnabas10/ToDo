const addBtn = document.getElementById("addTaskButton");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskInput = document.getElementById("taskInput").value.trim();
  const taskList = document.getElementById("taskList");
  if (taskInput !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskInput;

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});
