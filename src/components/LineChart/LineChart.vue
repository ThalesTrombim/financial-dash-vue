<script lang="ts" setup>
import chart from './chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

const chartData = {
  labels: [ 'January', 'February', 'March' ],
  datasets: [ { data: [40, 20, 12] } ]
}
const chartOptions = {
  responsive: true
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

</script>

<template>
  <chart 
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>