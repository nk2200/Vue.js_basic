<template>
  <div id="app">
    <header>
      <h1>Vue Axios with Vite</h1>
    </header>
    <main>
      <ItemList />
    </main>
  </div>
</template>
<script>
import ItemList from './components/ItemList.vue';
export default {
  name: 'App',
  components: {
    ItemList,
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

header {
  background-color: #42b983;
  color: white;
  padding: 10px 0;
}

main {
  padding: 20px;
}
</style>