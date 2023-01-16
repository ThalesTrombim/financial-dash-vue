<script lang="ts" setup>
import SummaryCard from '../components/Cards/SummaryCard.vue'
import TransactiosCard from '../components/Cards/TransactionsCard/TransactiosCard.vue';
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
  </div>
</template>

<style scoped>
.dash-view--container {
  padding: 24px;
  background: red;
}
.summary--content {
  margin-top: 40px;
}
</style>