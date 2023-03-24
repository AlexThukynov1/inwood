<template>
  <header class="inw-header">
    <div class="container inw-header__content-wrapper">
      <RouterLink :to="{ name: 'home' }" class="inw-header__logo"
        ><img  :src="logo" alt="Inwood logo"
      /></RouterLink>
      <button @click="menuVisibleTogle" :class="{'hide': store.state.isMenuVisible}" class="btn">
      <img :src="btnIcon" alt="">
      </button>
      <inw-navigation class="nav-visible" />
      <div class="inv-header__icons-bar icons-bar">
        <img class="icons-bar__icon" :src="searchIcon" alt="search icon" />
        <img class="icons-bar__icon" :src="basketIcon" alt="basket icon" />
        <img class="icons-bar__icon" :src="userIcon" alt="user icon" />
      </div>
    </div>
  </header>
  <inw-navigation v-if="store.state.isMenuVisible" v-scroll-lock="store.state.isMenuVisible" class="nav-mobile-visible" />
</template>

<script setup>
import logo from "../../assets/Logo.png";
import searchIcon from "../../assets/search-icon.png";
import basketIcon from "../../assets/basket-icon.png";
import userIcon from "../../assets/user-icon.png";
import inwNavigation from "../../components/inw-navigation/inw-navigation.vue";
import store from '../../store/index'
import btnIcon from '../../assets/btn-icon.png'
import { ref } from "vue";
import vScrollLock from 'v-scroll-lock';

const menuVisibleTogle = () => {
  store.dispatch('changeVisible')
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.inw-header {
  padding-top: 26px;
  padding-bottom: 26px;
  background-color: rgb(206, 224, 228, 0.5);

  .inw-header__content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 1;
    z-index: 2;
    .icons-bar {
      display: flex;
      align-items: center;
      gap: 58px;
    }
  }
}
.btn {
  display: none;
}
.nav-mobile-visible {
  display: none;
}
.nav-visible {
  display: flex;
}
@media screen and (max-width: 1350px) {
  .inw-header {
    .inw-header__content-wrapper {
      .icons-bar {
        gap: 30px;
      }
    }
  }
}
@media screen and (max-width: 950px) {
  .nav-mobile-visible {
    display: flex;
  }
  .nav-visible {
    display: none;
  }
  .btn {
    display: block;
  }
  .inw-header {
    .inw-header__content-wrapper {

      .icons-bar {
        gap: 85px;
      }
    }
  }
}
@media screen and (max-width:550px) {
  .inw-header {
    .inw-header__logo {
      order:2
    }
    
    .inw-header__content-wrapper {

      .btn {
        order: 1;
      }
      .icons-bar {
        gap: 12px;
        order: 3;
      }
    }
  }
}
</style>
