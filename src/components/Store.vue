<script setup>
import { defineProps } from 'vue'

const props = defineProps(['store'])
</script>

<template>
    <div class="store-container">
        <h1>{{ store.nome }}</h1>
        <h2>{{ store.endereco }}</h2>
    </div>
</template>

<style scoped>
.store-container {
    background-color: aqua;
    margin: 10px;
}
</style>