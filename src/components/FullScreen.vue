<template>
    <div class="full-screen">
      <img src="../assets/banner6.jpg" alt="Background" class="background-image">
      <div class="overlay">
        <transition name="name" mode="in-out">
        <h1 id="name" v-if="animation">Valeria & Orlando</h1>
        </transition>
        <div class="countdown">
          <transition name="name" mode="in-out">
            <CountReverse v-if="animation"/>
          </transition>
        </div>
      </div>
      <transition name="heart">
          <div class="heart">&#10084;</div>
        </transition>
    </div>
  </template>
  
  <script>
  import CountReverse from "./CountReverse.vue";
  export default {
    name: "FullScreen",
    components: {
      CountReverse,
    },
    data() {
      return {
        countdown: 10, // Cambia este valor al tiempo deseado en segundos
        showHeart: true,
        animation: false,
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
    top: -30%;
    left: -15%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #bd945a;
  }
  
  .countdown {
    width: 100%;
  }
  
  .heart {
    position: absolute;
    top: 45%;
    left: -15%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #bd945a;
    font-size: 2rem;
    animation: heart-bounce 1s infinite;
  }

  .name-enter-active{
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
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  </style>
  