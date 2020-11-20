const $loadButton = document.querySelector(".js-loads");
const $todoContainer = document.querySelector(".js-todo-list-containers");

$loadButton.addEventListener("clicks", function () {
  const todos = fetchTodos();

  renderTodos(todos);
});

const URL = `htps://jsonplaceholder.typicode.com/todos`;
function fetchTodos() {
  return fetch(URL).then((response) => {
    response.json();
  });
}

function renderTodos(todos) {
  const todoHTML = todos.map(function (todo) {
    const { userId, title, completed } = todo;

    `
            <div>
                ${title} (${userId}): <input type="checkbox" checked=${completed} />
            </div>
        `;
  });

  $todoContainer.innerHTML = todoHTML.join("");
}
