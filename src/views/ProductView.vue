<script setup>
  import HeaderComponent from '../components/Header.vue'
  import axios from 'axios'

  function getProduct(idProduto){

    axios.get('https://localhost:3000/produtos/', {
      params: { id: idProduto }
    })
    .then(response => {
      console.log(response.data);''
    })
    .catch(error => {
      console.error('Erro na requisição GET:', error);
    });
  }

  function getMovements(){

  }

</script>

<template>
  <HeaderComponent title="PRODUTOS" btnText="Adicionar Produto"/>
</template>

<style scoped>

</style>
