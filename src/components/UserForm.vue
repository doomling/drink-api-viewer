<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import api from '@/services/api.js'

const emit = defineEmits(['created'])

const isSubmitting = ref(false)

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .integer('Age must be an integer')
    .min(0, 'Age cannot be negative'),
  favDrink: yup.string().optional(),
})

async function onSubmit(values, { resetForm }) {
  isSubmitting.value = true
  try {
    const payload = { ...values, age: Number(values.age) }
    const { data } = await api.post('/user', payload)
    emit('created', data)
    resetForm()
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || 'Failed to create user'
    alert(message)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <v-card max-width="520" elevation="2">
      <v-card-title>Create User</v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <label><div class="label">Name</div></label>
            <Field name="name" v-slot="{ field }">
              <v-text-field v-bind="field" placeholder="Jane Doe" :disabled="isSubmitting" />
            </Field>
            <ErrorMessage name="name" as="div" class="error" />
          </v-col>
          <v-col cols="12" sm="6">
            <label><div class="label">Age</div></label>
            <Field name="age" v-slot="{ field }">
              <v-text-field v-bind="field" type="number" placeholder="30" :disabled="isSubmitting" />
            </Field>
            <ErrorMessage name="age" as="div" class="error" />
          </v-col>
          <v-col cols="12" sm="6">
            <label><div class="label">Favorite Drink</div></label>
            <Field name="favDrink" v-slot="{ field }">
              <v-text-field v-bind="field" placeholder="Coffee" :disabled="isSubmitting" />
            </Field>
            <ErrorMessage name="favDrink" as="div" class="error" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn type="submit" color="primary" :loading="isSubmitting">Create User</v-btn>
      </v-card-actions>
    </v-card>
  </Form>
  
</template>

<style scoped>
.label { font-weight: 600; margin-bottom: .25rem; }
.error { color: crimson; }
</style>


