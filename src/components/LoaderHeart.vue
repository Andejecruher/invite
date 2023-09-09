<template>
  <div class="full-screen">
    <img
      :src="path"
      alt="Background"
      class="background-image"
    />
    <div class="overlay">
      <transition name="name" mode="in-out">
        <h1 id="name" v-if="animation">! Nos casamos !</h1>
      </transition>
    </div>
    <transition name="heart">
      <div class="heart">
        <svg-icon type="mdi" :path="heart" size="60"/>
      </div>
    </transition>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeartPulse } from '@mdi/js';
import imgDesktop from '../assets/loader.jpg';
import imgMobile from '../assets/loadermobile.jpeg';

export default {
  name: "LoaderHeart",
  components: {
    SvgIcon,
  },
  data() {
    return {
      heart: mdiHeartPulse,
      countdown: 10, // Cambia este valor al tiempo deseado en segundos
      showHeart: true,
      animation: false,
      path: "",
    };
  },
  mounted() {
    this.path = this.$vuetify.display.mobile ? imgMobile : imgDesktop;
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
.full-screen {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0%;
  left: 0%;
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
  top: 10%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #B59580;
  animation: beat 1s infinite;
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

@keyframes beat{
  to{
    transform: scale(1.15);
  }
}
@keyframes heart-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-80px);
  }
}
@media (max-width:1024px){
  .overlay{
    top: -30% !important;
    left: 0% !important;
  }
  .heart{
    top: 40% !important;
    left: 0% !important;
  }
}

@media (max-width: 768px){
  #name{
    font-size: 55px;
  }
  .overlay{
    top: -10% !important;
    left: 0px !important;
  }
  .heart{
    top: 0% !important;
    left: 0px !important;
  }
}
@media (max-width:375px){
  #name{
    font-size: 45px;
  }
  .overlay{
    top: -5% !important;
    left: 0px !important;
  }
  .heart{
    top: 0% !important;
    left: 0px !important;
  }
  .background-image{
    width: 130%;
  }
}

@media (max-width:320px){
  #name{
    font-size: 45px;
  }
  .overlay{
    top: -10% !important;
    left: 0px !important;
  }
  .heart{
    top: 0% !important;
    left: 0px !important;
  }
  .background-image{
    width: 130%;
  }
}

</style>