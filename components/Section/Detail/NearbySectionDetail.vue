<template>

    <div v-for="(item, index) in nearby?.data" :key="item.id">
        <div class="hidden md:block">
            <div v-if="index % 2 !== 0">
                <div class="grid grid-cols-2 items-center 2xl:container mx-auto py-10 px-5 md:px-0"
                    style="padding-top: 5rem; padding-bottom: 5rem;">
                    <div>
                        <img loading="lazy"  :src="item?.images[0]?.path" class="h-[22rem] md:h-[28rem] w-full object-cover"
                            alt="images">
                    </div>
                    <div class="px-10">
                        <h1 class="text-[#135E95] text-4xl text-center md:text-start mt-5 md:mt-0">{{ item?.title }}
                        </h1>

                        <div class="my-6 w-full md:w-[95%]">
                            <div class="text-lg line-clamp-4 text-center md:text-start text-[#071C2A]"
                                v-html="item?.description || 'Tagline tidak tersedia'">
                            </div>
                        </div>
                        <div class="flex justify-center md:justify-start">
                            <a :href="item.url"
                                class="bg-[#135E95] futura font-semibold text-[#ffff] px-5 py-3 uppercase flex items-center w-fit gap-4">VIEW
                                OPEN MAP DIRECTION
                                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                                    <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                                </svg>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
            <div v-if="index % 2 === 0" class="bg-[url(/public/images/patternlight.webp)]">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center 2xl:container mx-auto py-10 px-5 md:px-0"
                    style="padding-top: 5rem; padding-bottom: 5rem;">

                    <div class="px-5 md:px-10">
                        <h1 class="text-[#135E95] text-4xl text-center md:text-start mt-5 md:mt-0">{{ item?.title }}
                        </h1>

                        <div class="my-6 w-full md:w-[95%]">
                            <div class="text-lg line-clamp-4 text-center md:text-start text-[#071C2A]"
                                v-html="item?.description || 'Tagline tidak tersedia'">
                            </div>
                        </div>
                        <div class="flex justify-center md:justify-start">
                            <a :href="item.url"
                                class="bg-[#135E95] futura font-semibold text-[#ffff] px-5 py-3 uppercase flex items-center w-fit gap-4">VIEW
                                OPEN MAP DIRECTION
                                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                                    <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <img loading="lazy"  :src="item?.images[0]?.path" class="h-[22rem] md:h-[28rem] w-full object-cover"
                            alt="images">
                    </div>
                </div>
            </div>
        </div>
        <div class="block md:hidden">

            <div class="bg-[url(/public/images/patternlight.webp)]">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center 2xl:container mx-auto py-10 px-5 md:px-0"
                    style="padding-top: 5rem; padding-bottom: 5rem;">
                    <div>
                        <img loading="lazy"  :src="item?.images[0]?.path" class="h-[22rem] md:h-[28rem] w-full object-cover"
                            alt="images">
                    </div>
                    <div class="px-5 md:px-10">
                        <h1 class="text-[#135E95] text-4xl text-center md:text-start mt-5 md:mt-0">{{ item?.title }}
                        </h1>

                        <div class="my-6 w-full md:w-[95%]">
                            <div class="text-lg line-clamp-4 text-center md:text-start text-[#071C2A]"
                                v-html="item?.description || 'Tagline tidak tersedia'">
                            </div>
                        </div>
                        <div class="flex justify-center md:justify-start">
                            <a :href="item.url"
                                class="bg-[#135E95] futura font-semibold text-[#ffff] px-5 py-3 uppercase flex items-center w-fit gap-4">VIEW
                                OPEN MAP DIRECTION
                                <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                                    <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                                </svg>
                            </a>
                        </div>
                    </div>


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
    nearby: {
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