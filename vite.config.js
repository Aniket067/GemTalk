import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GemTalk/',
  define:{
    'process.env.GEMINI_API_KEY':JSON.stringify(process.env.GEMINI_API_KEY)
  }
})
