<template>
  <div class="wrapper">
    <div class=" inw-carousel ">
      <h3 class="inw-carousel__title container">Popular Products</h3>
      <div class="inw-slider">
        <inw-slider >
        </inw-slider>
      </div>
      <inw-button-link class="inw-carousel__button container" :link="'products'"
        >Explore all items &#10230;</inw-button-link
      >
    </div>
  </div >
</template>

<script setup>
import inwButtonLink from "../../components/inw-button-link/inw-button-link.vue";
import inwSlider from "./components/inw-slider.vue";
import inwSliderItem from "./components/inw-slider-item.vue";
import char1 from '../../assets/chair1.png'
import char2 from '../../assets/chair 2.png'
import char3 from '../../assets/chair3.png'
import char4 from '../../assets/chair4.png'

const slides = [
  {
    id: 0,
    name: "Armchair",
    description: "Light single chair",
    price: "145",
    img: {
      url: char1,
      alt: "Armchair",
    },
    bgColor: "#CAF3E5",
  },
  {
    id: 1,
    name: "Premium Sofa",
    description: "Light single chair",
    price: "145",
    img: {
      url: char2,
      alt: "Premium Sofa",
    },
    bgColor: "#E0EFF6",
  },
  {
    id: 2,
    name: "Minimal Sofa",
    description: "Light single chair",
    price: "145",
    img: {
      url: char3,
      alt: "Minimal Sofa",
    },
    bgColor: "#EEEBFF",
  },
  {
    id: 3,
    name: "Dining Chair",
    description: "Light single chair",
    price: "145",
    img: {
      url: char4,
      alt: "Dining Chair",
    },
    bgColor: "#FFF4E7",
  },
];

const options = {
  items: slides.length,
  margin: 30,
  nav: true,
  dots: true,
  loop: false,
  timing: "cubic-bezier(0, 0.72, 0.64, 1.06)",
  offset: 1,
  prevNav: "Туда",
  nextNav: "Сюда",
  sibling: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    999: {
      items: 5,
    },
  },
};


</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.inw-slider {
  max-width: 1620px;
  align-self: flex-end;
  padding: 0 20px;
}
.wrapper {
  background-image:  url('../../assets/carousel-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.inw-carousel {
  padding-top: 116px;
  padding-bottom: 113px;
  display: flex;
  flex-direction: column;
  gap: 54px;
  &__title {
    font-size: $title-font-size;
    font-family: $title-font;
    line-height: 1.34;
    font-weight: 700;
    text-align: center;
  }
  &__carousel {
    height: 700px;
  }
  &__button {
    width: 265px;
    align-self: center;
    font-size: $second-font-size;
  }
}
.inw-carousel-item {
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 84px 40px 60px;
}
@media screen and (max-width: 1680px) {
  .inw-slider {
    max-width: 1350px;
    align-self: center;
    padding: 0 0px;
  }
}
@media screen and (max-width: 1450px) {
  .inw-slider {
    max-width: 1275px;
  }
}
@media screen and (max-width: 1375px) {
  .inw-slider {
    max-width: 1000px;

  }
}
@media screen and (max-width: 1100px) {
  .inw-slider {
    max-width: 800px;

  }
}
@media screen and (max-width: 850px) {
  .inw-slider {
    max-width: 600px;

  }
}
@media screen and (max-width: 768px) {
  .inw-slider {
    max-width: 600px;
    padding: 0px 0px 0px 20px;

  }
  .inw-carousel {
    padding-top: 60px;
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 590px) {
  .inw-slider {
    max-width: 398px;
    padding: 0px 0px 0px 20px;

  }
  .inw-carousel {
    padding-top: 50px;
    padding-bottom: 80px;
  }
  .inw-carousel__title {
    font-size: 36px;
  }
}
</style>
