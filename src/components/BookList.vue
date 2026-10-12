<template>
  <div class="mt-4">
    <h1>Books with ISBN &gt; 1000</h1>
    <p class="text-muted small">
      Query: <code>where('isbn', '&gt;', 1000)</code>,
      <code>orderBy('isbn')</code>,
      <code>limit(5)</code>
    </p>
    <ul class="list-group mb-3">
      <li
        v-for="book in books"
        :key="book.id"
        class="list-group-item d-flex flex-wrap align-items-center justify-content-between gap-2"
      >
        <span>{{ book.name }} (ISBN: {{ book.isbn }})</span>
        <span class="btn-group btn-group-sm">
          <button type="button" class="btn btn-outline-secondary" @click="updateBook(book)">
            Update
          </button>
          <button type="button" class="btn btn-outline-danger" @click="deleteBook(book)">
            Delete
          </button>
        </span>
      </li>
    </ul>
    <p v-if="books.length === 0" class="text-muted">No books match the query yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

const books = ref([])

const fetchBooks = async () => {
  try {
    const q = query(
      collection(db, 'books'),
      where('isbn', '>', 1000),
      orderBy('isbn'),
      limit(5),
    )
    const querySnapshot = await getDocs(q)
    const booksArray = []
    querySnapshot.forEach((docSnap) => {
      booksArray.push({ id: docSnap.id, ...docSnap.data() })
    })
    books.value = booksArray
  } catch (error) {
    console.error('Error fetching books: ', error)
    alert(
      'Could not load books. If Firestore asks for an index, open the link in the browser console and create it.',
    )
  }
}

const updateBook = async (book) => {
  const newName = window.prompt('Enter new book name:', book.name)
  if (newName === null || newName.trim() === '') {
    return
  }

  try {
    await updateDoc(doc(db, 'books', book.id), { name: newName.trim() })
    alert('Book updated successfully!')
    await fetchBooks()
  } catch (error) {
    console.error('Error updating book: ', error)
    alert(error.message)
  }
}

const deleteBook = async (book) => {
  if (!window.confirm(`Delete "${book.name}" (ISBN: ${book.isbn})?`)) {
    return
  }

  try {
    await deleteDoc(doc(db, 'books', book.id))
    alert('Book deleted successfully!')
    await fetchBooks()
  } catch (error) {
    console.error('Error deleting book: ', error)
    alert(error.message)
  }
}

onMounted(() => {
  fetchBooks()
})

defineExpose({ fetchBooks })
</script>
