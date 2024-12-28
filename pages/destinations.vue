<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import HeroSection from '~/components/Section/HeroSection.vue';
import NearbySectionDetail from '~/components/Section/Detail/NearbySectionDetail.vue'
import { ref, onMounted } from 'vue';
import { getNearbyConfig } from '~/server/general';
import { getDestination } from '~/server/destination'
const { data: information, pending: infoPending } = await useAsyncData(
  'information',
  getNearbyConfig
);
const { data: nearby, pending: infoDining} = await useAsyncData(
  'nearby',
  getDestination
);

useHead({
  title: 'Destination - Kuta Beach Hotel',
  meta: [
    { name: 'description', content: "Located in the heart of Kuta, Bali’s most famous beach, Kuta Beach Hotel is the paradise for surfers and travellers who are seeking the ultimate sun, sea and sand. The hotel is known for its strategic location. We’re only within a few minutes ride to Ngurah Rai International Airport 50 meters away from Kuta Beach, and are surrounded by other popular public areas, from shopping mall, art market, to modern water park. The finest destinations are also available for spending a night out surrounding the hotel. Those who are looking for a great time after sunset, the guests can easily find an exciting nightlife scene with its wealth of clubs, bar, and sunset chill out spots, or enjoy a fun show at Kuta Teather." },
    { name: 'keywords', content: 'SUN, SEA, AND SAND.' }
  ]
});
const isDesktop = ref(false);
onMounted(() => {

    isDesktop.value = window.innerWidth >= 768;

    window.addEventListener('resize', () => {
        isDesktop.value = window.innerWidth >= 768;
    });
});
</script>


<template>

  <Navbar />
  <HeroSection :information="information" />
  <div class="py-10 md:py-20 container mx-auto px-5 md:px-10">
    <p class="text-center futura text-xl text-[#135E95] font-medium">
      {{ information?.data[0]?.tagline || 'Tagline tidak tersedia' }}
    </p>
    <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
      <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
    </svg>
    <p class="text-5xl text-[#135E95] font-medium">{{ information?.data[0]?.title || 'Tagline tidak tersedia' }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
      <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
    </svg>
  </div>
  <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-4 mt-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
      <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
    </svg>
    <p class="text-3xl text-[#135E95] font-medium text-center">{{ information?.data[0]?.title || 'Tagline tidak tersedia' }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
      <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
    </svg>
  </div>
    <div class="mt-10">
      <div class="text-lg font-medium px-3 text-center"
        v-html="information?.data[0]?.description || 'Tagline tidak tersedia'"></div>
    </div>
  </div>
  <NearbySectionDetail :nearby="nearby"/>
  <Footer/>
</template>
