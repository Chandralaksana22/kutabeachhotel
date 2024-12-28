<template>
    <div id="normal-light" class="2xl:container mx-auto px-5 md:px-0">
        <Splide :options="sliderOptions">
            <SplideSlide v-for="item in dining?.data" :key="item.id">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-5 items-center pt-10">
                    <div class="col-span-3 w-full aspect-video">
                        <img loading="lazy"  :src="item?.images[0]?.path" class="h-full w-full" alt="images">
                    </div>
                    <div class="col-span-2">
                        <h1 class="text-[#135E95] text-center md:text-start text-4xl">{{ item.title }}</h1>

                        <div class="my-6">
                            <div class="text-lg text-center md:text-start line-clamp-4 text-[#071C2A]"
                                v-html="item?.description || 'Tagline tidak tersedia'">
                            </div>
                        </div>
                        <div class="flex justify-center md:justify-start">
                            <a href="/dining"
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
    dining: {
        type: Object,
        required: true,
    },
});

const sliderOptions = {
    type: 'loop',
    perPage: 1,
    pagination: false,
    arrows: true,
    gap: 20,
    autoplay: true,
    speed: 1000,
    padding: { right: '20%', left: '0%' },
    breakpoints: {
        1200: {
            perPage: 1,
            gap: 10,
            padding: { right: '20%', left: '0%' },
        },
        800: {
            perPage: 1,
            gap: 5,
            padding: { right: '10%', left: '0%' },
        },
        500: {
            perPage: 1,
            gap: 2,
            padding: { right: '0%', left: '0%' },
        },
    },
};

</script>