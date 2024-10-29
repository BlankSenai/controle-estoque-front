<script setup>
  import HeaderComponent from '../components/Header.vue'
  import CreateMovesModal from '../components/CreateMovesModal.vue'
  import { ref } from 'vue';

  const showModal = ref(false)

  function openModal(value) {
    showModal.value = value
  }

</script>

<template>
  <CreateMovesModal v-if="showModal" @modal="openModal"/>

  <HeaderComponent title="MOVIMENTOS" btnText="Adicionar movimento" @modal="openModal"/>
</template>

<style scoped>

</style>
