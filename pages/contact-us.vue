<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import { getInformation, getNearby } from '~/server/general';
import { getRoom } from '~/server/room';
import { getDining } from '~/server/dining'
import { getOffer } from '~/server/offer'
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
console.log(nearby)
useHead({
  title: 'Home - Kuta Beach Hotel',
  meta: [
    { name: 'description', content: "Located in the heart of Kuta, Bali’s most famous beach, Kuta Beach Hotel is the paradise for surfers and travellers who are seeking the ultimate sun, sea and sand. The hotel is known for its strategic location. We’re only within a few minutes ride to Ngurah Rai International Airport 50 meters away from Kuta Beach, and are surrounded by other popular public areas, from shopping mall, art market, to modern water park. The finest destinations are also available for spending a night out surrounding the hotel. Those who are looking for a great time after sunset, the guests can easily find an exciting nightlife scene with its wealth of clubs, bar, and sunset chill out spots, or enjoy a fun show at Kuta Teather." },
    { name: 'keywords', content: 'SUN, SEA, AND SAND.' }
  ]
});
</script>


<template>
  <Navbar />
  <div class="container mx-auto px-10" style="padding-top: 10rem;">
    <div class="flex items-center justify-center gap-2 md:gap-4 mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
      <p class="text-3xl md:text-5xl text-[#135E95] font-medium text-center md:text-start">Contact Us</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="3" viewBox="0 0 121 3" fill="none">
        <path d="M0.5 1.5H120.5" stroke="#135E95" stroke-width="1.5" />
      </svg>
    </div>
  </div>
  <div class="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
    <div>
      <div class="flex flex-col gap-5">
        <div>
          <h1 class="text-2xl text-[#135E95] font-medium text-center md:text-start">Hotel Address</h1>
          <p class="text-center md:text-start">
            Jalan Benesari Pantai Kuta, Kuta – Bali, Indonesia
          </p>
        </div>
        <div>
          <h1 class="text-2xl text-[#135E95] font-medium text-center md:text-start">Contact</h1>
          <div class="flex items-start flex-col">
            <a href="tel:(0361) 1754396" class="font-light mt-1 text-sm">
              Telephone: (0361) 1754396
            </a>
            <a href="https://api.whatsapp.com/send?phone=6281225396188" class="font-light mt-1 text-sm">
              Whatsapp: +62 8122 5396 188
            </a>
            <a href="mailto:reservation@thekutabeachhotel.com" class="text-center font-light mt-1 text-sm">
              Email: reservation@thekutabeachhotel.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h1 class="text-2xl text-[#135E95] font-medium text-center md:text-start">Inquiry Message</h1>
      <div>


        <form>
          <div style="margin-bottom: 1rem;">
            <input type="text" id="text"
              class="bg-transparent border border-[#867C6F] text-gray-900 text-sm rounded-none  focus:border-[#867C6F] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Name" required />
          </div>
          <div style="margin-bottom: 1rem;">
            <input type="email" id="email"
              class="bg-transparent border border-[#867C6F] text-gray-900 text-sm rounded-none  focus:border-[#867C6F] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Email" required />
          </div>
          <div style="margin-bottom: 1rem;">
            <input type="number" id="phone"
              class="bg-transparent border border-[#867C6F] text-gray-900 text-sm rounded-none  focus:border-[#867C6F] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Phone Number" required />
          </div>
          <div style="margin-bottom: 1rem;">
            <textarea id="message" rows="4"
              class="bg-transparent border border-[#867C6F] text-gray-900 text-sm rounded-none  focus:border-[#867C6F] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment..."></textarea>
          </div>
          <div class="flex justify-center md:justify-end">

            <button type="submit" class="text-white bg-[#135E95] px-5 py-3 uppercase font-semibold futura">Submit
              Massage</button>
          </div>
        </form>

      </div>
    </div>
  </div>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20596.056714984272!2d115.15322811827903!3d-8.71208964893195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246c0ea66c5b7%3A0x24b14f8455abd357!2sKuta%20Beach%20Hotel!5e0!3m2!1sid!2sid!4v1735188104776!5m2!1sid!2sid"
    width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
  <Footer />
</template>
