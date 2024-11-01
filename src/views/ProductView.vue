<script setup>
import { Icon } from '@iconify/vue';
import HeaderComponent from '../components/Header.vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import EditProductModal from '@/components/EditProductModal.vue'

const router = useRouter()
const route = useRoute()

const product = ref({})

onMounted(getProduct)

async function getProduct() {
  const response = await axios({
    method: 'get',
    url: `http://localhost:3000/mercados/${route.params.loja}/produtos/${route.params.id}`
  }).catch(error => console.log(error))

  if (response) {
    product.value = response.data[0]
  }
}

const showEditModal = ref(false)

function closeModal() {
  showEditModal.value = false

}

function  openModal() {
  showEditModal.value = true
}

</script>

<template>
  <EditProductModal v-if="showEditModal" @closeModal="closeModal" :productId="route.params.id"/>

  <HeaderComponent :title="product.NOME" btnText="" />

  <div class="product-info-container">
    <div class="top-container">
      <div class="image">
        <Icon icon="material-symbols:imagesmode-rounded" color="#555" width="50px" />
      </div>

      <div class="info-container">
        <div clas="infos">
          <h1 class="price">R${{ product.PRECO }}</h1>

          <p class="description">{{ product.DESCRICAO }}</p>
        </div>

        <div class="quantity-container">
          <p class="quantity">{{ product.QUANTIDADE }}<span> em estoque</span></p>
        </div>

        <Icon icon="material-symbols:edit" width="30px" color="#333" class="edit-btn" @click="openModal" />
      </div>
    </div>

    <button @click="router.push(`/${route.params.loja}/${route.params.id}/movimentacoes`)" class="moves-btn">Ver movimentações do
      produto</button>
  </div>
</template>

<style scoped>
.product-info-container {
  width: 60%;
  margin: 50px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.image {
  background-color: #ccc;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 5px #ccc);
}

.top-container {
  display: flex;
  width: 80%;
}

.info-container {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price {
  font-size: 50px;
}

.description {
  font-size: 20px;
}

.quantity {
  font-size: 40px;
}

.quantity span {
  font-size: 20px;
}

button {
  margin-top: 100px;
  background-color: #ccc;
  border: none;
  border-radius: 10px;
  width: 80%;
  font-size: 20px;
  padding: 20px;
  filter: drop-shadow(0px 0px 5px #ccc);
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  transform: scale(1.02);
}

button:active {
  transform: scale(0.98);
}

.edit-btn {
  transition: 0.2s;
  cursor: pointer;
}

.edit-btn:hover {
  transform: scale(1.1);
}

.edit-btn:active {
  transform: scale(0.9);
}
</style>
