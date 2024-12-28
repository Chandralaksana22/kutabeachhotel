<template>
    <div>
        <!-- Modal -->
        <div v-if="showModal" id="popup-modal" tabindex="-1"
            class="fixed inset-0 z-50 flex justify-center items-center w-full h-full ">
            <div class="relative w-full max-w-[90%] lg:max-w-lg max-h-full bg-transparent rounded-none shadow ">
                <button type="button"
                    class="absolute top-3 z-10 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    @click="closeModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div>

                    <Splide :options="sliderOptions">
                        <SplideSlide v-for="item in popup?.data" :key="index">
                            <div class="hidden lg:block">
                                <a :href="item?.url_desktop">
                                    <img :src="item?.images_desktop[0]?.path" :alt="item.title"
                                        class="w-full h-auto rounded-none">
                                </a>
                            </div>
                            <div class="block lg:hidden">
                                <a :href="item?.url_mobile">
                                    <img :src="item?.images_mobile[0]?.path" :alt="item.title"
                                        class="w-full h-auto rounded-none">
                                </a>
                            </div>
                        </SplideSlide>
                    </Splide>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

defineProps({
    popup: {
        type: Object,
        required: true,
    },
});

const showModal = ref(false);

const sliderOptions = {
    type: 'loop',
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
    rewind: true,
};

onMounted(() => {
    setTimeout(() => {
        showModal.value = true;
    }, 3000);
});

const closeModal = () => {
    showModal.value = false;
};

const confirmAction = () => {
    console.log('Product deleted');
    closeModal();
};
</script>

<style scoped>
/* Add your custom styles here */
</style>