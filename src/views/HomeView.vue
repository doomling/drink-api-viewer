<script setup>
import { RouterLink } from 'vue-router'
import UserForm from '@/components/UserForm.vue'
</script>

<template>
  <v-row>
    <v-col cols="12" md="6">
      <h2 class="mb-2">Welcome to Drink API Viewer</h2>
      <p class="mb-4">Create a new user and browse the list.</p>
      <UserForm />
    </v-col>
    <v-col cols="12" md="6">
      <v-card>
        <v-card-title>Browse</v-card-title>
        <v-card-text>
          <p>Head over to the users page to see all users.</p>
          <RouterLink to="/users">Go to Users</RouterLink>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.mb-2 { margin-bottom: .5rem; }
.mb-4 { margin-bottom: 1rem; }
</style>


