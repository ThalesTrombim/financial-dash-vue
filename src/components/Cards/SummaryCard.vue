<script lang="ts" setup>
interface SummaryCardPropsTypes {
  isActive?: boolean
  label: string
  icon: string
  amount: number
}

withDefaults(defineProps<SummaryCardPropsTypes>(), {
  isActive: false
})
</script>

<template>
  <div class="summary--container" :class="{ 'is-active' : isActive }">
    <div class="summary-icon--area">
      <mdicon :name="icon" size="20" :class="{ 'is-active-icon' : isActive }" />
    </div>
    <div class="summary--content">
      <text-base>
        {{ label }}
      </text-base>
      <span>
        R${{ amount }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" setup>
.summary--container {
  display: flex;
  padding: 20px;
  gap: 10px;
  min-width: 200px;
  border-radius: 10px;
  background: #f8f8f8;
}
.summary--content {
  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
  span {
    font-weight: bold;
    font-size: 18px;
  }
}
.summary-icon--area {
  color: #000;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
  background-color: #ece8e8;
}
.is-active-icon {
  background: #FFF;
  color: #9748ff;
}
</style>