<script setup>
import { defineProps } from 'vue'

const props = defineProps(['store'])
</script>

<template>
    <div class="store">
        <h1>{{ store.nome }}</h1>
        <h2>{{ store.endereco }}</h2>
    </div>
</template>

<style scoped>
.store {
    background-color: #ccc;
    border-radius: 20px;
    padding: 20px;
    margin: 15px;
    width: 300px;
    height: 300px;
    transition: 0.2s;
    filter: drop-shadow(0px 0px 5px #ccc);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
}

h1 {
    font-size: 50px;
    font-weight: bold;
}

h2 {
    font-size: 25px;
    font-weight: normal;
}

.store:hover {
    transform: scale(1.05);
}

.store:active {
    transform: scale(0.95);
}
</style>