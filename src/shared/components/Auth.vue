<script setup lang="ts">
import { ref } from 'vue';


const username = ref('');
const password = ref('');
const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted with:', { username, password });
};
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required />
    </div>
    <button type="submit">Login</button>
    </form>
</template>