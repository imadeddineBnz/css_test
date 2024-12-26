<script setup lang="ts">
import Swiper from 'swiper';

</script>

<template>
<div class=" w-screen h-[665px] pt-[64px] pl-[150px] pr-[150px] pb-[70px] ">
    <div>
        <p>Find your room</p>
    </div>
    <div>
        <div class=" w-[165px] h-[100px]">
            <p id="sliderp1">Dining room, <br>
             bedroom, bathroom <br>
              or office. Find what <br>
               you need</p>
        </div>
        <div>

            <Swiper
            :slides-per
            >

            </Swiper>
        </div>
        

        
    </div>
    <div>

    </div>



</div>
</template>
<style>
#sliderp1{
font-family: varta_weight400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458E5;
}
</style>