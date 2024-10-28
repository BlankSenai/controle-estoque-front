<script setup>
const emit = defineEmits(['modal'])
</script>

<template>
    <div @click="emit('modal', false)" class="overlay"></div>


    <div class="modal">
        <h1>Nova Loja</h1>

        <div class="line"></div>

        <div class="input-container">
            <label>Nome</label>
            <input type="text">

            <label>Endereço</label>
            <input type="text">
        </div>

        <button class="btn">Criar Loja</button>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 50%);
}

.modal {
    width: 40%;
    height: 70%;
    padding: 40px;
    background-color: #eee;
    position: fixed;
    border-radius: 20px;
    z-index: 11;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}

.line {
    width: 80%;
    height: 5px;
    background-color: #ccc;
    border-radius: 100%;
}

.input-container {
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 60px;
}

input {
    font-size: 26px;
    padding: 5px;
    border-radius: 10px;
}

label {
    font-size: 30px;
}

button {
    padding: 20px 50px;
    font-size: 30px;
    border: none;
    border-radius: 20px;
    background-color: #ccc;
    transition: 0.2s;
}

button:hover {
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}
</style>