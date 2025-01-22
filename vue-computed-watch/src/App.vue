<template>
  <div id="app">
    <h1>Computed and Watch Example</h1>
    <!-- Computed Example -->
    <section>
      <h2>Computed Example</h2>
      <input v-model="message" placeholder="Type something..." />
      <p>Original Message: {{ message }}</p>
      <p>Reversed Message: {{ reversedMessage }}</p>
    </section>
    <!-- Watch Example -->
    <section>
      <h2>Watch Example</h2>
      <p>Counter: {{ count }}</p>
      <button @click="count++">Increase Counter</button>
      <p v-if="logMessage">{{ logMessage }}</p>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '',
      count: 0,
      logMessage: '',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  watch: {
    count(newValue, oldValue) {
      this.logMessage = `Count changed from ${oldValue} to ${newValue}`;
      setTimeout(() => {
        this.logMessage = ''; // 메시지를 잠시 보여준 후 제거
      }, 2000);
    },
  },
};
</script>
<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

section {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>