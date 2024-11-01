<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateMovesModal from '../components/CreateMovesModal.vue'
import { onMounted, onUpdated, ref } from 'vue';
import { useRoute } from 'vue-router'
import Move from '@/components/Move.vue'
import axios from 'axios'

onMounted(getMoves)
onUpdated(getMoves)

const route = useRoute()

const moves = ref([])

const showModal = ref(false)

async function getMoves() {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/mercados/${route.params.loja}/produtos/${route.params.produto}/movimentacoes`
  }).catch(error => console.log(error))

  if (response) {
    moves.value = response.data.resultado
  }
}

function openModal(value) {
  showModal.value = value
}
</script>

<template>
  <CreateMovesModal v-if="showModal" @modal="openModal" :storeId="route.params.loja" :productId="route.params.produto"/>

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
