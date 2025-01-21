<template>
  <div id="app">
    <h1>Vue 전역 및 지역 컴포넌트</h1>
    <!-- 전역 컴포넌트 -->
    <GlobalComponent message="Hello form App.vue!" />
    <hr />
    <!-- 지역 컴포넌트 -->
    <LocalComponent @custom-event="handleCustomEvent" />
    <p>자식 컴포넌트로부터 받은 메시지 : {{ childMessage }}</p>
  </div>
</template>

<script>
// 지역컴포넌트는 import 한 후 등록
import LocalComponent from './components/LocalComponent.vue';
export default {
  name: 'App',
  components: {
    LocalComponent, //지역 컴포넌트 등록
  },
  data() {
    return {
      childMessage: '',
    };
  },
  methods: {
    handleCustomEvent(message) {
      this.childMessage = message;
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>