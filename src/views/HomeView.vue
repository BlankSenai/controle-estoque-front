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

const storeId = ref()

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
const showCreateModal = ref(false)

function closeModal(value) {
	if (value === 'edit') {
		showEditModal.value = false
	} else if (value ==='create')
		showCreateModal.value = false
}

function openModal(value, id) {
	storeId.value = id

	if (value === 'edit') {
		showEditModal.value = true
	} else if (value ==='create')
		showCreateModal.value = true
}

</script>

<template>
	<EditStoreModal v-if="showEditModal" @closeModal="closeModal" :storeId="storeId"/>
	<CreateStoreModal v-if="showCreateModal" @closeModal="closeModal" />

	<HeaderComponent title="LOJAS" btnText="Adicionar lojas" @openModal="openModal" />

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
