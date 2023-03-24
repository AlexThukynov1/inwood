<template>
   <li v-for="link of links" :key="link.id" class="inv-nav-item">
        <RouterLink class="inv-nav-item__link" :to="{name:link.href}">
            {{ link.label }}
        </RouterLink>
   </li>
</template>

<script setup>
import {RouterLink} from 'vue-router'

const props = defineProps({
    links: {
        required: true,
        type: Array
    }
})

</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';
    .inv-nav-item {
        opacity: 1;
        &__link {
            text-decoration: none;
            color: $green;
            opacity: 1;
            &:hover {
                font-weight: 700;
                border-bottom: solid 3px $green;;
            }
        }
    }
</style>