import { createApp } from 'vue';
import App from './App.vue';
import { bar } from './foo';

console.log(bar);

const app = createApp(App);
app.mount('#app');
