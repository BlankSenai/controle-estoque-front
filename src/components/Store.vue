<script setup>
import { Icon } from '@iconify/vue';
import { defineProps, defineEmits } from 'vue'
import axios from 'axios'

const emit = defineEmits(['openModal'])
const props = defineProps(['store'])

async function deleteStore() {
	await axios({
		method: 'delete',
		url: `http://localhost:3000/mercados/${props.store.ID}`,
	}).catch(error => console.log(error))
}

function editStore() {
	emit('openModal', 'edit', props.store.ID)
}
</script>

<template>
	<div class="store">
		<div class="text">
			<h1>{{ store.NOME }}</h1>
			<h2>{{ store.ENDERECO }}</h2>
		</div>

		<div class="btn-container">
			<Icon icon="material-symbols:delete" color="#333" width="30px" class="delete-btn" @click.stop="deleteStore" />
			<Icon icon="material-symbols:edit" color="#333" width="30px" class="delete-btn" @click.stop="editStore" />
		</div>
	</div>
</template>

<style scoped>
.store {
	background-color: #ccc;
	border-radius: 20px;
	padding: 20px;
	margin: 15px;
	width: 300px;
	height: 300px;
	transition: 0.2s;
	filter: drop-shadow(0px 0px 5px #ccc);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	overflow: auto;
}

h1 {
	font-size: 50px;
	font-weight: bold;
	word-break: break-all;
}

h2 {
	font-size: 25px;
	font-weight: normal;
	word-break: break-all;
}

.store:hover {
	transform: scale(1.05);
}

.delete-btn {
	transition: 0.2s;
	cursor: pointer;
}

.delete-btn:hover {
	transform: scale(1.1);
}

.delete-btn:active {
	transform: scale(0.9);
}
</style>