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
  </div>
</template>

<style lang="scss" scoped>
.transactions-card {
  &--container {
    border: 1px solid #ece8e8;
    border-radius: 10px;
    padding: 20px;
  }

  &--header { 
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
}
</style>