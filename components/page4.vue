

<template>
<div class=" w-screen h-[1184px] pt-12 pb-12 pl-8 pr-8 flex flex-col gap-16 bg-[#FFFFFF] items-center
             md:h-[800px]
              xl:pr-0 xl:pl-0">


    <div class=" flex flex-col gap-8 sm:flex-row sm:gap-14 md:gap-[120px] lg:w-[1100px] lg:justify-between xl:w-[1140px]
                 xl:h-[115px]  ">
        <div class=" flex flex-col gap-4 lg:w-[496px] h-[115px] ">
            <div id="title4" >
                <p>Be aware of the <br class=" lg:hidden"> latest trends</p>
            </div>
            <div id="content4">
                <p>Stay informed of new trends, but also <br class=" lg:hidden"> of our various offers.</p>
            </div>
            <div>
                <p id="learn4" class="flex gap-2">Learn more <img src="/public//icons//Right.svg" alt="" class=" flex self-center w-[6px] h-[10px] "></p>
            </div>
        </div>
        <div class=" flex flex-col gap-4 lg:flex-row lg:w-[455px] lg:h-[50px]">

           
                <input id="content4" type="email" placeholder="email@address.com"
                 class=" rounded-sm pt-3 pb-3 pr-[15px] pl-[15px] bg-[#F3EEE84D]
                         sm:w-[190px]
                           xl:w-[296px] xl:h-[50px]">
                <button id="btn4" class=" w-[290px] h-[50px] pt-3 pb-[13px] pl-[30px] pr-[30px] gap-[10px] bg-[#534B42] text-white
                                            sm:w-[190px] 
                                             xl:w-[143px]">Subscribe</button>
      
        </div>
    </div>
    <div class="flex flex-col gap-10 md:flex-row md:gap-16 lg:hidden ">

        <div class="flex flex-col gap-[20px]">
            <p id="title3">Inspirations</p>
            <p id="content3">Our experts are keen to stay on top of <br class=" md:hidden">
                 trends in <br class=" hidden lg:block"> order to offer you new <br class=" md:hidden">
                 inspirations for your <br class=" hidden lg:lg:block"> interior and exterior <br class=" md:hidden">
                  every day. Remember that <br class=" hidden lg:lg:block"> to inspire you <br class=" md:hidden">
                   we have to inspire ourselves and <br class=" hidden lg:lg:block"> we want <br class=" md:hidden">
                    to share that with you.</p>
        </div>
        <div class="flex flex-col gap-[20px] lg:hidden">

            
            <div class="flex gap-[20px]">

                <div class="flex flex-col gap-[15px]">
                    <div class="w-[145.5px] h-[175px] bg-[url('/public/images/chaire.webp')] bg-cover"></div>
                    <p>chair</p>
                </div>
                <div>
                    <div class="w-[145.5px] h-[175px] bg-[url('/public/images/cooked.webp')] bg-cover"></div>
                    <p>cooked</p>
                </div>

            </div>
            <div class="flex gap-[20px]">
                <div class="flex flex-col gap-[15px]">
                    <div class="w-[145.5px] h-[175px] bg-[url('/public/images/living room.webp')] bg-cover"></div>
                    <p>Living room</p>
                </div>
                <div>
                    <div class="w-[145.5px] h-[175px] bg-[url('/public/images/tables.webp')] bg-cover"></div>
                    <p>Tables</p>
                </div>

            </div>

        </div>
        
        
    </div>
    <div class=" hidden lg:flex lg:flex-col lg:gap-10 lg:w-screen h-[715px]">
            <div class=" w-screen h-[350px] gap-7">
                
    <swiper
        ref="swiperRef"
        :slides-per-view="2"
        @swiper="onSwiper"
        :loop="true"
        :modules="[Navigation]"
        :space-between="20"
        :breakpoints="{
            1224:{slidesPerView:3}
        }"
        
    >
        <swiper-slide>
            <div class="slide slide-1 w-[350px] h-[350px] bg-[url('/public/images/tables.webp')] bg-[39%_69%] " ></div>
            <p id="content4">Table</p>
        </swiper-slide>
        <swiper-slide>
            <div class="slide slide-2 w-[350px] h-[350px] bg-[url('/public/images/chaire.webp')] bg-[48%_50%] "></div>
            <p id="content4">Chaire</p>
        </swiper-slide>
        <swiper-slide>
            <div class="slide slide-3 w-[350px] h-[350px] bg-[url('/public/images/living room.webp')] bg-[50%_25%] "></div>
            <p id="content4">Living room</p>
        </swiper-slide>
        <swiper-slide>
            <div class="slide slide-3 w-[350px] h-[350px] bg-[url('/public/images/cooked.webp')] bg-[50%_55%] "></div>
            <p id="content4">Cooked</p>
        </swiper-slide>
    </swiper>

            </div>
            <div class="flex justify-between w-[950px] self-center xl:w[1140px] xl:h-[125px]">
                <div class="flex justify-between w-[700px] ">
                    <p id="title3">Inspirations</p>
                    <p id="content3">Our experts are keen to stay on top of trends in <br> 
                        order to offer you new inspirations for your <br>
                        interior and exterior every day. Remember that <br>
                        to inspire you we have to inspire ourselves and <br>
                        we want to share that with you.</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex">
                        <img @click="swiperPrevSlide" class=" w-10 h-10" src="/public/icons/btnL.svg" alt="">
                        <img @click="swiperNextSlide" class=" w-10 h-10" src="/public/icons/btnR.svg" alt="">
                    </div>
                </div>
            </div>

        </div>



</div>
</template>
<style>
#title4{
    
font-family: mery400;
font-size: 35px;
font-weight: 400;
line-height: 40px;
letter-spacing: -0.30000001192092896px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #121212;
}
#content4{
font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458E5;
}

#btn4{
font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;

text-underline-position: from-font;
text-decoration-skip-ink: none;

}
#learn4{
 font-family: karla700;
font-size: 17px;
font-weight: 700;
line-height: 25px;
letter-spacing: 0.30000001192092896px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;

}

</style>
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