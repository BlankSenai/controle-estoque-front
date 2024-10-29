<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps(['title', 'btnText'])
const emit = defineEmits(['modal'])

</script>

<template>
    <div class="header">
        <div class="container">
            <h1>{{ props.title }}</h1>

            <button v-if="props.btnText != ''" @click="emit('modal', true)" >{{ props.btnText }}<Icon icon="material-symbols:add-2" width="30px"/></button>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #333;
    width: 100%;
    height: 150px;
    filter: drop-shadow(0px 0px 5px #333);
}

.container {
    width: 800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    color: #fff;
    font-size: 50px;
}

button {
    padding: 10px;
    font-size: 20px;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: 0.2s;
    filter: drop-shadow(0px 0px 5px #000);
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}
</style>
