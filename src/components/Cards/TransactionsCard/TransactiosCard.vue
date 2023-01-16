<script lang="ts" setup>
import TransactionsItems from './components/TransactionsItems.vue'
</script>

<template>
  <div class="transactions-card--container">
    <div class="transactions-card--header">
      <text-title-card>
        Transações recentes
      </text-title-card>
      <a href="#">
        <text-base class="text-blue">
          Ver tudo
        </text-base>
        <mdicon name="ChevronRight" size="20" class="text-blue"/>
      </a>
    </div>
    <div class="transactions-card--content">
      <div class="transactions-card--content--desc text-gray">
        <text-base class="desc">
          NOME
        </text-base>
        <text-base class="desc">
          TIPO
        </text-base>
        <text-base class="desc">
          VALOR
        </text-base>
        <text-base class="desc">
          DATA
        </text-base>
      </div>
      <div class="transactions-card--content--items">
        <transactions-items 
          name="Iphone 11"
          brand="Apple. Inc"
          type="Mobile"
          :amount="3339"
          date="24/12/2022"
        />
        <transactions-items 
          name="Netflix subscription"
          brand="Netflix"
          type="Entertainment"
          :amount="3339"
          date="24/12/2022"
        />
        <transactions-items 
          name="Iphone 11"
          brand="Apple. Inc"
          type="Mobile"
          :amount="3339"
          date="24/12/2022"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.transactions-card {
  &--container {
    border: 1px solid #ece8e8;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
  }

  &--header { 
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;

      &:hover {
        filter: brightness(2);
      }
    }
  }

  &--content {
    &--desc {
      display: flex;
      width: 100%;
      margin-top: 24px;  
      margin-bottom: 12px;

      .desc {
        display: flex;
        width: 25%;
        justify-content: center;
      }
      :nth-child(1) {
        justify-content: flex-start;
      }
    }

    &--items {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
}
</style>