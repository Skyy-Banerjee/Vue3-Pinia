import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
            {
                id: 1,
                txt: "clean room",
                isFinished: false,
            }
        ],
        filter: "all",


    }),

    getters: {
        filteredTodos() {
            if (this.filter === "finished") {
                return this.todos.filter(todo => todo.isFinished)
            } else if (this.filter === "unfinished") {
                return this.todos.filter(todo => !todo.isFinished)
            }
            return this.todos;
        },
    },


    actions: {
        addTodo(txt) {
            if (!txt) return;
            this.todos.push({
                id: Math.floor(Math.random() * 1000000000),
                txt,
                isFinished: false,
            })
        },
        toggleTodo(id) {
            const idx = this.todos.findIndex(todo => todo.id === id);
            this.todos[idx].isFinished = !this.todos[idx].isFinished;
        },
        updateFilter(value) {
            this.filter = value;
        }
    }
})