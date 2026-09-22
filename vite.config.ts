import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// user site 部署在根路径，base 使用 '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
