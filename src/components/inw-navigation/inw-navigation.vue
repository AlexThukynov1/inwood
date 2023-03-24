<template>
  <nav class="inv-nav" v-scroll-lock="store.state.isMenuVisible">
    <button @click="menuVisibleTogle" class="btn">X</button>
    <ul class="inv-nav__list">
      <inw-navigation-item :links="items" />
    </ul>
  </nav>
</template>

<script setup>
import inwNavigationItem from "./components/inw-navigation-item.vue";
import vScrollLock from 'v-scroll-lock';
import store from "../../store";

const menuVisibleTogle = () => {
  store.dispatch('changeVisible')
}

const items = [
  {
    id: 0,
    href: "home",
    label: "Home",
  },
  {
    id: 1,
    href: "products",
    label: "Products",
  },
  {
    id: 2,
    href: "categories",
    label: "Categories",
  },
  {
    id: 3,
    href: "about",
    label: "About",
  },
  {
    id: 4,
    href: "contacts",
    label: "Contacts",
  },
];
</script>

<style lang="scss" scoped>
.btn {
  display: none;
}
.inv-nav {
  position: relative;
  &__list {
    display: flex;
    gap: 47px;
    list-style: none;
  }
}
@media screen and (max-width: 1350px) {
  .inv-nav__list {
    gap:20px
  }
}
@media screen and (max-width: 950px) {
  .inv-nav {
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vh;
    height: 100vh;
    background-color: aliceblue;
  }
  html {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  body {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
.btn {
  display: block;
}
  .inv-nav__list {
   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    width:100%;


  }
}
@media screen and (max-width: 950px) {
  .inv-nav {
    width: 100%;
  }
}
</style>
