<script setup>
  import HeaderComponent from '../components/Header.vue'
  import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()

//const product = axios(`http://localhost:3000/produto/${route.params.id}`)

const product = {
  nome: 'Teste produto aa',
  descricao: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  preco: '123123',
  quantidade: '84'
}

</script>

<template>
  <HeaderComponent :title="product.nome" btnText=""/>
  <h1>{{ product.descricao }}</h1>
  <h1>{{ product.preco }}</h1>
  <h1>{{ product.quantidade }}</h1>
</template>

<style scoped>

</style>
