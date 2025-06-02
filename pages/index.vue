<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import PopUp from '~/components/PopUp.vue';
import HeroSection from '~/components/Section/HeroSection.vue';
import RoomSectionHome from '~/components/Section/RoomSectionHome.vue'
import DiningSectionHome from '~/components/Section/DiningSectionHome.vue'
import OfferSectionHome from '~/components/Section/OfferSectionHome.vue';
import NearbySectionHome from '~/components/Section/NearbySectionHome.vue';
import { getInformation, getNearby, getPopUp } from '~/server/general';
import { getRoom } from '~/server/room';
import { getDining } from '~/server/dining'
import { getOffer } from '~/server/offer'
import { ref, onMounted } from 'vue';
const { data: information, pending: infoPending } = await useAsyncData(
  'information',
  getInformation
);
const { data: room, pending: infoRoom } = await useAsyncData(
  'room',
  getRoom
);
const { data: dining, pending: infoDining } = await useAsyncData(
  'dining',
  getDining
);
const { data: offer, pending: infoOffer } = await useAsyncData(
  'offer',
  getOffer
);
const { data: nearby, pending: infoNearby } = await useAsyncData(
  'nearby',
  getNearby
);
const { data: popup, pending: infoPopup } = await useAsyncData(
  'popup',
  getPopUp
);
console.log(popup)
useHead({
  title: 'Home - Kuta Beach Hotel',
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
  <PopUp :popup="popup" />
  <div class="relative h-screen w-full">
    <!-- Video -->
    <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop playsinline>
      <source src="/video/videohero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
  </div>
  <div class="py-20 container mx-auto px-5 md:px-10">
    <p class="text-center futura text-md md:text-xl text-[#135E95] font-medium">
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
    <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-2 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
        <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-4xl text-[#135E95] font-medium">{{ information?.data[0]?.title || 'Tagline tidak tersedia' }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
        <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <div class="mt-10">
      <img loading="lazy" class="w-full object-cover h-[15rem] md:h-[30rem]"
        v-if="information?.data[0]?.images[2]?.path" :src="information?.data[0]?.images[2]?.path" alt="Image" />
      <div class="text-md md:text-lg mt-5 font-medium px-3 text-center"
        v-html="information?.data[0]?.description || 'Tagline tidak tersedia'"></div>
    </div>
  </div>
  <div class="py-20 bg-[url(/public/images/bgroomhome.webp)]"
    style="background-size: cover;background-repeat: no-repeat;background-position: center;">
    <p class="text-center futura text-xl text-[#ffff] font-medium">
      FUNCTIONAL. COMFORTABLE. ALL YOURS.
    </p>
    <div class="hidden md:flex items-center justify-center gap-4 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#ffff" stroke-width="1.5" />
      </svg>
      <p class="text-5xl text-[#ffff] font-medium text-center">Our Rooms</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#ffff" stroke-width="1.5" />
      </svg>
    </div>
    <div class="px-5 flex md:hidden items-center justify-center gap-4 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="79" height="2" viewBox="0 0 79 2" fill="none">
        <path d="M0 1H79" stroke="white" stroke-width="1.5" />
      </svg>
      <p class="text-4xl text-[#ffff] font-medium text-center">Our Rooms</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="79" height="2" viewBox="0 0 79 2" fill="none">
        <path d="M0 1H79" stroke="white" stroke-width="1.5" />
      </svg>
    </div>
    <div class="flex items-center justify-center gap-4 mt-3">

    </div>
    <div class="my-5">
      <RoomSectionHome :room="room" />
    </div>
  </div>
  <div class="bg-[#FDF7EF] py-20">
    <p class="text-center futura text-xl text-[#135E95] font-medium">
      A DELIGHTFUL CULINARY EXPERIENCE.
    </p>
    <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-5xl text-[#135E95] font-medium">Dining</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-2 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="117" height="2" viewBox="0 0 117 2" fill="none">
        <path d="M0 1H117" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-4xl text-[#135E95] font-medium">Dining</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="117" height="2" viewBox="0 0 117 2" fill="none">
        <path d="M0 1H117" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <DiningSectionHome :dining="dining" />
  </div>
  <div class="py-20 bg-[url(/public/images/patternlight.webp)]"
    style="background-size: cover;background-repeat: no-repeat;background-position: center;">
    <p class="text-center futura text-xl text-[#135E95] font-medium">
      ENJOY AFFORDABLE STAYS.
    </p>
    <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-5xl text-[#135E95] font-medium">Special Offers</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-2 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="2" viewBox="0 0 57 2" fill="none">
        <path d="M0 1H57" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-4xl text-[#135E95] font-medium">Special Offers</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="2" viewBox="0 0 57 2" fill="none">
        <path d="M0 1H57" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <div class="my-5 container mx-auto px-5 md:px-10">
      <OfferSectionHome :offer="offer" />
    </div>
  </div>
  <div class="bg-[#FDF7EF] py-20">
    <p class="text-center futura text-xl text-[#135E95] font-medium">
      EXPLORE THE LAND’S MOST ICONIC DESTINATIONS.
    </p>
    <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-5xl text-[#135E95] font-medium">Nearby Destinations</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-2 mt-3 px-10 md:px-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="71" height="2" viewBox="0 0 71 2" fill="none">
        <path d="M0 1H70.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-4xl text-[#135E95] text-center font-medium">Nearby Destinations</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="71" height="2" viewBox="0 0 71 2" fill="none">
        <path d="M0 1H70.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
    <div class="2xl:container mx-auto px-5 md:px-10">
      <NearbySectionHome :nearby="nearby" />
    </div>

  </div>
  <Footer />
</template>
