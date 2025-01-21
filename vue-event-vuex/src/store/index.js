import { createStore } from 'vuex';

const store = createStore({
    //state : vuex에서 관리하는 중앙 집중식 데이터
    state: {
        count: 0,
        items: [],
    },
    //mutations: 상태(state)를 동기적으로 변경함
    mutations: {
        increment(state) {
            state.count++;
        },
        setItems(state, items) {
            state.items = items;
        },
    },
    //Actions : 비동기 작업이나 상태를 변경하기 위한 mutation을 커밋함
    actions: {
        async fetchItems({ commit }) {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
            commit('setItems', data);
        },
    },
    //getters: state기반으로 계산된 데이터를 제공함
    getters: {
        itemCount: (state) => state.items.length,
    },
});
export default store;