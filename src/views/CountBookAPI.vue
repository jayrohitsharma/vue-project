<template>
  <pre>{{ jsondata }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { getBookCountUrl } from '../config/cloudFunctions'

const jsondata = ref('')

const getBookCountAPI = async () => {
  try {
    const response = await axios.get(getBookCountUrl)
    jsondata.value = JSON.stringify(response.data, null, 2)
  } catch (err) {
    console.error(err)
    jsondata.value = JSON.stringify({ error: 'Error fetching book count' }, null, 2)
  }
}

onMounted(() => {
  getBookCountAPI()
})
</script>
