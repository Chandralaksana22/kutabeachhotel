<template>
    <Navbar />
    <Splide :options="sliderOptions">
        <SplideSlide v-for="(image, index) in room?.data?.images" :key="index">
            <a :href="image?.path" data-fancybox="gallery">
                <img loading="lazy"  :src="image?.path" :alt="`Image ${index + 1}`" class="h-screen object-cover w-full" />
            </a>
        </SplideSlide>
    </Splide>
    <div class="py-20 container mx-auto px-5 md:px-10">
        <p class="text-center futura text-md md:text-xl text-[#135E95] font-medium">
            OUR ROOMS
        </p>
        <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-5xl text-[#135E95] font-medium">{{ room?.data?.title || 'Tagline tidak tersedia' }}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-2 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-3xl text-[#135E95] font-medium">{{ room?.data?.title || 'Tagline tidak tersedia' }}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <div class="mt-10">
            <div class="text-md md:text-lg mt-5 font-medium px-3 text-center"
                v-html="room?.data?.description || 'Tagline tidak tersedia'"></div>
        </div>
    </div>
    <div class="bg-[url(/public/images/patternlight.webp)]">
        <div class="2xl:container mx-auto py-10" style="padding-top: 5rem; padding-bottom: 5rem;">
            <div class="flex flex-col items-center justify-center gap-2 mt-3">

                <p class="text-3xl text-[#135E95] font-medium">Room Inclusion</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                    <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
                </svg>
                <div class="grid grid-cols-3 lg:grid-cols-7 gap-4 mt-10">
                    <div v-for="(amenity, index) in room?.data?.specification" :key="index"
                        class="flex flex-col justify-center items-center gap-3"
                        :class="index === room?.data?.specification.length - 1 ? 'col-span-full lg:col-span-1  amenity-item' : 'amenity-item'">
                        <span v-html="amenity?.icon"
                            class="amenity-icon bg-transparent border-[1px] border-[#135E95] rounded-full p-5"></span>
                        <span class="futura uppercase text-[#135E95]">{{ amenity?.item }}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="container mx-auto px-5 md:px-10 mt-10">
        <div class="py-20 bg-[#F8F1E8]  rounded-xl px-5 md:px-10">
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
                <div class="col-span-2">
                    <p class="text-3xl text-[#135E95] font-medium">Other Ameninties</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
                    </svg>
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="(amenity, index) in room?.data?.amenities" :key="index"
                            class="flex justify-start gap-3"
                            :class="index === room?.data?.amenities.length - 1 ? 'col-span-full lg:col-span-1  amenity-item' : 'amenity-item'">
                            <span v-html="amenity?.icon" class="amenity-icon"></span>
                            <span class="uppercase text-[#135E95] font-normal">{{ amenity?.item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-10 container px-5 md:px-10">
        <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-5xl text-[#135E95] font-medium">Other Rooms
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-4xl text-[#135E95] font-medium">Other Rooms
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <AllRoomSection :otherroom="otherroom" />
    </div>
    <Footer/>
</template>

<script setup lang="ts">
import { getRoomDetail } from '~/server/room';
import { useRoute } from 'vue-router'
import AllRoomSection from '~/components/Section/Detail/AllRoomSection.vue';
import { useAsyncData, useHead } from 'nuxt/app';
import { onMounted, ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import { getRoom } from '~/server/room';
const sliderOptions = {
    type: 'fade',
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    speed: 1000,
};
const route = useRoute();

const { slug } = route.params as { slug: string };

const { data: room, pending, error } = await useAsyncData(
    'room',
    () => getRoomDetail(slug)
);
const { data: otherroom, pending: infoRoom } = await useAsyncData(
    'otherroom',
    getRoom
);
if (room.value) {
    useHead({
        title: room.value?.data?.title
            ? `${room.value.data.title} - Kuta Beach Hotel`
            : 'Default Title',
        meta: [
            {
                name: 'description',
                content: room.value.data.description || 'Default description for the room.'
            },
            {
                name: 'keywords',
                content: 'sun, sea, sand, Bali, hotel'
            }
        ]
    });
}
const isDesktop = ref(false);
onMounted(() => {

    isDesktop.value = window.innerWidth >= 768;

    window.addEventListener('resize', () => {
        isDesktop.value = window.innerWidth >= 768;
    });
});
onMounted(() => {
    const svgElements = document.querySelectorAll('.amenity-icon svg');
    svgElements.forEach((svg: SVGElement) => {
        svg.setAttribute('height', '36');
        svg.setAttribute('width', '36');
    });
});
onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css';
    document.head.appendChild(link);


    script.onload = () => {
        if (typeof window.Fancybox !== 'undefined') {
            window.Fancybox.bind('[data-fancybox="gallery"]');
        }
    };
});
</script>
