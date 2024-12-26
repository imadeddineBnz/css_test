<template>

    <footer class="w-[100%] h-[628px] pt-[70px] pl-[150px]" >
        <div class="flex flex-row justify-around">
            <div>
                <p id="antic">antic</p>
            </div>
            <div class="flex flex-row gap-12">
                <div class="flex flex-col gap-[22px]"> 
                    <div><p id="title">Products</p></div>
                    <div id="content" class="flex flex-col gap-3">
                        <a href="#furniture">Furniture</a>
                        <a href="#decoration">Decoration</a> 
                        <a href="#storage">Storage</a>
                        <a href="#baby_and_child">Baby and child</a>
                        <a href="#connected_home">Connected home</a>
                    </div>
                    
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div><p id="title">Rooms</p></div>
                    <div id="content" class="flex flex-col gap-3">
                        <a href="#furniture">Living room</a>
                        <a href="#decoration">Dining room</a>
                        <a href="#storage">Cooked</a>
                        <a href="#baby_and_child">Bedroom</a>
                        <a href="#connected_home">Bathroom</a>
                        <a href="#connected_home">office</a>
                        <a href="#connected_home">Laundry</a>
                        <a href="#connected_home">Garage</a>
                       
                    </div>
                </div>
                <div class="flex flex-col gap-[22px]">
                   <div><p id="title">Services</p></div>
                    <div id="content" class="flex flex-col gap-3">
                        <a href="#furniture">Click and collect</a>
                        <a href="#decoration">Conseption</a>
                        <a href="#storage">Installation</a>
                        <a href="#baby_and_child">Advice</a>
                        <a href="#connected_home">Gift card</a>
                    </div>
                </div>
                <div class="flex flex-col gap-[22px]">
                    <div><p id="title">About</p></div>
                    <div id="content" class="flex flex-col gap-3">
                        <a href="#furniture">Our story</a>
                        <a href="#decoration">Our stores</a>
                        <a href="#storage">Our partners</a>
                        
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-[22px]"   >
                <div>
                    <p id="title">we respect our planet</p>
                </div>
                <div>
                   <img src="/images/footer.jpeg" alt="" class="w-[242px] h-[182px]"/>
                   <p id="content">We’re taking positive steps to </p>
                   <p id="content"> reduce our impact on the planet.</p>
                    <p id="content"> For us, that means retailing</p>
                     <p id="content"> responsibly.</p>
                    
                     <a href="#" id="learn" class="flex items-center gap-1 mt-[15px]">
                    Learn more<img src="/icons/Right.svg" alt="" >  
                    </a>
                    
                </div>

            </div>
        </div>
        <div class="flex flex-col items-center mt-[48px]">
            <div class="flex flex-row items-center gap-[24px]">
                <img src="/icons/Facebook.svg" alt="                ">
                <img src="/icons/Twitter.svg" alt="">
                <img src="/icons/Linkedin.svg" alt="">
                <img src="/icons/Instagram.svg" alt="">
            </div>
            <div id="content" class="mt-5 flex flex-row gap-0">
                <div class="w-[790px] flex items-end">
                    <p>© 2021 Agence Dnd</p>                    
                </div>
                <div class="w-[350px] flex justify-between">
                    <a href="#">Privacy policy</a>
                    <a href="#">Term of service</a>
                    <a href="#">Language</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style>

footer{
    background-color: #F3EEE8;
}
#antic{
    font-family: Merriweather_weight700;
    font-weight: 700;
    font-size: 35px;
    line-height: 25px;
    letter-spacing: 2px;
    color: #A06056;
    
}
#title{

    font-family: varta_weight600;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.2px;
    font-weight: 600;
    color: #534B42;
}
#content{
    font-family: varta_weight400;
    font-size: 18px;
    line-height: 25px;
    font-weight: 400;
    color: #706458;
}
#learn{
font-family: karla ;
font-weight: 700;
font-size: 17px;
line-height: 25px;
letter-spacing: 0.3px;
color: #A06056;

}
    



</style>