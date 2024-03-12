import './assets/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Global function to ensure dynamic images are taken into account during build process
const useImage = ((url: string) => {
    return new URL(`/src/${url}`, import.meta.url).href;
});
app.config.globalProperties.$image = useImage;

app.mount('#app')
