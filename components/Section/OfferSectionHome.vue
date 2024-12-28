<template>
    <div id="normal-light-container">
        <Splide :options="sliderOptions">
            <SplideSlide v-for="item in offer?.data" :key="item.id">
                <div class="flex flex-col pt-10 gap-5">
                    <div class="aspect-square">
                        <img loading="lazy"  :src="item?.images[0]?.path" class="h-full w-full object-cover" alt="images">
                    </div>
                    <div>
                        <h1 class="text-[#135E95] text-center md:text-start text-4xl mb-3">{{ item.title }}</h1>
                        <div class="flex justify-center md:justify-start">
                            <a href="/offers"
                                class="bg-[#135E95] futura font-semibold text-white px-5 py-3 uppercase flex items-center w-fit gap-4">VIEW
                                DETAILS
                                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                                    <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                                </svg>
                            </a>
                        </div>
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
    offer: {
        type: Object,
        required: true,
    },
});

const sliderOptions = {
    type: 'loop',
    perPage: 3,
    pagination: false,
    arrows: true,
    gap: 40,
    autoplay: true,
    speed: 1000,
    breakpoints: {
        1200: {
            perPage: 3,
            gap: 40,

        },
        800: {
            perPage: 2,
            gap: 10,
        },
        500: {
            perPage: 1,
            gap: 2,
        },
    },
};

</script>