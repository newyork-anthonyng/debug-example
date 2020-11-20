const $loadButton = document.querySelector(".js-load");
const $todoContainer = document.querySelector(".js-todo-list-container");

$loadButton.addEventListener("click", async function () {
  const todos = await fetchTodos();

  renderTodos(todos);
});

const URL = `https://jsonplaceholder.typicode.com/todos`;
function fetchTodos() {
  return fetch(URL).then((response) => response.json());
}

function renderTodos(todos) {
  const todoHTML = todos.map(function (todo) {
    const { userId, title, completed } = todo;

    return `
            <div>
                ${title} (${userId}): <input type="checkbox" ${completed ? "checked" : ""}/>
            </div>
        `;
  });

  $todoContainer.innerHTML = todoHTML.join("");
}
