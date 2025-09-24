<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>Drink API</v-app-bar-title>
      <v-spacer />
      <v-btn variant="text" to="/">Home</v-btn>
      <v-btn variant="text" to="/users">Users</v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="py-6">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
