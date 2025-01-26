import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';

// axios를 전역에서 사용할 수 있게 설정
const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.mount('#app');
