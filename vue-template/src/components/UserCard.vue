<template>
    <div class="user-card">
        <h2>{{ user.name }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Age: {{ user.age }}</p>
        <!-- 속성 바인딩 -->
        <img :src="user.avatar" alt="User Avatar" />
        <!-- 이벤트 핸들링 -->
        <button @click="showMessage">Say Hello</button>
        <!-- 조건부 렌더링 -->
        <p v-if="user.active">User is active</p>
        <p v-else>User is inactive</p>
    </div>
</template>
<script>
export default {
    name: "UserCard",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    methods: {
        showMessage() {
            alert(`Hello, ${this.user.name}!`);
        },
    },
};
</script>
<style scoped>
.user-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    text-align: center;
}

.user-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 8px;
}
</style>
