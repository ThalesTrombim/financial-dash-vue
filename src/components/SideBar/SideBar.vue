<script lang="ts" setup>
import NavItem from './components/NavItem.vue';
</script>

<template>
  <div class="sidebar--container">
    <div class="sidebar-nav--content">
      <h1>Logo</h1>
      <ul class="sidebar-nav--items">
        <li>
          <nav-item 
            label="Dashboard"
            icon="Speedometer"
            page-id="dash"
            url="#"
            isActive
          />
        </li>
        <li>
          <nav-item 
            label="Dashboard"
            icon="Speedometer"
            page-id="dash"
            url="#"
          />
        </li>
      </ul>
    </div>
    <div class="sidebar-down">
      outros items
    </div>
  </div>
</template>

<style scoped>
.sidebar--container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  height: 100vh;
}
.sidebar-nav--items {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 2px;
}
</style>