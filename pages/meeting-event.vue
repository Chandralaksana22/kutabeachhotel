<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import HeroSection from '~/components/Section/HeroSection.vue';
import MeetingSectionDetail from '~/components/Section/Detail/MeetingSectionDetail.vue';
import { getMeetingConfig } from '~/server/general';
import { getMeeting } from '~/server/meeting'
import { ref, onMounted } from 'vue';
const { data: information, pending: infoPending } = await useAsyncData(
    'information',
    getMeetingConfig
);

const { data: meeting, pending: infoOffer } = await useAsyncData(
    'meeting',
    getMeeting
);
const isDesktop = ref(false);
onMounted(() => {

  isDesktop.value = window.innerWidth >= 768;

  window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 768;
  });
});
console.log(meeting)
useHead({
    title: 'Meeting & Event - Kuta Beach Hotel',
    meta: [
        { name: 'description', content: "Located in the heart of Kuta, Bali’s most famous beach, Kuta Beach Hotel is the paradise for surfers and travellers who are seeking the ultimate sun, sea and sand. The hotel is known for its strategic location. We’re only within a few minutes ride to Ngurah Rai International Airport 50 meters away from Kuta Beach, and are surrounded by other popular public areas, from shopping mall, art market, to modern water park. The finest destinations are also available for spending a night out surrounding the hotel. Those who are looking for a great time after sunset, the guests can easily find an exciting nightlife scene with its wealth of clubs, bar, and sunset chill out spots, or enjoy a fun show at Kuta Teather." },
        { name: 'keywords', content: 'SUN, SEA, AND SAND.' }
    ]
});
</script>


<template>
    <Navbar />
    <HeroSection :information="information" />
    <div class="py-20 container mx-auto px-5 md:px-10">
        <p class="text-center futura text-xl text-[#135E95] font-medium">
            {{ information?.data[0]?.tagline || 'Tagline tidak tersedia' }}
        </p>
        <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-5xl text-[#135E95] font-medium">{{ information?.data[0]?.title || 'Tagline tidak tersedia' }}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-4xl text-[#135E95] font-medium">{{ information?.data[0]?.title || 'Tagline tidak tersedia' }}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <div class="mt-10">
            <img loading="lazy"  class="w-full object-cover h-[30rem]" v-if="information?.data[0]?.images[2]?.path"
                :src="information?.data[0]?.images[2]?.path" alt="Image" />
            <div class="text-lg mt-5 font-medium px-3 text-center"
                v-html="information?.data[0]?.description || 'Tagline tidak tersedia'"></div>
        </div>
    </div>
    <div class="py-10" style="background-color: #F8F1E8;">
        <div class="container mx-auto px-10">
            <p class="text-2xl md:text-4xl text-[#135E95] text-center font-medium">Meeting Facilities
            </p>
            <div class="flex justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="2" viewBox="0 0 200 2" fill="none">
                    <path d="M0 1H200" stroke="#135E95" stroke-width="1.5" />
                </svg>
            </div>
            <div class="grid grid-cols-3 lg:grid-cols-7 items-start justify-center mt-10 md:mt-5">
                <div v-for="(item, index) in information?.data[0]?.item" :key="index" :class="[
                    'flex flex-col gap-3 items-center justify-center',
                    information?.data[0]?.item.length % 3 !== 0 && index === information?.data[0]?.item.length - 1
                        ? 'col-span-3 lg:col-span-1 justify-self-center'
                        : ''
                ]">
                    <div class="rounded-full p-3" style="background-color: #EDE6DD;">
                        <div v-html="item.svg"></div>
                    </div>
                    <p class="text-center uppercase text-[#135E95] font-semibold text-sm futura">{{ item.title }}</p>
                </div>
            </div>

        </div>
    </div>
    <div class="bg-[url(/public/images/patternlight.webp)]">
        <div class="container mx-auto px-5 md:px-10">
            <div class="flex items-center justify-center gap-4 py-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                    <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
                </svg>
                <p class="text-4xl md:text-5xl text-[#135E95] font-medium text-center">Meetings Packages
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                    <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
                </svg>
            </div>
            <MeetingSectionDetail :meeting="meeting" />
        </div>
    </div>
<Footer/>
</template>
