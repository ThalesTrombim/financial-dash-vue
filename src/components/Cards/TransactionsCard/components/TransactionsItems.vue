<script lang="ts" setup>
interface TransactionsItemsPropsTypes {
  name: string
  brand: string
  type: string
  amount: number
  date: string
}

defineProps<TransactionsItemsPropsTypes>();

</script>

<template>
  <div class="transactions-items--container">
    <div class="transactions-items--name text-sm">
      <img src="https://http2.mlstatic.com/D_NQ_NP_2X_821379-MLA46114620180_052021-F.webp" alt="">
      <div>
        <text-base>
          {{ name }}
        </text-base>
        <text-base class="text-gray text-xsm">
          {{ brand }}
        </text-base>
      </div>
    </div>
    <div class="transactions-items--type text-gray">
      {{ type }}
    </div>
    <div class="transactions-items--amount">
      {{ amount }}
    </div>
    <div class="transactions-items--date text-gray">
     {{ date }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transactions-items {
  &--container {
    display: flex;
  }
  &--name {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 25%;

    img {
      width: 40px;
    }
  }
  &--type, &--amount, &--date {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>