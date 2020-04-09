function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
function getAllElementsFromJson(jsonPath, tag){

    const fill = document.getElementById(tag);
    fetch(jsonPath)
        .then((resp) => resp.json())
        .then(function(data) {
            let todos = data.movieData;
            return todos.map(function(todo) {
                let p = createNode("p");
                p.innerHTML = `Speltid: ${todo.playTime}, Release date: ${todo.date}`;
                append(fill, p);
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}