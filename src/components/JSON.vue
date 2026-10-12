<!-- JSONLab.vue -->
<template>
  <div class="json-lab">
    <header class="page-header">
      <p class="page-label">FIT5032 · Week 2 Lab</p>
      <h1>jsharma-library</h1>
      <p class="page-intro">
        Working with <code>authors.json</code> and <code>bookstores.json</code>
        using <code>v-for</code> and <code>v-if</code>.
      </p>
    </header>

    <!-- JSON Arrays -->
    <section class="panel">
      <h2>Working with JSON Arrays</h2>
      <p class="panel-note">
        <code>authors.json</code> - {{ authors.length }} author records
      </p>

      <div class="block">
        <h3>Activity 3.1 - Iterating through Arrays</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Born</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="author in authors" :key="author.id">
              <td>{{ author.name }}</td>
              <td>{{ author.birthYear }}</td>
              <td>{{ author.nationality }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="block">
        <h3>Activity 3.2 - Filtering Arrays</h3>
        <p class="block-note">Authors born after 1850 ({{ modernAuthors.length }} results):</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Born</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="author in modernAuthors" :key="author.id">
              <td>{{ author.name }}</td>
              <td>{{ author.birthYear }}</td>
              <td>{{ author.genres.join(', ') }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="block">
        <h3>Activity 3.3 - Mapping Arrays</h3>
        <p class="block-note">All famous works ({{ allFamousWorks.length }} titles):</p>
        <ol class="numbered-list">
          <li v-for="work in allFamousWorks" :key="work">{{ work }}</li>
        </ol>
      </div>

      <div class="block">
        <h3>Finding in Arrays</h3>
        <p class="block-note">
          Finding by property:
          <strong>{{ orwell?.name }}</strong>
          (born {{ orwell?.birthYear }})
        </p>
      </div>

      <div class="block">
        <h3>Nested Arrays / Objects</h3>
        <p class="block-note">{{ austen?.name }}'s works:</p>
        <!-- [OPTIONAL - NON ASSESSED] Activity 1 -->
        <!-- TODO: CODE TO RENDER LIST OF AUSTEN'S WORKS HERE -->
      </div>
    </section>

    <!-- JSON Objects -->
    <section class="panel">
      <h2>Working with JSON Objects</h2>
      <p class="panel-note">
        <code>bookstores.json</code> - store profile for {{ bookstores.name }}
      </p>

      <div class="block">
        <h3>Accessing Properties</h3>
        <dl class="info-list">
          <div class="info-row">
            <dt>Company</dt>
            <dd>{{ bookstores.name }}</dd>
          </div>
          <div class="info-row">
            <dt>ABN</dt>
            <dd>{{ bookstores.abn }}</dd>
          </div>
          <div class="info-row">
            <dt>Head office</dt>
            <dd>{{ bookstores.headquarters }}</dd>
          </div>
          <div class="info-row">
            <dt>Total stores</dt>
            <dd>{{ bookstores.totalStores }}</dd>
          </div>
          <div class="info-row">
            <dt>Contact</dt>
            <dd>{{ bookstores.phone }} · {{ bookstores.email }}</dd>
          </div>
        </dl>
      </div>

      <div class="block">
        <h3>Iterating Object Properties</h3>
        <p class="block-note">Store types:</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(count, type) in bookstores.storeTypes" :key="type">
              <td>{{ type }}</td>
              <td>{{ count }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="block">
        <h3>Nested Objects</h3>
        <p class="block-note">Opening hours:</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Open</th>
              <th>Close</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hours, day) in bookstores.openingHours" :key="day">
              <td>{{ day }}</td>
              <td>{{ hours.open }}</td>
              <td>{{ hours.close }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="block">
        <h3>Working with Arrays in Objects</h3>
        <p class="block-note">
          We operate in: {{ bookstores.countries.join(', ') }}
        </p>
        <p class="block-note">Top sellers this quarter:</p>
        <ol class="numbered-list">
          <li v-for="(book, index) in bookstores.topSellers" :key="book">
            {{ index + 1 }}. {{ book }}
          </li>
        </ol>
      </div>
    </section>

    <!-- v-if -->
    <section class="panel">
      <h2>v-if &amp; v-else</h2>
      <p class="panel-note">Toggle visibility based on a condition.</p>

      <div class="block toggle-block">
        <button
          type="button"
          class="btn"
          :aria-pressed="showMessage"
          @click="toggleMessage"
        >
          Toggle Message
        </button>

        <p v-if="showMessage" class="message message--visible">
          You are a Vue superstar.
        </p>
        <p v-else class="message message--hidden">
          Click the button to see a message.
        </p>
      </div>
    </section>

    <section class="panel">
      <h2>Attribute, Class &amp; Style Binding</h2>
      <p class="panel-note">
        Using <code>v-bind</code> (shorthand <code>:</code>) to bind attributes, classes, and styles.
      </p>

      <div class="block">
        <h3>5.1 - Attribute Binding</h3>
        <p class="block-note">
          <code>:src="imageUrl"</code> binds the image source to a reactive variable.
        </p>
        <img :src="imageUrl" alt="jsharma-library" class="bound-image" />
      </div>

      <div class="block">
        <h3>5.2 - Class Binding</h3>
        <p class="block-note">
          <code>:class="{ active: isActive }"</code> toggles a class based on state.
        </p>
        <button
          type="button"
          class="btn btn--toggle"
          :class="{ active: isActive }"
          @click="toggleActive"
        >
          Toggle
        </button>
      </div>

      <div class="block">
        <h3>5.3 - Style Binding</h3>
        <p class="block-note">
          <code>:style="{ color: textColor, fontSize: fontSize + 'px' }"</code> applies inline styles from data.
        </p>
        <p class="dynamic-style" :style="{ color: textColor, fontSize: fontSize + 'px' }">
          Dynamic Style
        </p>
        <button type="button" class="btn" @click="increaseFontSize">
          Increase font size
        </button>
      </div>

      <div class="block">
        <h3>Highlighting Authors</h3>
        <p class="block-note">Click an author to highlight using <code>:class</code> binding:</p>
        <div class="author-buttons">
          <button
            v-for="author in authors"
            :key="author.id"
            type="button"
            class="author-btn"
            :class="{ highlight: selectedAuthorId === author.id }"
            @click="selectAuthor(author.id)"
          >
            {{ author.name }}
          </button>
        </div>
        <p v-if="selectedAuthorId" class="block-note">
          Selected: <strong>{{ selectedAuthor?.name }}</strong>
          (born {{ selectedAuthor?.birthYear }})
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

import authors from "../assets/json/authors.json"
import bookstores from "../assets/json/bookstores.json"
import libraryLogo from "../assets/logo.svg"

const showMessage = ref(false)
const imageUrl = ref(libraryLogo)
const isActive = ref(true)
const textColor = ref("#111111")
const fontSize = ref(18)
const selectedAuthorId = ref(null)

function toggleMessage() {
  showMessage.value = !showMessage.value
}

function toggleActive() {
  isActive.value = !isActive.value
}

function increaseFontSize() {
  fontSize.value += 2
}

function selectAuthor(id) {
  selectedAuthorId.value = id
}

const modernAuthors = computed(() =>
  authors.filter((author) => author.birthYear > 1850)
)

const allFamousWorks = computed(() =>
  authors.flatMap((author) => author.famousWorks.map((work) => work.title))
)

const orwell = computed(() =>
  authors.find((author) => author.name === "George Orwell")
)

const austen = computed(() =>
  authors.find((author) => author.name === "Jane Austen")
)

const selectedAuthor = computed(() =>
  authors.find((author) => author.id === selectedAuthorId.value)
)
</script>

<style scoped>
.json-lab {
  --black: #111111;
  --white: #ffffff;
  --border: #111111;

  max-width: 720px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black);
  background: var(--white);
}

.page-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border);
}

