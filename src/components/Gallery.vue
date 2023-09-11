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
        :items-to-show="itemsToShow"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(item, slide) in galerys" :key="slide">
          <div class="carousel__item" @click="slideTo(slide)">
            <v-img
              :width="200"
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
import Galery1 from "../assets/galery/1693182584061.jpg";
import Galery2 from "../assets/galery/072A3567.jpg";
import Galery3 from "../assets/galery/072A3583.jpg";
import Galery4 from "../assets/galery/072A3612.jpg";
import Galery5 from "../assets/galery/072A3695.jpg";
import Galery6 from "../assets/galery/072A3741.jpg";
import Galery7 from "../assets/galery/072A3750.jpg";
import Galery8 from "../assets/galery/072A3795.jpg";
import Galery9 from "../assets/galery/072A3830.jpg";
import Galery10 from "../assets/galery/072A4067.jpg";
import Galery11 from "../assets/galery/072A4117.jpg";
import Galery12 from "../assets/galery/072A4154.jpg";
import Galery13 from "../assets/galery/1693161694446.jpg";
import Galery14 from "../assets/galery/1693161694455.jpg";
import Galery15 from "../assets/galery/1693161694460.jpg";
import Galery16 from "../assets/galery/1693161694483.jpg";
import Galery17 from "../assets/galery/1693161694494.jpg";
import Galery18 from "../assets/galery/1693161694507.jpg";
import Galery19 from "../assets/galery/1693161694515.jpg";
import Galery20 from "../assets/galery/1693161694530.jpg";
import Galery21 from "../assets/galery/1693161694544.jpg";

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
      {
        name: "Galery7",
        url: Galery7,
      },
      {
        name: "Galery8",
        url: Galery8,
      },
      {
        name: "Galery9",
        url: Galery9,
      },
      {
        name: "Galery10",
        url: Galery10,
      },
      {
        name: "Galery11",
        url: Galery11,
      },
      {
        name: "Galery12",
        url: Galery12,
      },
      {
        name: "Galery13",
        url: Galery13,
      },
      {
        name: "Galery14",
        url: Galery14,
      },
      {
        name: "Galery15",
        url: Galery15,
      },
      {
        name: "Galery16",
        url: Galery16,
      },
      {
        name: "Galery17",
        url: Galery17,
      },
      {
        name: "Galery18",
        url: Galery18,
      },
      {
        name: "Galery19",
        url: Galery19,
      },
      {
        name: "Galery20",
        url: Galery20,
      },
      {
        name: "Galery21",
        url: Galery21,
      },
    ],
    itemsToShow: 5,
  }),
  mounted() {
    this.itemsToShow = this.$vuetify.display.mobile ? 2 : 5;
  },
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
  color: #b59580;
}

.subtitle {
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  margin-top: 10px;
  color: #000;
  margin-bottom: 1%;
}

@media screen and (max-width: 768px) {
  .title {
    font-family: "Alex Brush", cursive;
    font-size: 35px;
  }

  .subtitle {
    font-family: "Cormorant Garamond", serif;
    font-size: 18px;
  }
  .v-container {
    width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .title {
    font-family: "Alex Brush", cursive;
    font-size: 35px;
  }

  .subtitle {
    font-family: "Cormorant Garamond", serif;
    font-size: 18px;
  }
  .v-container {
    width: 100%;
  }
}
</style>
