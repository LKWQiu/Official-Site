import { createApp } from 'vue';
import App from './App.vue';
import router from '../router/index.js'; // Ensure the correct path
import './style.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
