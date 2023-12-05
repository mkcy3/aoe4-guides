import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  
  const env = loadEnv(mode, process.cwd(), '')
  return {

    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [
      vue(),
      vuetify(),
    ],
    resolve: {
      
    },
    build: { chunkSizeWarningLimit: 1600, }
  } 

})