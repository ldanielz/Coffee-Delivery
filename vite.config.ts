import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'build') {
    return {
      base: '/Coffee-Delivery/',
      plugins: [react()],
    }
  } else {
    return {
      plugins: [react()],
    }
  }
})
