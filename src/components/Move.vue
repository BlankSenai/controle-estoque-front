<script setup>
import { defineProps } from 'vue'

const props = defineProps(['move'])
</script>

<template>
    <div class="move">
        <h1>{{ props.move.tipo }}</h1>
        <h1>{{ props.move.quantidade }}</h1>
        <h1>{{ props.move.data }}</h1>
    </div>
</template>

<style scoped>
.move {
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

.move:hover {
    transform: scale(1.02);
}
</style>