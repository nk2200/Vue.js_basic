import axios from 'axios';
// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // 테스트 API
    headers: {
        'Content-Type': 'application/json',
    },
});
// GET 요청: 아이템 리스트 가져오기
export const fetchItems = () => {
    return apiClient.get('/posts');
};
// 추가 API 요청 메서드도 여기에 정의 가능
