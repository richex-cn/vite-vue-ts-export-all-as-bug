import { createApp } from 'vue';
import App from './App.vue';
import { env } from './env';

console.log(env);

const app = createApp(App);
app.mount('#app');
