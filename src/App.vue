<script setup>
import { useTodosStore } from './store/todos';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const newTodo = ref('');

function addNewTodo(txt) {
	addTodo(txt);
	newTodo.value = '';
}

const todosStore = useTodosStore();
const { filteredTodos } = storeToRefs(todosStore);
const { addTodo, toggleTodo, updateFilter } = todosStore;
</script>

<template>
	<main>
		<div>
			<button @click="()=> updateFilter('all')">All</button>
			<button  @click="()=> updateFilter('finished')">Finished</button>
			<button  @click="()=> updateFilter('unfinished')">Unfinished</button>
		</div>
		<input v-model="newTodo" />
		<button @click="() => addNewTodo(newTodo)">Add</button>
		<div v-for="todo in filteredTodos" :key="todo.id" style="display: flex">
			<h1 :style="todo.isFinished && {textDecoration: 'line-through'}">{{ todo.txt }}</h1>
			<button @click="() => toggleTodo(todo.id)">Finished?</button>
		</div>
	</main>
</template>
