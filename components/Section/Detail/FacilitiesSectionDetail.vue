<template>

    <div v-for="(item, index) in facilities?.data" :key="item.id">
        <div v-if="index % 2 !== 0">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center 2xl:container mx-auto py-10"
                style="padding-top: 5rem; padding-bottom: 5rem;">
                <div class="px-5 md:px-0">
                    <img loading="lazy"  :src="item?.images[0]?.path" class="h-[28rem] w-full" alt="images">
                </div>
                <div class="px-10">
                    <h1 class="text-[#135E95] text-4xl text-center md:text-start mt-5 md:mt-0">{{ item?.title }}</h1>
                    <ul class="pt-6 flex items-center justify-center md:justify-start md:divide-x gap-3">
                        <li class="flex items-center text-[#071C2A] gap-1">
                            <div v-html="item?.specification[0]?.icon"></div>
                            <p class="text-[#135E95] capitalize text-md"> {{ item?.specification[0]?.item }}</p>
                        </li>
                        <li class="flex items-center text-[#071C2A] gap-1" style="padding-left: .5rem;">
                            <div v-html="item?.specification[1]?.icon"></div>
                            <p class="text-[#135E95] capitalize text-md"> {{ item?.specification[1]?.item }}</p>
                        </li>
                    </ul>
                    <div class="my-6 w-full md:w-[95%]">
                        <div class="text-lg text-center md:text-start line-clamp-4 text-[#071C2A]"
                            v-html="item?.description || 'Tagline tidak tersedia'">
                        </div>
                    </div>
                    <div v-if="item?.cta && item.cta.length > 0" class="flex justify-center md:justify-start">
                        <a v-for="cta in item.cta" :key="cta.item" :href="cta.link || '/'"
                            class="bg-[#135E95] futura font-semibold text-[#ffff] px-5 py-3 uppercase flex items-center w-fit gap-4">
                            {{ cta.item }}
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                                <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>
        </div>
        <div v-if="index % 2 === 0" class="bg-[url(/public/images/patternlight.webp)]">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center 2xl:container mx-auto py-10"
                style="padding-top: 5rem; padding-bottom: 5rem;">

                <div class="px-5 md:px-10 order-2 md:order-1">
                    <h1 class="text-[#135E95] text-4xl text-center md:text-start mt-5 md:mt-0">{{ item?.title }}</h1>
                    <ul class="pt-6 flex items-center justify-center md:justify-start md:divide-x gap-3">
                        <li class="flex items-center text-[#071C2A] gap-1">
                            <div v-html="item?.specification[0]?.icon"></div>
                            <p class="text-[#135E95] capitalize text-md"> {{ item?.specification[0]?.item }}</p>
                        </li>
                        <li class="flex items-center text-[#071C2A] gap-1" style="padding-left: .5rem;">
                            <div v-html="item?.specification[1]?.icon"></div>
                            <p class="text-[#135E95] capitalize text-md"> {{ item?.specification[1]?.item }}</p>
                        </li>
                    </ul>
                    <div class="my-6 w-full md:w-[95%]">
                        <div class="text-lg text-center md:text-start line-clamp-4 text-[#071C2A]"
                            v-html="item?.description || 'Tagline tidak tersedia'">
                        </div>
                    </div>
                    <div v-if="item?.cta && item.cta.length > 0" class="flex justify-center md:justify-start">
                        <a v-for="cta in item.cta" :key="cta.item" :href="cta.link || '/'"
                            class="bg-[#135E95] futura font-semibold text-[#ffff] px-5 py-3 uppercase flex items-center w-fit gap-4">
                            {{ cta.item }}
                            <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                                <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="order-1 md:order-2 px-5 md:px-0">
                    <img loading="lazy"  :src="item?.images[0]?.path" class="h-[28rem] w-full" alt="images">
                </div>
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

defineProps({
    facilities: {
        type: Object,
        required: true,
    },
});

const sliderOptions = {
    type: 'loop',
    perPage: 1,
    pagination: false,
    arrows: true,
    autoplay: true,
    speed: 1000,
};

</script>