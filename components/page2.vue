<template>
<div class=" w-screen h-[529.5px] pt-12 pb-12 pl-8 pr-8 flex flex-col gap-8 bg-[#F3EEE8] justify-center items-center
  xl:justify-around xl:pt-12 xl:pb-[70px] xl:p-l[150px] xl:p-r[150px] xl:h-[665px]" id="page2">

  <div class="flex flex-col gap-[20px] lg:w-[100%] lg:self-center lg:justify-around sm:flex-row xl:hidden">
    <h4 id="title22">Find your room</h4>
    <p id="content22">Dining room, bedroom, bathroom or <br>
       office. Find what you need</p>
  </div>
  <div class="w-[311px] h-[232.5] sm:w-[550px] xl:hidden">
    <div class="w-[100%] flex " >
     <div class="w-[100%] self-center">
      <swiper
  ref="swiperRef"
  :slides-per-view="1"
  @swiper="onSwiper"
  :loop="true"
  :modules="[Navigation]"
  :space-between="20"
  :breakpoints="{
    640:{slidesPerView:2},
    768:{slidesPerView:2},
    
  }"
>
  <swiper-slide>
    <div class="relative w-[311px] h-[232px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-12 z-10 text-sm">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[45%] h-full bg-[url('/public/images/bedroom.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div
        id="name2"
        class="absolute inset-0 flex justify-center items-center bg-opacity-30 "
      >
        Bedroom
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="relative w-[311px] h-[232px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-12 z-10 text-sm">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[45%] h-full bg-[url('/public/images/chaire.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div
        id="name2"
        class="absolute inset-0 flex justify-center items-center  bg-opacity-30 "
      >
        Chair
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="relative w-[311px] h-[232px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-12 z-10 text-sm">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[45%] h-full bg-[url('/public/images/living room.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div
        id="name2"
        class="absolute inset-0 flex justify-center items-center bg-opacity-30 "
      >
        Living Room
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="relative w-[311px] h-[232px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-12 z-10 text-sm">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[45%] h-full bg-[url('/public/images/cooked.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div
        id="name2"
        class="absolute inset-0 flex justify-center items-center bg-opacity-30 "
      >
        Kitchen
      </div>
    </div>
  </swiper-slide>
</swiper>

</div>
     
</div>
    
  </div>
  <div>
    <div @click="swiperNextSlide" id="next" class=" xl:hidden">
      <p  class="flex gap-2">Next <img src="/public/icons/Right.svg" alt=""></p>
    </div>
    <div>

    </div>
  </div>

  <div class=" hidden xl:block xl:h-[60px] xl:w-[1140px] ">
    <p id="title2">Find your room</p>
  </div>
  <div class="hidden xl:flex xl:gap-6">
    <div><p id="content2">Dining room, <br>
       bedroom,bathroom <br>
        or office. Find what
         <br> you need</p></div>
    <div class="hidden xl:flex xl:h-[458px] xl:w-[947px]">
      <div class=" hidden xl:flex xl:w-[100%]">
        <swiper
  ref="swiperRef"
  :slides-per-view="2"
  @swiper="onSwiper"
  :loop="true"
  :modules="[Navigation]"
  :space-between="20"
>
  <swiper-slide>
    <div class="relative w-[458px] h-[350px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-0 z-10">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[60%] h-full bg-[url('/public/images/bedroom.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div id="name"
        class="absolute inset-0 flex justify-center items-center  bg-opacity-30"
      >
        Bedroom
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="relative w-[458px] h-[350px] overflow-hidden">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-0 z-10">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[60%] h-full bg-[url('/public/images/chaire.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div id="name"
        class="absolute inset-0 flex justify-center items-center bg-opacity-30 "
      >
        Chair
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="relative w-[458px] h-[350px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-0 z-10">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[60%] h-full bg-[url('/public/images/living room.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div id="name"
        class="absolute inset-0 flex justify-center items-center bg-opacity-30"
      >
        Living Room
      </div>
    </div>
  </swiper-slide>

  <swiper-slide>
    <div class="relative w-[458px] h-[350px]">
      <!-- New arrivals text -->
      <p id="p22" class="absolute top-0 right-0 z-10">
        New arrivals
      </p>
      <!-- Image -->
      <div class="w-[60%] h-full bg-[url('/public/images/cooked.webp')] bg-cover bg-center"></div>
      <!-- Centered design name -->
      <div id="name"
        class="absolute inset-0 flex justify-center items-center  bg-opacity-30 "
      >
        Kitchen
      </div>
    </div>
  </swiper-slide>
</swiper>

  </div>
  
    
  

    </div>
  </div>
  <div id="next" class="hidden xl:block">
    <span id="learn2" @click="swiperNextSlide" class="flex gap-4">next <img @click="swiperNextSlide" src="/public/icons/Right.svg" class="w-[9px] h-4 self-center"   alt=""></span>
  </div>
  <div>

  </div>

</div>
</template>
<script>
import {defineComponent, ref} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { Navigation  } from 'swiper/modules';


export default defineComponent({
    methods: {
        Navigation() {
            return Navigation
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        const swiperInstance = ref()

        function onSwiper(swiper) {
            swiperInstance.value = swiper
        }
        const swiperNextSlide = () => {
            swiperInstance.value.slideNext()
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev()
        };
        return {
            swiperPrevSlide,
            swiperNextSlide,
            onSwiper,
        };
    },
});
</script>
<style>
#next:hover{
cursor: pointer;
}
#p22{
  font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458E5;
}
#title2{
font-family: mery400;
font-size: 55px;
font-weight: 400;
line-height: 60px;
letter-spacing: -0.6000000238418579px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458;
}
#title22{
 
font-family: mery400;
font-size: 35px;
font-weight: 400;
line-height: 40px;
letter-spacing: -0.30000001192092896px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #534B42;

}
#content2{
font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458E5;

}
#content22{

font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458E5;

}
#name{

font-family: mery400;
font-size: 55px;
font-weight: 400;
line-height: 60px;
letter-spacing: -0.6000000238418579px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;

}
#name2{
  
font-family: mery400;
font-size: 35px;
font-weight: 400;
line-height: 40px;
letter-spacing: -0.30000001192092896px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;
}
#learn2{
  font-family: karla700;
font-size: 20px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0.30000001192092896px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;
}
</style>