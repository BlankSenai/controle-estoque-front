<script setup>
import { defineProps } from 'vue'

const props = defineProps(['move'])
</script>

<template>
  <div class="move">
    <div>
      <h1>{{ props.move.TIPO }}</h1>

      <p> <span>{{ props.move.QUANTIDADE }}</span> unidades</p>
    </div>

    <p>{{ props.move.DATA }}</p>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  font-size: 20px;
}

.move:hover {
  transform: scale(1.02);
}

span {
  font-size: 30px;
}
</style>