<template>
  <RouterLink class="inw-button-link" :to="{ name: link }">
    <slot></slot>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.inw-button-link {
  background: $light-green;
  color: $white;
  border-radius: 10px;
  padding: 24px 0;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
}

@media screen and (max-width: 590px) {
  .inw-button-link {
    padding: 16px 0;
    font-size: 18px;
  }
}
</style>
