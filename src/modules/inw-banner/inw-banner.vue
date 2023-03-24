<template>
  <div class="wrapper">
    <inw-header />
    <div class="container inw-banner">
      <h1 class="inw-banner__title">Exclusive Deals of Furniture Collection</h1>
      <p class="inw-banner__description">
        Explore different categories. Find the best deal
      </p>
      <inw-button-link class="inw-banner__button" :link="'products'"
        >Shop Now</inw-button-link
      >
    </div>
  </div>
</template>

<script setup>
import inwButtonLink from "../../components/inw-button-link/inw-button-link.vue";
import inwHeader from "../inw-header/inw-header.vue";
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.wrapper {
  background:center / cover no-repeat url("../../assets/banner.png");
}
.inw-banner {
  padding-top: 240px;
  padding-bottom: 350px;
  display: flex;
  flex-direction: column;
  gap: 54px;
  &__title {
    font-size: $title-font-size;
    font-family: $title-font;
    line-height: 1.34;
    max-width: 668px;
    font-weight: 700;
  }
  &__button {
    max-width: 230px;
  }
}
@media screen and (max-width: 768px) {
  .inw-banner {
    padding-top: 85px;
    padding-bottom: 176px;
    gap: 0px;
    &__title {
      font-size: 48px;
      margin-bottom: 16px;
    }
    &__description {
      margin-bottom: 52px;
    }
  }
}
@media screen and (max-width: 590px) {
  .inw-banner {
    padding-top: 144px;
    padding-bottom: 248px;
    gap: 0px;
    &__title {
      font-size: 36px;
      margin-bottom: 16px;
      text-align: center;
    }
    &__description {
      margin-bottom: 52px;
      text-align: center;
    }
    &__button {
    align-self: center;
    padding-left: 40px;
    padding-right: 40px;
  }
  }
}
</style>
