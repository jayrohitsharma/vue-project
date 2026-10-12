<template>
  <div class="container mt-4">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div class="mb-3">
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Add Book</button>
    </form>

    <BookList ref="bookListRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'
import BookList from '../components/BookList.vue'

const isbn = ref('')
const name = ref('')
const bookListRef = ref(null)

const addBook = async () => {
  const isbnNumber = Number(isbn.value)
  if (isNaN(isbnNumber)) {
    alert('Please enter a valid ISBN number.')
    return
  }

  try {
    await addDoc(collection(db, 'books'), {
      isbn: isbnNumber,
      name: name.value,
    })
    isbn.value = ''
    name.value = ''
    alert('Book added successfully!')
    bookListRef.value?.fetchBooks()
  } catch (error) {
    console.error('Error adding book: ', error)
    alert(error.message)
  }
}
</script>
