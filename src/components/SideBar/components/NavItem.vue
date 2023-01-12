<script lang="ts" setup>
interface NavItemsPropsTypes {
  label: string
  icon: string
  pageId: string
  url: string
  isActive: boolean
}

withDefaults(defineProps<NavItemsPropsTypes>(), {
  isActive: false
})
</script>

<template>
  <a :href="url" class="nav-item--container text-gray" :class="{'is-active' : isActive}">
    <mdicon :name="icon"/>
    <text-base class="text-sm">{{ label }}</text-base>
  </a>
</template>

<style lang="scss" scoped>
.nav-item--container {
  width: 150px;
  padding: 10px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    filter: brightness(.9);
    background-color: #9748ff;
  }
}
.is-active {
  background-color: #9748ff;
  color: #FFF;
}
</style>