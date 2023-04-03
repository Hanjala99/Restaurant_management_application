import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes';


// bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// bootstrap js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// main custom css file
import '../src/style.css';


createApp(App).use(router).mount('#app')
