import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true }),
    Components({
      dirs: [
        './src/shared/components'
      ],
      extensions: ['vue'],
      deep: true,
      dts: './src/app/components.d.ts',
    }),
    AutoImport(
      {
        imports: [ 'vue', 'vue-router', 'pinia' ],
        dirs: [
          './src/modules/**/stores',
          './src/modules/**/types',
          './src/modules/**/enums',
        ],
        dts: './src/app/auto-imports.d.ts',
      }
    )
  ],
  // root application
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
  },
  server: {
    host: true,
    port: 3000,
    hmr: {
      protocol: 'ws', // tetap ws karena Vite belum support hmr tanpa ws secara native
      host: 'localhost',
      port: 3000
    }
  }
})
