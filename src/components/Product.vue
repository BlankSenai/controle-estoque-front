<script setup>
import { defineProps } from 'vue'

const props = defineProps(['product'])
</script>

<template>
    <div class="product">
        <h1>{{ props.product.nome }}</h1>
        <p>{{ props.product.descricao }}</p>
        <p>{{ props.product.preco }}</p>
        <p>{{ props.product.quantidade }}</p>
    </div>
</template>

<style scoped>
.product {
    background-color: aqua;
    width: 100%;
    height: 100px;
}
</style>