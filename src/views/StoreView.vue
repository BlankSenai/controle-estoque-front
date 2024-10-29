<script setup>
  import HeaderComponent from '../components/Header.vue'
  import CreateProductModal from '../components/CreateProductModal.vue'
  import { ref } from 'vue';

  const showModal = ref(false)

  function openModal(value) {
    showModal.value = value
  }
</script>

<template>
  <CreateProductModal v-if="showModal" @modal="openModal"/>

  <HeaderComponent title="SJIBSDVU" btnText="Novo Produto" @modal="openModal"/>
</template>

<style scoped>

</style>
