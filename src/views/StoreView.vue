<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateProductModal from '../components/CreateProductModal.vue'
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Product from '@/components/Product.vue'

onMounted(getProducts)
onUpdated(getProducts)

const route = useRoute()
const router = useRouter()

const products = ref([])

const showModal = ref(false)

async function getProducts() {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/mercados/${route.params.id}/produtos`
  }).catch(error => console.log(error))

  if (response) {
    products.value = response.data.resultado
  }
}

function closeModal() {
  showModal.value = false

}

function openModal() {
  showModal.value = true
}
</script>

<template>
  <CreateProductModal v-if="showModal" @closeModal="closeModal" :storeId="route.params.id"/>

  <HeaderComponent title="SJIBSDVU" btnText="Novo Produto" @openModal="openModal" />

  <div class="products-container">
    <Product @click="router.push(`/${route.params.id}/produto/${p.ID}`)" v-for="p in products" :key="p.ID" :product="p" :storeId="route.params.id"/>
  </div>
</template>

<style scoped>
.products-container {
  width: 60%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
