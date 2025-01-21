<template>
  <div id="app">
    <h1>Vuex Events Example</h1>
    <!-- state example -->
    <p>count : {{ count }}</p>
    <button @click="increment">increment</button>
    <!-- Actions Example -->
    <button @click="fetchItems">fetch items</button>
    <p>total items: {{ itemCount }}</p>
    <!-- render items -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState(['count', 'items']),
    ...mapGetters(['itemCount']),
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['fetchItems']),
  },
};
</script>