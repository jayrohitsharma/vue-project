<template>
  <pre>{{ jsondata }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { getAllBooksUrl } from '../config/cloudFunctions'

const jsondata = ref('')

const loadAllBooksAPI = async () => {
  try {
    const response = await axios.get(getAllBooksUrl)
    jsondata.value = JSON.stringify(response.data, null, 2)
  } catch (err) {
    console.error(err)
    jsondata.value = JSON.stringify({ error: 'Error fetching books' }, null, 2)
  }
}

onMounted(() => {
  loadAllBooksAPI()
})
</script>
