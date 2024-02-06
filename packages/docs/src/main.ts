import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import CowDesignUI from '@cow-design/ui';

const app = createApp(App);

app.use(CowDesignUI);

app.mount('#app');
