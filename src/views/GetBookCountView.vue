<template>
  <div class="container mt-4">
    <h1>Book count (Cloud Function)</h1>
    <button class="btn btn-primary mb-3" @click="loadCount" :disabled="loading">
      Get number of books
    </button>
    <p v-if="count !== null" class="fs-4">
      Number of books: <strong>{{ count }}</strong>
    </p>
    <p v-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const countUrl =
  import.meta.env.VITE_GET_BOOK_COUNT_URL ||
  'https://us-central1-fit5032-personal-acc-3fd54.cloudfunctions.net/getBookCount'

const count = ref(null)
const loading = ref(false)
const error = ref(null)

const loadCount = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await fetch(countUrl)
    const data = await res.json()
    count.value = data.count
  } catch (e) {
    error.value = String(e)
  } finally {
    loading.value = false
  }
}
</script>
