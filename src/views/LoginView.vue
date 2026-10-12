<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center">Library Login</h1>
        <p class="text-center text-muted">
          Members only. Use the lab credentials to access About.
        </p>

        <form @submit.prevent="submitLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              id="username"
              type="text"
              class="form-control"
              v-model="username"
            >
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              v-model="password"
            >
          </div>
          <div v-if="error" class="text-danger mb-3">{{ error }}</div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>

        <p class="text-center text-muted mt-3 small">
          Demo login: <code>student</code> / <code>library123</code>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login } from '../auth'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')
const error = ref(null)

const submitLogin = () => {
  error.value = null

  if (login(username.value, password.value)) {
    const redirect = route.query.redirect || '/about'
    router.push(redirect)
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>
