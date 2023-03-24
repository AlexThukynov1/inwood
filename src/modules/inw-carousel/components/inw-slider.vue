<template>
  <div class="slider">
    <div class="slides" ref="slides">
      <div
        v-for="(item, index) in slides"
        :key="index"
        :style="{ background: item.bgColor }"
        class="slide"
      >
       <div class="slide__img"> <img  :src="item.img.url" :alt="item.img.alt" /></div>
        <div class="slide__description description">
          <p class="description__title">{{ item.name }}</p>
          <p class="description__text">{{ item.description }}</p>
          <p class="description__price">${{ item.price }}</p>
        </div>
      </div>
    </div>
    <input type="range" v-model="currentSlide" :max="slides.length -3" name="range" class="range" id="">
   <div class="slide__btn-bar">
      <img v-if="currentSlide || currentSlide == slides.length" class="button prev" :src="leftArrow"  @click="prevSlide" alt="Left arrow" />
      <img v-else class="button prev" :src="leftArrowActive"  @click="prevSlide" alt="Left arrow" />
      <img v-if="currentSlide > 0" class="button next" :src="rightArrowActive" @click="nextSlide" alt="Right arrow" />
      <img v-else class="button next" :src="rightArrow" @click="nextSlide" alt="Right arrow" />
   </div>
  </div>
</template>
<script>
import char1 from "../../../assets/chair1.png";
import char2 from "../../../assets/chair 2.png";
import char3 from "../../../assets/chair3.png";
import char4 from "../../../assets/chair4.png";
import leftArrow from '../../../assets/left-arrow-icon.png'
import rightArrow from '../../../assets/right-arrow-icon.png'
import leftArrowActive from '../../../assets/left-arrow-active.png'
import rightArrowActive from '../../../assets/right-arrow-active.png'
export default {
  data() {
    return {
      slides: [
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
        {
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
          name: "Dining Chair",
          description: "Light single chair",
          price: "145",
          img: {
            url: char4,
            alt: "Dining Chair",
          },
          bgColor: "#FFF4E7",
        },
      ],
      slideWidth: 0,
      currentSlide: 0,
      numVisibleSlides: 1,
      leftArrow,
      rightArrow,
      leftArrowActive,
      rightArrowActive
    };
  },
  mounted() {
    this.slideWidth = this.$refs.slides.children[0].offsetWidth;
    this.$refs.slides.style.width = `${this.slideWidth * this.slides.length}px`;
    this.$refs.slides.style.transform = `translateX(-${
      this.slideWidth * this.currentSlide
    }px)`;
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.$refs.slides.style.transform = `translateX(-${
          this.slideWidth * this.currentSlide
        }px)`;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.slides.length - this.numVisibleSlides) {
        this.currentSlide++;
        this.$refs.slides.style.transform = `translateX(-${
          this.slideWidth * this.currentSlide
        }px)`;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../../styles/variables.scss';
.slide__btn-bar {
  align-self: flex-end;
  margin-top: 20px;
  display: flex;
  gap: 20px;
}
.range {
  margin-top: 45px;
}
.description__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-top: 40px;
}
.description__text {
  margin-top: 20px;
  font-size: 18px;
}
.description__price {
  margin-top: 15px;
  font-weight: 700;
}
input[type="range"] {
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  height: 6px;
  background-color: #07484a;
}
input[type="range"]::-webkit-slider-thumb {
  background: #70908b;
  cursor: pointer;
  width: 120px;
  height: 12px;
  -webkit-appearance: none;
  margin-top: -4px;
}

input[type="range"]::-moz-range-track {
  border-radius: 10px/100%;
  height: 5px;
  border: 1px solid cyan;
  background-color: #70908b;
}
input[type="range"]::-moz-range-thumb {
  background: #70908b;
  border: 1px solid cyan;
  border-radius: 10px/100%;
  cursor: pointer;
}
.slider {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}
.slide__description {
  align-self: self-start;
}
.slide__img {
}
.slide__img img {
  width: 100%;
  height: 100%;
}
.slides {
  display: flex;
  transition: transform 0.5s;
  gap: 30px;
  align-items: stretch;
}

.slide {
  flex-shrink: 0;
  display: flex;
  max-width: 430px;
  width: 100%;
  flex-direction: column;
  padding: 80px 40px 64px;
  border-radius: 12px;
  align-items: center;
  justify-content: flex-end;
}

.button {
}

.prev {
}

.next {
}
@media screen and (max-width: 768px) {
  .slide {
    max-width: 416px;
  }
}
@media screen and (max-width:590px) {
  .slide {
    max-width: 237px;
    padding: 46px 20px 20px;
    height: 340px;
  }
  .description__title {
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  margin-top: 40px;
}
.description__text {
  margin-top: 10px;
  font-size: 18px;
}
.description__price {
  margin-top: 5px;
  font-weight: 700;
}
.slide__img {
  height: 40%;
}
}
</style>
