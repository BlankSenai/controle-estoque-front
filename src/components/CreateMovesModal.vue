<script setup>
import { defineEmits, ref } from 'vue'
import axios from 'axios'

const props = defineProps(['storeId', 'productId'])
const emit = defineEmits(['modal'])

const type = ref('')
const quantity = ref('')
const inputColor = ref('solid 1px black')

async function validateInputs() {
	if (type.value === '' || quantity.value == '') {
		inputColor.value = 'solid 1px red'
	} else {
		inputColor.value = 'solid 1px black'

		const movement = {
			tipo: type.value.toUpperCase(),
			quantidade: Number(quantity.value),
			data_movimentacao: new Date().toLocaleDateString()
		}

		await axios({
			url: `http://localhost:3000/mercados/${props.storeId}/produtos/${props.productId}/movimentacoes`,
			method: 'post',
			data: movement
		}).catch(error => console.log(error))


		emit('modal', false)
	}
}
</script>

<template>
	<div @click="emit('modal', false)" class="overlay"></div>

	<div class="modal">
		<h1>Novo Movimento</h1>

		<div class="line"></div>

		<div class="input-container">
			<label>Tipo</label>
			<select v-model="type" :style="{ border: inputColor }">
				<option value="" selected disabled hidden></option>
				<option value="entrada">Entrada</option>
				<option value="saida">Saída</option>
			</select>

			<label>Quantidade</label>
			<input v-model="quantity" :style="{ border: inputColor }" type="number">
		</div>

		<button @click="validateInputs" class="btn">Criar Movimento</button>
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
	width: 50%;
	height: 70%;
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

input,
select {
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