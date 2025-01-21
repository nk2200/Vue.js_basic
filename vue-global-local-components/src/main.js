import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue';

//vue 앱 생성
const app = createApp(App);

//전역 컴포넌트 등록
app.component('GlobalComponent', GlobalComponent);

//앱 마운트
app.mount('#app');