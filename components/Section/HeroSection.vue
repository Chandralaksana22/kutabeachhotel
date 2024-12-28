<template>
    <div>
        <Splide v-if="information.data[0]?.images" :options="sliderOptions">
            <SplideSlide v-for="(image, index) in information.data[0]?.images" :key="index">
                <div class="relative h-screen w-full">

                    <img loading="lazy"  :src="image.path" :alt="'Image ' + (index + 1)" class="h-full w-full object-cover" />

                    <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50">
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

defineProps({
    information: {
        type: Object,
        required: true,
    },
});

const sliderOptions = {
    type: 'fade',
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    rewind: true,
    speed: 1000,
};

</script>
