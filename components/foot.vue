<template>
    <div class=" w-screen h-[1805px] grid grid-cols-1 gap-10 pt-12 pl-8 pb-12 pr-8 bg-[#F3EEE8]
      sm:flex sm:flex-col sm:h-[1300px]
       md:h-[900px]

        xl:flex-row xl:h-[628px] xl:gap-12 xl:pt-[70px] xl:pb-16 xl:pr-[150px] xl:pl-[150px] xl:justify-around ">



       <div class=" text-center  sm:h-[25px] sm:col-span-0">
        <p id="footAntic">antic</p>
       </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:justify-items-center sm:gap-3
     md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5 xl:gap-9">
        <div class=" grid grid-cols-1 gap-[10px] sm:flex sm:flex-col">
        <div class="">
            <p id="titlefoot">About</p>
        </div>
        <div class="grid grid-cols-1 gap-3" id="footContent">
            <a href="">Our story</a>
            <a href="">Our stores</a>
            <a href="">Our patners</a>
        </div>
       </div>
       <div class=" grid grid-cols-1 gap-[10px] sm:flex sm:flex-col xl:order-[-2]">
        <div>
            <p id="titlefoot">Services</p>
        </div>
        <div class="grid grid-cols-1 gap-3" id="footContent">
            <a href="">Click and collect</a>
            <a href="">Conception</a>
            <a href="">Installation</a>
            <a href="">Advices</a>
            <a href="">Gift card</a>
        </div>
       </div>
       <div class=" grid grid-cols-1 gap-[10px] sm:flex sm:flex-col xl:order-[-3]">
        <div>
            <p id="titlefoot">Products</p>
        </div>
        <div class="grid grid-cols-1 gap-3 " id="footContent">
            <a href="">Furniture</a>
            <a href="">Decoration</a>
            <a href="">Storage</a>
            <a href="">Baby and child</a>
            <a href="">Connected home</a>
        </div>
       </div>
       <div class=" grid grid-cols-1 gap-[10px] sm:flex sm:flex-col xl:order-[-3]">
        <div>
            <p id="titlefoot">Rooms</p>
        </div>
        <div class="grid grid-cols-1 gap-3 " id="footContent">
            <a href="">Living room</a>
            <a href="">Dining room</a>
            <a href="">Cooked</a>
            <a href="">Bedroom</a>
            <a href="">Bathroom</a>
            <a href="">Office</a>
            <a href="">Laundry</a>
            <a href="">Garage</a>
        </div>
       </div>
       <div class=" grid grid-cols-1 gap-[20px]
        sm:col-span-2 sm:self-center 
         lg:col-span-2
         xl:col-span-1">
        <div>
            <p id="titlefoot">We respect our planet</p>
        </div>
        <div class="grid grid-cols-1 gap-4 xl:ml-4" >
            <div>
                <img src="/public/images/footer.webp" alt="" class=" w-[311px] h-[160px] xl:w-[248.09px] xl:h-[182]">
            </div>
            <div class=" text-[18px] xl:text-[16px]" id="footContent1">
                <p class=" flex xl:static" >We’re taking positive steps to reduce <br class=" xl:hidden">
                     our impact on the planet. For us, that <br class=" xl:hidden">
                      means retailing responsibly.  </p> <p class=" flex xl:hidden">We’ve set </p>  
                      <p class=" flex xl:hidden"> a number of goals to get us there. </p>
            </div>  
            <div>
                <a href="" class="flex gap-2" id="learnFoot">learn more <img src="/public/icons/Right.svg" alt=""></a>
            </div>
          
        </div>
       </div>
       <div class=" flex  justify-between h-8 md:w-[250px] lg:col-span-2 lg:w-[200px] lg:justify-self-center lg:place-self-center
         xl:col-span-4 ">
        <img src="/public/icons/Facebook.svg" class="w-8 h-8" alt="">
        <img src="/public/icons/Twitter.svg" class="w-8 h-8" alt="">
        <img src="/public/icons/Linkedin.svg" class="w-8 h-8" alt="">
        <img src="/public/icons/Instagram.svg" class="w-8 h-8" alt="">
       </div>
       <div class=" grid grid-cols-1 gap-[10px] lg:grid-cols-2 lg:col-span-4 xl:flex xl:justify-between xl:w-[1140px] xl:col-span-5" id="downFoot">
        <div class=" grid grid-cols-2 gap-[9px] w-[240px] h-[59px] lg:grid-cols-3 lg:w-[500px] 
        xl:justify-self-end ">
            <a href="">Privacy policy</a>
            <a href="">Term of service</a>
            <a href="">Language</a>

        </div>
        <div class=" lg:w-40  lg:justify-self-center  xl:justify-self-start xl:order-[-1]">
            <p>© 2021 Agence Dnd</p>
        </div>
       </div>

    </div>
       
      



    </div>
</template>
<style>
#footAntic{

font-family: mery700;
font-size: 34px;
font-weight: 700;
line-height: 25px;
letter-spacing: 2px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;

}
#titlefoot{

font-family: varta600   ;
font-size: 25px;
font-weight: 600;
line-height: 30px;
letter-spacing: -0.20000000298023224px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #534B42;

}
#footContent{

font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458;
}
#footContent1{

font-family: varta400;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458;
}
#learnFoot{
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
#downFoot{
font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #706458B2;
}
</style>