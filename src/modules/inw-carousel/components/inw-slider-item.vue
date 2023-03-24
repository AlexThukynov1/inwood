<template>
        <div v-for="item of items" :style="{background: item.bgColor, padding: '64px 40px 60px', maxWidth: '430px',}" class="item ">

          <img :src="item.img.url" :alt="item.img.alt">
          <div class="inw-slider-item__description">
              <p>{{ item.name }}</p>
              <p>{{ item.description }}</p>
              <p>${{ item.price }}</p>
          </div>

    </div>
</template>

<script setup>

const props = defineProps({
  items : {  
    type: Array,
    required: true
}
})

</script>

<style lang="scss" scoped>
  // .inw-slider-item {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: stretch;
  //   &__description {
  //     align-self: baseline;
  //   }
  // }
</style>