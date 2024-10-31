<script setup>
import { Icon } from '@iconify/vue';
import { defineProps } from 'vue'

const props = defineProps(['product'])

function deleteProduct() {

}
</script>

<template>
    <div class="product">
        <h1>{{ props.product.nome }}</h1>

        <Icon icon="material-symbols:delete" width="30px" color="#333" class="delete-btn" @click.stop="deleteProduct"/>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p {
    font-size: 20px;
}

.product:hover {
    transform: scale(1.02);
}

.delete-btn {
    transition: 0.2s;
    cursor: pointer;
}

.delete-btn:hover {
    transform: scale(1.1);
}

.delete-btn:active {
    transform: scale(0.9);
}
</style>