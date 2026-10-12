<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
        <h1>Create an Account</h1>
        <p>
          <input type="text" placeholder="Email" v-model="email" class="form-control mb-2">
        </p>
        <p>
          <input type="password" placeholder="Password" v-model="password" class="form-control mb-2">
        </p>
        <p>
          <button class="btn btn-primary" @click="register">Save to Firebase</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Firebase Register Successful!')
      router.push('/FireLogin')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}
</script>
