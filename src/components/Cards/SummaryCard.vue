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
  <div class="summary--container">
    <mdicon :name="icon"/>
    <div class="summary--content">
      <text-base>
        {{ label }}
      </text-base>
      <span>
        {{ amount }}
      </span>
    </div>
  </div>
</template>