Vue.component('todo-item', {
    template: '\
        <li>\
        {{title}}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
        ',
    props: ['title']
})

new Vue({
    el: '#todo-list',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1, title: 'Eat',
            },
            {
                id: 2, title: 'Sleep',
            },
            {
                id: 3, title: 'Repeat',
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})