<script setup>
import HeaderComponent from '../components/Header.vue'
import CreateProductModal from '../components/CreateProductModal.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Product from '@/components/Product.vue'

const route = useRoute()
const router = useRouter()

const storeId = route.params.id

const produtos = [
  {
    id: 1,
    nome: "Arroz 5kg",
    descricao: "Arroz branco tipo 1",
    preco: 20.50,
    quantidade: 100
  },
  {
    id: 2,
    nome: "Arroz 5kg",
    descricao: "Arroz branco tipo 1",
    preco: 20.50,
    quantidade: 100
  },
  {
    id: 3,
    nome: "Arroz 5kg",
    descricao: "Arroz branco tipo 1",
    preco: 20.50,
    quantidade: 100
  },
  {
    id: 4,
    nome: "Arroz 5kg",
    descricao: "Arroz branco tipo 1",
    preco: 20.50,
    quantidade: 100
  },
  {
    id: 5,
    nome: "Arroz 5kg",
    descricao: "Arroz branco tipo 1",
    preco: 20.50,
    quantidade: 100
  },
]

const showModal = ref(false)

function openModal(value) {
  showModal.value = value
}
</script>

<template>
  <CreateProductModal v-if="showModal" @modal="openModal" />

  <HeaderComponent title="SJIBSDVU" btnText="Novo Produto" @modal="openModal" />

  <div class="products-container">
    <Product @click="router.push(`/produto/${p.id}`)" v-for="p in produtos" :key="p.id" :product="p" />
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
