import { createApp } from 'vue';
import { router } from './router';
import './style.css';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import '../node_modules/ais-ui/lib/ais-ui.css';
// import '../node_modules/ais-ui/lib/style.css';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).use(router).use(VueAxios, axios).mount('#app');
