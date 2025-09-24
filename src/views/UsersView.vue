<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api.js'

const users = ref([])
const isLoading = ref(false)
const errorMessage = ref('')

async function fetchUsers() {
  isLoading.value = true
  errorMessage.value = ''
  try {
    // According to drink-api, assume users are available at /users
    const { data } = await api.get('/users')
    users.value = Array.isArray(data) ? data : (data?.users ?? [])
  } catch (error) {
    errorMessage.value = error?.response?.data?.message || error?.message || 'Failed to load users'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchUsers)
</script>

<template>
  <section>
    <h2>Users</h2>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="errorMessage" style="color:crimson">{{ errorMessage }}</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id || user._id">
        <strong>{{ user.name || 'Unknown' }}</strong>
        <span v-if="user.age !== undefined"> — Age: {{ user.age }}</span>
        <span v-if="user.favDrink"> — Favorite Drink: {{ user.favDrink }}</span>
      </li>
    </ul>
  </section>
  <button @click="fetchUsers">Reload</button>
  <pre v-if="!isLoading && !errorMessage && users.length === 0">No users found</pre>
</template>

<style scoped>
section { padding: 1rem; }
ul { padding-left: 1.25rem; }
li { margin: .25rem 0; }
button { margin-top: .75rem; }
</style>


