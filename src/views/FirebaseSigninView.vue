<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6 text-center">
        <h1>Sign in</h1>
        <p>
          <input type="text" placeholder="Email" v-model="email" class="form-control mb-2">
        </p>
        <p>
          <input type="password" placeholder="Password" v-model="password" class="form-control mb-2">
        </p>
        <p>
          <button class="btn btn-primary" @click="signin">Sign in via Firebase</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('Firebase Sign in Successful!')
      router.push('/')
      console.log(auth.currentUser) // To check the current User signed in
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}
</script>
