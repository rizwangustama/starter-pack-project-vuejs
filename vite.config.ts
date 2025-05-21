import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true })
  ],
  // root: './src/app', // root application
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@ui': path.resolve(__dirname, 'src/shared/components/ui'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
    },
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  }
})
