<template>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{ delay: 8000, disableOnInteraction: true, }" :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1], }, next: { translate: ['100%', 0, 0], }, }" >
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image1.png" alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image2.png" alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image3.png" alt="">
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image4.png" alt="">
        </div>
      </SwiperSlide>
    </Swiper>
</template>
  
<script setup></script>

<style scoped lang="scss">
.welcome {
    height: 40rem;
    width: 100%;
    display: flex;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media screen and (max-width: 750px) {
  .welcome {
    height: 30rem;
  }
}
@media screen and (max-width: 500px) {
  .welcome {
    height: 25rem;
  }
}
</style>
