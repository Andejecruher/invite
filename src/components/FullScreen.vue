<template>
  <v-parallax :src="urlImg">
    <div class="full-screen">
      <div class="overlay">
        <transition name="name" mode="in-out">
          <div class="text-center">
            <h1 id="name" v-if="animation">Valeria & Orlando</h1>
            <p class="date">21.12.2023</p>
          </div>   
        </transition>
      </div>
      <transition name="heart">
        <div class="heart">
          <svg-icon type="mdi" :path="heart" size="40" />
        </div>
      </transition>
    </div>
  </v-parallax>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiHeartPulse } from "@mdi/js";
import Banner from "../assets/banner6.jpg";

export default {
  name: "FullScreen",
  components: {
    SvgIcon,
  },
  data() {
    return {
      heart: mdiHeartPulse,
      countdown: 10, // Cambia este valor al tiempo deseado en segundos
      showHeart: true,
      animation: false,
      urlImg: Banner,
    };
  },
  mounted() {
    this.startCountdown();
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.animation = true;
    },
    startCountdown() {
      let timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
#name {
  display: block;
  font-size: 75px;
  color: white;
  font-family: "Alex Brush", cursive;
  font-weight: 500;
  display: block;
  margin-top: 0px;
  text-align: center;
  line-height: 1.5em;
}

.date{
  font-size: 18px;
  font-family: monospace, sans-serif;
  color: white;
  font-weight: 500;
  display: block;
  margin-top: 0px;
  text-align: center;
  line-height: 1.5em;
}
.full-screen {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: -15%;
  left: -15%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #B59580;
}

.countdown {
  width: 100%;
}

.heart {
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: -15%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #B59580;
  animation: heart-bounce 1s infinite;
}

.name-enter-active {
  animation: heart-bounce 1s infinite;
}
.name-leave-active {
  animation: heart-bounce 1s infinite;
}

.name-enter-from {
  opacity: 1;
}
.name-enter-to {
  opacity: 1;
}

@keyframes heart-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
@media (max-width: 1024px) {
  .overlay {
    top: -20% !important;
    left: 0% !important;
  }
  .heart {
    top: 40% !important;
    left: 0% !important;
  }
}

@media (max-width: 425px) {
  #name {
    font-size: 55px;
  }
  .overlay {
    top: -20% !important;
    left: 0px !important;
  }
  .heart {
    top: 40% !important;
    left: 0px !important;
  }
}
@media (max-width: 375px) {
  #name {
    font-size: 45px;
  }
  .overlay {
    top: -20% !important;
    left: 0px !important;
  }
  .heart {
    top: 40% !important;
    left: 0px !important;
  }
}

@media (max-width: 320px) {
  #name {
    font-size: 45px;
  }
  .overlay {
    top: -15% !important;
    left: 0px !important;
  }
  .heart {
    top: 40% !important;
    left: 0px !important;
  }
}
</style>
