<script setup>
import { defineEmits, defineProps, ref } from 'vue'
import axios from 'axios'

const props = defineProps(['storeId', 'productId'])
const emit = defineEmits(['closeModal'])

const name = ref('')
const description = ref('')
const price = ref(0)
const quantity = ref(0)
const inputColor = ref('solid 1px black')

async function validateInputs() {
	if (name.value === '' || description.value === ''
		|| price.value == 0 || quantity.value === ''
	) {
		inputColor.value = 'solid 1px red'
	} else {
		inputColor.value = 'solid 1px black'

		const product = {
			nome: name.value,
			descricao: description.value,
			preco: price.value,
			quantidade: quantity.value
		}

		await axios({
			method: 'put',
			url: `http://localhost:3000/mercados/${props.storeId}/produtos/${props.productId}`,
			data: product
		}).catch(error => console.log(error))

		emit('closeModal', 'edit')
	}
}

</script>

<template>
	<div @click="emit('closeModal', 'edit')" class="overlay"></div>

	<div class="modal">
		<h1>Editar Produto</h1>

		<div class="line"></div>

		<div class="input-container">
			<label>Nome</label>
			<input v-model="name" :style="{ border: inputColor }" type="text">

			<label>Descrição</label>
			<input v-model="description" :style="{ border: inputColor }" type="text">

			<label>Preço</label>
			<input v-model="price" :style="{ border: inputColor }" type="number">

			<label>Quantidade</label>
			<input v-model="quantity" :style="{ border: inputColor }" type="number">
		</div>

		<button @click="validateInputs" class="btn">Editar Produto</button>
	</div>
</template>

<style scoped>
.overlay {
	position: fixed;
	z-index: 10;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 50%);
}

.modal {
	width: 55%;
	height: 85%;
	padding: 40px;
	background-color: #eee;
	position: fixed;
	border-radius: 20px;
	z-index: 11;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
}

.line {
	width: 80%;
	height: 5px;
	background-color: #ccc;
	border-radius: 100%;
}

.input-container {
	display: flex;
	flex-direction: column;
}

h1 {
	font-size: 60px;
}

input {
	font-size: 26px;
	padding: 5px;
	border-radius: 10px;
}

label {
	font-size: 30px;
}

button {
	padding: 20px 50px;
	font-size: 30px;
	border: none;
	border-radius: 20px;
	background-color: #ccc;
	transition: 0.2s;
	cursor: pointer;
}

button:hover {
	transform: scale(1.05);
}

button:active {
	transform: scale(0.95);
}
</style>