function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('todos');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.todos);
        console.log("Visa första i json-objektet: " + data.todos[0].todoTitle);
        let todos = data.todos;
        return todos.map(function(todo) {
            let li = createNode('li');
            li.innerHTML = todo.todoTitle + " " + todo.todoDate;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
