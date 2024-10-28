<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateStoreModal from '../components/CreateStoreModal.vue'
import { ref } from 'vue';

const showModal = ref(false)

function openModal(value) {
    showModal.value = value
}

</script>

<template>
    <CreateStoreModal v-if="showModal" @modal="openModal"/>

    <HeaderComponent title="LOJAS" btnText="Adicionar lojas" @modal="openModal"/>
</template>

<style scoped>

</style>
