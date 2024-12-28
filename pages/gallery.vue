<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import HeroSection from '~/components/Section/HeroSection.vue';
import { getInformation, getGallery } from '~/server/general';
import { ref, onMounted, computed } from 'vue';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const { data: information, pending: infoPending } = await useAsyncData(
    'information',
    getInformation
);
const { data: gallery, pending: infogallery } = await useAsyncData(
    'information',
    getGallery
);
const galleryData = computed(() => {
    if (gallery?.value.data) {
        return gallery?.value?.data.flatMap((category: any) => category.images);
    }
    return [];
});
useHead({
    title: 'Gallery - Kuta Beach Hotel',
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
onMounted(() => {
    // Dynamically import Isotope and initialize after mounting
    import('isotope-layout').then(Isotope => {
        const iso = new Isotope.default('#gallery', {
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item', // Adjust the gap between items as needed
            },
        });

        // Get the filter button group element
        const filtersElem = document.querySelector('.filters-button-group');

        // Add event listener for filter buttons
        filtersElem?.addEventListener('click', function (event) {
            // Only work with buttons
            if (!event.target.matches('button')) {
                return;
            }

            // Get filter value from data-filter attribute
            const filterValue = event.target.getAttribute('data-filter');
            // Use Isotope to filter items
            iso.arrange({ filter: filterValue });

            // Change active class on buttons
            const buttons = filtersElem.querySelectorAll('button');
            buttons.forEach((button) => {
                button.classList.remove('is-checked');
            });
            event.target.classList.add('is-checked');
        });
    });

    // Initialize Fancybox after mounting
    NativeFancybox.bind('[data-fancybox]', {});
});

</script>


<template>
    <Navbar />
    <HeroSection :information="information" />
    <div class="py-20 container mx-auto px-5 md:px-10">
        <div v-if="isDesktop" class="hidden md:flex items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-5xl text-[#135E95] font-medium">Gallery</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="3" viewBox="0 0 121 3" fill="none">
                <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <div v-if="!isDesktop" class="flex md:hidden items-center justify-center gap-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
            <p class="text-4xl text-[#135E95] font-medium">Gallery</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="2" viewBox="0 0 34 2" fill="none">
                <path d="M0 1H33.5" stroke="#135E95" stroke-width="1.5" />
            </svg>
        </div>
        <section class="py-10 md:py-16 lg:py-20">
            <div class="mx-auto max-w-screen-2xl px-6 md:px-10">

                <!-- <div class="mt-6 px-10">
                        <div
                            class="flex items-center flex-wrap gap-1 button-group filters-button-group justify-center lg:gap-2">
                            <button class="btn-gallery is-checked" data-filter="*">All</button>

                            <button v-for="category in gallery?.value?.data" :key="category.slug"
                                :class="['btn-gallery', category.slug]" :data-filter="`.${category.slug}`">
                                {{ category.title }}
                            </button>
                        </div>
                    </div> -->

                <div class="mt-10 gallery-height" id="gallery">
                    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                        <a v-for="image in galleryData" :key="image.id" :class="image.dataFilter"
                            data-fancybox="gallery" :data-src="image.path">
                            <img loading="lazy"  class="object-center object-cover w-full h-full" :src="image.path"
                                :alt="image.file_name" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    </div>
    <Footer />
</template>
<style>
.gallery-height{
    height: fit-content !important;
}
</style>