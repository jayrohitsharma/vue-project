import { ref } from 'vue'

// Hardcoded lab credentials (Week 5 D/HD task)
export const VALID_USERNAME = 'student'
export const VALID_PASSWORD = 'library123'

export const isAuthenticated = ref(false)

export const login = (username, password) => {
  const ok =
    username === VALID_USERNAME && password === VALID_PASSWORD

  isAuthenticated.value = ok
  return ok
}

export const logout = () => {
  isAuthenticated.value = false
}
