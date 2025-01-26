<template>
  <div id="app">
    <my-page />
  </div>
</template>

<script>
import MyPage from './components/Mypage.vue'

export default {
  name: 'App',
  components: {
    MyPage, // MyPage 컴포넌트를 App.vue에 포함
  },
};
</script>

<style>
/* 전역 스타일을 여기에 추가할 수 있습니다 */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}
</style>
