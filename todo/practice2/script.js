document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const addbutton = document.getElementById("submit");
  const userinput = document.getElementById("uservalue");
  const lists = document.getElementById("lists");

  const todos = JSON.parse(localStorage.getItem("todos")) ?? [];

  const loadtask = function (task, index) {
    lists.innerHTML = "";
    todos.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = task;
      const deletebutton = document.createElement("button");
      deletebutton.innerText = "削除";
      deletebutton.addEventListener("click", function () {
        // li.remove();
        deletetask();
      });
      li.appendChild(deletebutton);
      lists.appendChild(li);
    })
  }

  console.log(todos);

  const addtask = function (event) {
    const list = userinput.value.trim();
    if (list) {
      todos.push(list);
      localStorage.setItem("todos", JSON.stringify(todos));
      userinput.value = "";
      loadtask();
    }
    event.preventDefault();
  }
  const deletetask = function (index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadtask();
  }

  form.addEventListener("submit", addtask);
  loadtask();
});