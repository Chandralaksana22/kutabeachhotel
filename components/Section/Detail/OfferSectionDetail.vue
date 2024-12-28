<template>

    <div v-for="(item, index) in offer?.data" :key="item.id">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center 2xl:container mx-auto"
            style="background-color: #EDE6DD; margin-bottom: 3rem;">
            <div>
                <img loading="lazy"  :src="item?.images[0]?.path" class="h-[22rem] lg:h-[28rem] w-full object-cover" alt="images">
            </div>
            <div class="px-5 lg:px-10">
                <h1 class="text-[#135E95] text-4xl mt-5 lg:mt-0">{{ item.title }}</h1>

                <div class="my-6 w-full lg:w-[95%]">
                    <div id="list" class="text-lg line-clamp-4 text-[#071C2A]"
                        v-html="item?.description || 'Tagline tidak tersedia'">
                    </div>
                </div>
                <div class="flex items-start justify-center lg:justify-start gap-5">
                    <button 
                        :data-modal-target="'popup-modal-' + item.slug" 
                        :data-modal-toggle="'popup-modal-' + item.slug"
                        class="bg-[#135E95] futura font-semibold text-white px-5 py-3 uppercase flex items-center w-fit gap-1 md:gap-4">
                        VIEW DETAILS
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                            <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                        </svg>
                    </button>
                    <a :href="item.url"
                        class="bg-[#135E95] futura font-semibold text-[#ffff] border-[1px] border-[#135E95] text-sm md:text-base px-4 md:px-5 py-3 uppercase flex items-center w-fit gap-1 md:gap-4">
                        BOOK NOW
                        <svg xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 0 15 24" fill="none">
                            <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" />
                        </svg>
                    </a>
                </div>
            </div>


        </div>
         <!-- Modal Structure -->
         <div :id="'popup-modal-' + item.slug" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                           {{item?.title}}
                        </h3>
                        <button 
                            type="button" 
                            :data-modal-hide="'popup-modal-' + item.slug"
                            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal Body -->
                    <div class="p-4 md:p-5 space-y-4">
                        <div id="list" class="text-lg text-[#071C2A] mb-3" v-html="item?.description || 'Tagline tidak tersedia'"></div>
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
        offer: {
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