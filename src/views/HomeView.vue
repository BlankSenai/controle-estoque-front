<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateStoreModal from '../components/CreateStoreModal.vue'
import Store from '@/components/Store.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    // const result = axios('http://localhost:3000/mercados', {
    //     method: 'GET'
    // })
    // stores.value = result
})

const stores = ref([
    {
        id: 1,
        nome: 'teste1',
        endereco: 'teste11'
    },
    {
        id: 2,
        nome: 'teste2',
        endereco: 'teste22'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
    {
        id: 3,
        nome: 'teste3',
        endereco: 'teste33'
    },
])
const showModal = ref(false)

function openModal(value) {
    showModal.value = value
}

</script>

<template>
    <CreateStoreModal v-if="showModal" @modal="openModal"/>

    <HeaderComponent title="LOJAS" btnText="Adicionar lojas" @modal="openModal"/>

    <div class="stores-container">
        <Store v-for="s in stores" :key="s.id" :store="s" @click="router.push(`loja/${s.id}`)"/>
    </div>
</template>

<style scoped>
.stores-container {
    width: 60%;
    margin: 50px auto ;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
