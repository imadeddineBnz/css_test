<template>
<div id="hero" class=" w-screen h-screen flex justify-center items-center bg-[url('/public/images/homepage.webp')]
 bg-no-repeat bg-cover brightness-90 sm:bg-none   " >





    <div class=" absolute top-[41px] left-[22px] right-8 sm:hidden ">
        <div class=" w-[100%] h-[45px] flex justify-between flex-grow-0">
            <div class=" p-[10px] flex justify-center items-center text-white sm:text-black"><p id="heroAntic">antic</p></div>
            <img src="/icons/Menu.svg" alt="" class="  self-center w-[24px] h-[12px]">
        </div>

    </div>

    
    <div class=" flex flex-col  items-center self-center justify-between gap-6 sm:hidden">


<div id="content" class="w-[325px] h-[20px]">
    <p id="heroTitle">HOME DESIGN</p>
</div>

<div class="w-[325px] h-[120px]">
    <h4 id="heroMain">Elegance for <br>
         Interiors & <br>
          Exteriors</h4>
</div>

<div class="w-[325px] h-[50px]">
    <p id="heroP">We provide everyone with modern,<br>
        trendy, quality furniture</p>
</div>
<div>
    <img src="/public//icons//Scroll DownlWihte.svg" @click="scrollToPage2" alt="" class="w-[50px] h-[50px]" id="scrollDown">
</div>

</div>


<div class=" hidden sm:block sm:w-[80%] sm:absolute sm:top-[55px] sm:left-[149.9px]">
    <div class="flex justify-between">
        <div class="flex justify-between gap-8">
            <div><p id="heroantic">antic</p></div>
            <div class="flex gap-6">
                <p id="heromenu" class="text-[#706458]">Products</p>
                <p id="heromenu" class="sm:text-black lg:text-[#706458]">Rooms</p>
                <p id="heromenu" class="sm:text-black lg:text-[#706458]">Services</p>
                <p id="heromenu" class="sm:text-black lg:text-[#706458]">Inspirations</p>
            </div>
        </div>
        <div>
            <img src="/public/icons/Contact.svg" alt="">
        </div>
    </div>

</div>

<div class=" hidden sm:flex sm:w-[50%] sm:h-screen sm:pt-6 sm:pb-6 sm:pr-[50px] sm:pl-[50px] sm:bg-[#F3EEE8] sm:flex-col sm:justify-around
 sm:items-center ">

<div class="sm:w-[210px] sm:flex gap-[50px] sm:pt-[105px] sm:self-center sm:flex-col lg:w-[420px]">
<p id="herotitle">HOME DESIGN</p>
<p id="herocontent">Elegance for <br>
    Interiors & <br> Exteriors</p>
<p id="herop">We provide everyone with modern, <br class="sm:hidden lg:block"> 
    trendy, quality furniture</p>
</div>
<img src="/public/icons/Scroll Down.svg" class="sm:w-[50px] sm:h-[50px] sm:self-center " @click="scrollToPage2" alt="" id="scrollDown">

</div>
<div class=" hidden sm:block sm:w-[50%] sm:h-screen sm:bg-[url('/public/images/homepage.webp')] sm:bg-cover sm:bg-no-repeat sm:bg-left ">

</div>
</div>



</template>


<style>
#scrollDown:hover{
cursor: pointer;
}

#heroAntic{
    
font-family: mery700;
font-size: 34px;
font-weight: 700;
line-height: 25px;
letter-spacing: 2px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;


}
#heroantic{
font-family: mery700;
font-size: 34px;
font-weight: 700;
line-height: 25px;
letter-spacing: 2px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;
}
#heroTitle{
    
font-family: varta700;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 1px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #fff;

}
#herotitle{
font-family: varta700;
font-size: 14px;
font-weight: 700;
line-height: 20px;
letter-spacing: 1px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;

}
#heroMain{
font-family: mery400;
font-size: 35px;
font-weight: 400;
line-height: 40px;
letter-spacing: -0.30000001192092896px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #fff;

}
#herocontent{
    font-family: mery300;
font-size: 50px;
font-weight: 300;
line-height: 70px;
letter-spacing: -0.4000000059604645px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #A06056;

}
#heroP{
    
font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #F7F8F9;

}
#herop{
font-family: varta400;
font-size: 22px;
font-weight: 400;
line-height: 30.8px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color:#706458E5;
}
#heromenu{
font-family: varta400;
font-size: 18px;
font-weight: 400;
line-height: 25px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;


}

</style>
<script>
export default {
  methods: {
    // Method to scroll to page2
    scrollToPage2() {
      const page2 = document.getElementById('page2');
      if (page2) {
        page2.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>