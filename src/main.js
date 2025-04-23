import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/tailwind.css'

import router from '@/router/index.js';
import Components from '@/components';

const app = createApp(App);

Components.registerComponents(app);

app.use(router);
app.mount("#app");