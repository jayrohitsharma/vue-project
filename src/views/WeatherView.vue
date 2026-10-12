<template>
  <div class="container">
    <div class="header text-center py-4">
      <h1>WEATHER APP</h1>
      <div class="search-bar d-flex justify-content-center flex-wrap gap-2 mb-3">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="form-control search-input"
          style="max-width: 16rem"
        >
        <button type="button" class="btn btn-secondary search-button" @click="searchByCity">
          Search
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="fetchCurrentLocationWeather"
        >
          Use my location
        </button>
      </div>
    </div>

    <main class="text-center">
      <div v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon">
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
      <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const apikey = (import.meta.env.VITE_OPENWEATHER_API_KEY || '').trim()

const city = ref('Clayton, AU')
const weatherData = ref(null)
const error = ref(null)

const temperature = computed(() => {
  if (!weatherData.value) return null
  return Math.round(weatherData.value.main.temp)
})

const iconUrl = computed(() => {
  return weatherData.value
    ? `https://openweathermap.org/img/wn/${weatherData.value.weather[0].icon}@2x.png`
    : null
})

const fetchWeatherData = async (url) => {
  try {
    error.value = null
    const response = await axios.get(url)
    weatherData.value = response.data
  } catch (err) {
    console.error('Error fetching weather data:', err)
    const msg = err.response?.data?.message
    error.value = msg
      ? `Weather API: ${msg}`
      : 'Could not load weather. Restart dev server after editing .env.local, then try Search.'
    weatherData.value = null
  }
}

const weatherUrl = (params) => {
  const query = new URLSearchParams({ ...params, units: 'metric', appid: apikey })
  return `https://api.openweathermap.org/data/2.5/weather?${query}`
}

const searchByCity = async () => {
  if (!apikey) {
    error.value = 'Add VITE_OPENWEATHER_API_KEY to .env.local'
    return
  }
  const q = city.value.trim()
  if (!q) {
    error.value = 'Enter a city name (e.g. Clayton, AU).'
    return
  }
  await fetchWeatherData(weatherUrl({ q }))
}

const fetchCurrentLocationWeather = () => {
  if (!apikey) {
    error.value = 'Add VITE_OPENWEATHER_API_KEY to .env.local'
    return
  }
  if (!navigator.geolocation) {
    error.value = 'Geolocation is not supported.'
    return
  }
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords
      await fetchWeatherData(weatherUrl({ lat: latitude, lon: longitude }))
    },
    () => {
      searchByCity()
    },
  )
}

onMounted(() => {
  if (!apikey) {
    error.value = 'Add VITE_OPENWEATHER_API_KEY to .env.local, then restart npm run dev.'
    return
  }
  fetchCurrentLocationWeather()
})
</script>
