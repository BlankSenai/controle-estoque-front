<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateMovesModal from '../components/CreateMovesModal.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import Move from '@/components/Move.vue'

const route = useRoute()

const showModal = ref(false)

function openModal(value) {
  showModal.value = value
}

const moves = [
  {
    tipo: 'entrada',
    quantidade: 123,
    data: '2022-01-01',
  },
  {
    tipo: 'entrada',
    quantidade: 123,
    data: '2022-01-01',
  },
  {
    tipo: 'entrada',
    quantidade: 123,
    data: '2022-01-01',
  },
  {
    tipo: 'entrada',
    quantidade: 123,
    data: '2022-01-01',
  },
  {
    tipo: 'entrada',
    quantidade: 123,
    data: '2022-01-01',
  },
  {
    tipo: 'entrada',
    quantidade: 123,
    data: '2022-01-01',
  },
]

</script>

<template>
  <CreateMovesModal v-if="showModal" @modal="openModal" />

  <HeaderComponent title="MOVIMENTAÇÕES" btnText="Adicionar movimento" @modal="openModal" />

  <div class="moves-container">
    <Move v-for="m in moves" :key="m.id" :move="m" />
  </div>
</template>

<style scoped>
.moves-container {
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
