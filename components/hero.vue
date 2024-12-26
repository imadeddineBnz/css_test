<template>
    <div id="bodyh" class="h-screen bg-[#f8f4ef] font-sans">

  
      <!-- Hero Section -->
      <div id="hero" class="flex flex-row w-[100%]">
 <div class="flex flex-col w-[50%] pt-[3%] pl-[10%]">
              <!-- Navigation Bar -->
      <div id="navbar" class="flex gap-[5%] items-center px-10 py-6">
        <!-- Logo -->
        <div>
          <p id="antic">antic</p>
        </div>
  
        <!-- Navigation Links -->
        <div  id="navLinks" class="flex gap-8 text-[#7a6456] text-sm">
          <a href="#" class="hover:underline">Products</a>
          <a href="#" class="hover:underline">Rooms</a>
          <a href="#" class="hover:underline">Services</a>
          <a href="#" class="hover:underline">Inspirations</a>
        </div>
  
        
      </div>
        
        <!-- Text Content -->
        <div id="heroContent" class=" w-[460px]  h-[372px] px-20 mt-16 flex flex-col pl-10">
          <p id="heroP">Home Design</p>
          <p id="heroH">
            Elegance for <br> Interiors & Exteriors
          </p>
          <p id="heroP2">
            We provide everyone with modern, trendy, quality furniture
          </p>
          <div class="mt-10">
            <button class="">
              
              <img src="/public/icons/Scroll Down.svg" alt="">
            </button>
          </div>
        </div>
   </div>
        <!-- Image Content -->
        <div id="image" class=" flex items-start justify-end  w-[50%] h-[900px] pt-[3%] pr-[5%]">
         <!-- Contact Icon -->
        
          <img src="/icons/Contact.svg" alt="Contact" class="h-[50px] w-[50px] ">
        
        </div>
      </div>
    </div>
  </template>
  
  <style>
    #bodyh {
      
      background-color: #F3EEE8;
    }
    #image{
        background-image: url('/public/images/homepage.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    }
    #navLinks{
        font-family: varta_weight400;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: #706458;
    }
    #heroP{
        font-family: varta_weight400;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 1px;
        color: #A06056;
    }
    #heroH{
        font-family: Merriweather300;
        font-weight: 300;
        font-size: 50px;
        line-height: 70px;
        letter-spacing: -0.4px;
        color: #A06056;
    }
    #heroP2{
        font-family: varta_weight400;
        font-weight: 400;
        font-size: 22px;
        line-height: 30.8px;
        color: #706458E5;
    }

  </style>
  