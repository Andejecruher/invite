<template>
  <div class="full-screen">
    <h1 class="title">Nuestro amor</h1>
    <p class="subtitle">
      Entendimos que nuestro lugar favorito es donde estemos siempre juntos.
    </p>
    <v-container>
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="true"
        v-model="currentSlide"
      >
        <Slide v-for="(item, slide) in galerys" :key="slide">
          <div class="carousel__item">
            <v-img
              :width="200"
              cover
              aspect-ratio="16/9"
              :src="item.url"
            ></v-img>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(item, slide) in galerys" :key="slide">
          <div class="carousel__item" @click="slideTo(slide)">
            <v-img
              :width="100"
              aspect-ratio="1/1"
              cover
              :src="item.url"
            ></v-img>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </v-container>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Galery1 from "../assets/banner1.jpg";
import Galery2 from "../assets/banner2.jpg";
import Galery3 from "../assets/banner3.jpg";
import Galery4 from "../assets/banner4.jpg";
import Galery5 from "../assets/banner5.jpg";
import Galery6 from "../assets/banner6.jpg";

export default defineComponent({
  name: "GalleryView",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
    galerys: [
      {
        name: "Galery1",
        url: Galery1,
      },
      {
        name: "Galery2",
        url: Galery2,
      },
      {
        name: "Galery3",
        url: Galery3,
      },
      {
        name: "Galery4",
        url: Galery4,
      },
      {
        name: "Galery5",
        url: Galery5,
      },
      {
        name: "Galery6",
        url: Galery6,
      },
    ],
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>

<style scoped>
.v-container {
  width: 70%;
}
.carousel__item {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.title {
  font-family: "Alex Brush", cursive;
  font-size: 60px;
  margin-top: 10px;
  color: #bd945a;
}

.subtitle {
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  margin-top: 10px;
  color: #000;
  margin-bottom: 1%;
}
</style>
