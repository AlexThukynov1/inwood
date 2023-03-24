<template>
  <div :class="{'lock': store.state.isMenuVisible}">
    <RouterView/>
  </div>
</template>

<script setup>
import store from './store';
</script>

<style lang="scss" scoped>

</style>