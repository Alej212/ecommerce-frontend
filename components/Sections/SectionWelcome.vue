<template>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{ delay: 8000, disableOnInteraction: true, }" :creative-effect="{ prev: { shadow: false, translate: ['-20%', 0, -1], }, next: { translate: ['100%', 0, 0], }, }" >
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image1.png" alt="">
            <div class="content-message">
              <h2 class="message">Experiencia de compra sin límites</h2>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image2.png" alt="">
            <div class="content-message">
              <h2 class="message">Tu destino para las compras en línea</h2>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image3.png" alt="">
            <div class="content-message">
              <h2 class="message">Transformando la forma de comprar en línea</h2>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="welcome">
            <img src="@/assets/images/image4.png" alt="">
            <div class="content-message">
              <h2 class="message">Descubre, compra, disfruta</h2>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
</template>
  
<script setup></script>

<style scoped lang="scss">
.welcome {
  position: relative;
  height: 40rem;
  width: 100%;
  display: flex;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.content-message {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #00000070;
  z-index: 2;
}
.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 3;
  font-size: 60px;
  text-align: center;
  color: hsl(161, 70%, 44%);
}

@media screen and (max-width: 950px) { 
.message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 3;
  font-size: 50px;
  text-align: center;
  color: hsl(161, 70%, 44%);
}
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
  .message {
    font-size: 30px;
  }
}
</style>
