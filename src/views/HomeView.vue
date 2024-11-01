<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateStoreModal from '../components/CreateStoreModal.vue'
import Store from '@/components/Store.vue'
import { onMounted, onUpdated, ref } from 'vue';
import axios from 'axios'
import EditStoreModal from '@/components/EditStoreModal.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stores = ref([])

onMounted(getStores)
onUpdated(getStores)

async function getStores() {
	const response = await axios({
		method: 'get',
		url: 'http://localhost:3000/mercados',
	}).catch(error => console.log(error))

	if (response) {
		stores.value = response.data
	}
}

const showEditModal = ref(false)
const showModal = ref(false)

function openModal(value) {
	if (value === 'edit') {
		showEditModal.value = true
	}
	showModal.value = value
}

</script>

<template>
	<EditStoreModal v-if="showEditModal" @modal="openModal"/>
	<CreateStoreModal v-if="showModal" @modal="openModal" />

	<HeaderComponent title="LOJAS" btnText="Adicionar lojas" @modal="openModal" />

	<div class="stores-container">
		<Store v-for="s in stores" :key="s.ID" :store="s" @click="router.push(`loja/${s.ID}`)" @openModal="openModal"/>
	</div>
</template>

<style scoped>
.stores-container {
	width: 60%;
	margin: 50px auto;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
</style>
