<template>
    <div class="dashboard">
        <h1>마이페이지 통계 대시보드</h1>
        <div class="chart-container">
            <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Chart.js에서 필요한 요소들을 등록
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'MyPage',
    components: {
        Bar,
    },
    data() {
        return {
            loaded: false, // 데이터 로딩 상태
            chartData: {
                labels: [],  // 부서명
                datasets: [
                    {
                        label: '부서별 인원수',
                        data: [],  // 부서별 인원수
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };
    },
    methods: {
        fetchDepartmentData() {
            // 서버에서 데이터 가져오기 (서버 URL은 실제 API URL로 수정 필요)
            axios.get('http://localhost:8080/api/mypage/count')
                .then(response => {
                    const data = response.data; // 서버에서 받은 데이터
                    console.log(data);
                    this.chartData.labels = data.map(department => department.DEPARTMENTNAME);
                    console.log(data.map(department => department.DEPARTMENTNAME));
                    this.chartData.datasets[0].data = data.map(department => department.EMPCNT);
                    console.log(data.map(department => department.EMPCNT));
                    // 데이터가 로드되면 `loaded` 상태를 true로 설정하여 차트를 렌더링
                    this.loaded = true;
                })
                .catch(error => {
                    console.error('데이터를 가져오는 중 오류 발생:', error);
                });
        },
    },
    mounted() {
        this.fetchDepartmentData(); // 컴포넌트가 마운트되면 데이터 가져오기
    },
};
</script>

<style scoped>
.dashboard {
    text-align: center;
}

.chart-container {
    width: 80%;
    margin: 0 auto;
}
</style>