import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(store).mount('#app');
