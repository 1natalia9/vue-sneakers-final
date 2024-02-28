// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
// export default defineConfig({
//   basic: `/vue-sneakers-final/`,
//   plugins: [
//     vue(),
//     vueJsx(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

const {defineConfig} =require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `/vue-sneakers-final/`,
  transpileDependencies: true
})
