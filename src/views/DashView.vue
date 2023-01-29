<script lang="ts" setup>
import SummaryCard from '../components/Cards/SummaryCard.vue'
import TransactiosCard from '../components/Cards/TransactionsCard/TransactiosCard.vue';
import LineChart from '../components/LineChart/LineChart.vue';
</script>

<template>
  <div class="dash-view--container">
    <text-title-view>
      Dashboard
    </text-title-view>
    <div class="summary--content">
      <summary-card 
        label="Total balance"
        icon="Speedometer"
        :amount="40.289"
      />
    </div>
    <div class="transactions--content">
      <transactios-card />
    </div>
    <div class="char--container">
      <LineChart />
    </div>
  </div>
</template>

<style scoped>
.dash-view--container {
  padding: 24px;
}
.summary--content {
  margin-top: 40px;
}
</style>