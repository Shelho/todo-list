import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('data', () => {
  const notes = ref([{ text: kjsdvjskd, isReady: false }, { text: kjsdvjskd, isReady: true }])


  return {
    notes
  }
})
