<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BHeader from './components/BHeader.vue'

const route = useRoute()

const showHeader = computed(() => {
  return route.name !== 'CountBookAPI'
})
</script>

<template>
  <div class="main-container">
    <header v-if="showHeader">
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.main-container {
  min-height: 100vh;
  background-color: #ffffff;
}

.main-box {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
}
</style>
