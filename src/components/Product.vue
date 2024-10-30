<script setup>
import { defineProps } from 'vue'

const props = defineProps(['product'])
</script>

<template>
    <div class="product">
        <h1>{{ props.product.nome }}</h1>
    </div>
</template>

<style scoped>
.product {
    background-color: #ccc;
    margin: 10px;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    transition: 0.2s;
    filter: drop-shadow(0px 0px 5px #ccc);
    cursor: pointer;
}

p {
    font-size: 20px;
}

.product:hover {
    transform: scale(1.02);
}

.product:active {
    transform: scale(0.98);
}
</style>