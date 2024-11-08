<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

const router = useRouter()

const email = ref('')
const password = ref('')

const inputColor = ref('black')

function validateInputs() {
    if (email.value === '' || password.value === '') {
        inputColor.value = 'red'
    } else {
        inputColor.value = 'black'

        const login = {
            email: email.value,
            senha: password.value
        }

        const result = axios({
            method: 'post',
            url: 'https://example.com/login',
            data: login
        }).catch(error => console.log(error))

        if (result) {
            console.log(result)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="login-container">
            <h1>Entrar</h1>

            <div class="input-container">
                <label>E-mail</label>
                <input v-model="email" type="email" :style="{borderColor: inputColor}">
                
                <label>Senha</label>
                <input v-model="password" type="password" :style="{borderColor: inputColor}">
            </div>

            <p>Não possui conta ainda? <span @click="router.push('/cadastrar')">Clique aqui</span></p>

            <button @click="validateInputs">Entrar</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-container {
    width: 70%;
    height: 80%;
    background-color: #ccc;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    filter: drop-shadow(0px 0px 5px #ccc);
}

.input-container {
    display: flex;
    flex-direction: column;
}

span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

h1 {
    font-size: 80px;
}

label {
    font-size: 40px;
}

input {
    font-size: 30px;
    padding: 10px;
    border-radius: 10px;
}

button {
    border: none;
    border-radius: 10px;
    font-size: 40px;
    padding: 10px 30px;
    filter: drop-shadow(0px 0px 5px #ccc);
    transition: 0.2s;
    cursor: pointer;
}

button:hover {
    transform: scale(1.05);
}

button:active {
    transform: scale(0.95);
}
</style>