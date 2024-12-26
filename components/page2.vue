<template>
    <div class="w-screen h-[598px] flex flex-row bg-[#f8f4f1]">
    <div class="flex flex-col justify-center pl-[48px]">
      <h1 class="text-[48px] text-[#5c5147] font-bold">Find your room</h1>
      <p class="text-[20px] text-[#5c5147] mt-[12px]">Dining room, bedroom, bathroom or office. Find what you need.</p>
    </div>
  
    <swiper
      :slides-per-view="2"
      :space-between="24"
      :loop="true"
      class="my-swiper ml-[48px]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative w-[458.25px] h-[350px] rounded-[16px] overflow-hidden border border-[#e8e6e4] shadow-lg">
          <img
            :src="slide.image"
            alt="Room"
            class="absolute inset-0 object-cover w-full h-full"
          />
          <div class="absolute inset-0 bg-[#ffffffcc] flex flex-col justify-center items-center">
            <p class="text-[32px] text-[#8b6556] font-bold">{{ slide.name }}</p>
            <p class="text-[18px] text-[#5c5147] mt-[8px]">{{ slide.subtitle }}</p>
          </div>
          <div class="absolute top-0 right-0 bg-[#f8f4f1] text-[14px] text-[#8b6556] px-[12px] py-[6px] rounded-bl-[8px]">
            New arrivals
          </div>
        </div>
      </swiper-slide>
    </swiper>
  
    <div class="absolute bottom-[24px] right-[24px] text-[16px] text-[#8b6556] flex gap-[12px]">
      <span>01 / 05</span>
      <button class="flex items-center gap-[4px]">
        Next <span class="material-icons">arrow_forward</span>
      </button>
    </div>
  </div>
  
</template>

  <script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/swiper-bundle.css";
  
  const slides = [
    {
      id: 1,
      image: "/images/bedroom.png",
      name: "Bedroom",
      subtitle: "Cozy and modern designs",
    },
    {
      id: 2,
      image: "/images/living room.jpeg",
      name: "Living room",
      subtitle: "Elegant and spacious setups",
    },
    {
      id: 3,
      image: "/images/chair.jpeg",
      name: "Dining room",
      subtitle: "Perfect for every occasion",
    },
    {
      id: 4,
      image: "/images/coocked.jpeg",
      name: "Office",
      subtitle: "Functional and stylish",
    },
    {
      id: 5,
      image: "/images/tables.jpeg",
      name: "Bathroom",
      subtitle: "Relax in comfort",
    },
  ];
  </script>
  
  <style scoped>
  .my-swiper {
    width: 100%;
    height: auto;
  }
  </style>
  