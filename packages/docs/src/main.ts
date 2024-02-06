import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import CowDesignUI from '@cow-design/ui';
import '@cow-design/ui/packages/style/index.less';

const app = createApp(App);

app.use(CowDesignUI);

app.mount('#app');