.page-label {
  margin: 0 0 0.5rem;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.page-header h1 {
  margin: 0 0 0.75rem;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.page-intro {
  margin: 0;
  font-size: 16px;
}

.panel {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.panel:last-child {
  border-bottom: none;
}

.panel h2 {
  margin: 0 0 0.5rem;
  font-size: 20px;
  font-weight: 700;
}

.panel-note {
  margin: 0 0 1.25rem;
  font-size: 15px;
}

.block {
  margin-bottom: 1.5rem;
  padding: 1.25rem;
  border: 1px solid var(--border);
}

.block:last-child {
  margin-bottom: 0;
}

.block h3 {
  margin: 0 0 0.75rem;
  font-size: 15px;
  font-weight: 700;
}

.block-note {
  margin: 0 0 0.75rem;
  font-size: 15px;
}

/* Tables */
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.data-table th,
.data-table td {
  padding: 0.6rem 0.75rem;
  text-align: left;
  border: 1px solid var(--border);
  color: var(--black);
}

.data-table th {
  font-weight: 700;
  background: var(--white);
}

.data-table tbody tr:nth-child(even) {
  background: var(--white);
}

/* Lists */
.numbered-list {
  margin: 0;
  padding-left: 1.5rem;
}

.numbered-list li {
  margin-bottom: 0.35rem;
  font-size: 15px;
  color: var(--black);
}

/* Info list */
.info-list {
  margin: 0;
}

.info-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 15px;
}

.info-row:last-child {
  border-bottom: none;
}

.info-row dt {
  margin: 0;
  font-weight: 700;
}

.info-row dd {
  margin: 0;
}

/* Button */
.toggle-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.btn {
  padding: 0.65rem 1.25rem;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  color: var(--white);
  background: var(--black);
  border: 2px solid var(--black);
  cursor: pointer;
}

.btn:hover {
  background: var(--white);
  color: var(--black);
}

.btn:focus-visible {
  outline: 2px solid var(--black);
  outline-offset: 2px;
}

.btn:active {
  transform: scale(0.98);
}

/* Messages */
.message {
  margin: 0;
  padding: 0.75rem 1rem;
  width: 100%;
  max-width: 400px;
  font-size: 15px;
  border: 1px solid var(--border);
  box-sizing: border-box;
}

.message--visible {
  font-weight: 600;
  color: var(--black);
  background: var(--white);
  border-width: 2px;
}

.message--hidden {
  color: var(--black);
  background: var(--white);
}

/* Code */
code {
  padding: 0.1rem 0.35rem;
  font-size: 14px;
  font-family: "SF Mono", "Fira Code", Consolas, monospace;
  color: var(--black);
  background: var(--white);
  border: 1px solid var(--border);
}

/* Bindings */
.bound-image {
  display: block;
  width: 80px;
  height: 80px;
  border: 1px solid var(--border);
}

.btn--toggle.active {
  color: var(--white);
  background: var(--black);
}

.dynamic-style {
  margin: 0 0 0.75rem;
  font-weight: 600;
}

.author-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.author-btn {
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: var(--black);
  background: var(--white);
  border: 1px solid var(--border);
  cursor: pointer;
}

.author-btn:hover {
  border-width: 2px;
}

.author-btn.highlight {
  color: var(--white);
  background: var(--black);
  border-color: var(--black);
}

.author-btn:focus-visible,
.btn:focus-visible {
  outline: 2px solid var(--black);
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .info-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .data-table {
    font-size: 14px;
  }

  .data-table th,
  .data-table td {
    padding: 0.5rem;
  }
}
</style>
