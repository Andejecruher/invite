<template>
  <v-container class="welcome-container" fluid>
    <v-row class="story" justify="center" align="center">
      <v-col cols="12" xs="12" md="5" justify="center" align="center">
        <div class="img" data-animate-effect="fadeInLeft">
          <img
            src="../assets/banner3.jpg"
            id="scroll-img"
            v-scroll="handleScroll"
            class="img-fluid box-shadow"
            alt=""
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        md="7"
        justify="center"
        align="center"
        class="names-invite"
      >
        <h1 class="invitation-title">¡Fam. Escarpulli Hernández !</h1>
        <p class="invitation-message text-center"># PASES 3</p>
        <br />
        <p class="invitation-message text-center">
          ¡Nos hará muy felices que nos acompañes en este día tan especial!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PassesView",
  data() {},
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const seccionDestacada = document.getElementById("scroll-img");
      const seccionTop = seccionDestacada.offsetTop + 4500;
      const distanciaDesdeLaParteSuperior = scrollY + window.innerHeight;
      if (distanciaDesdeLaParteSuperior >= seccionTop) {
        seccionDestacada.classList.remove("opacity");
        seccionDestacada.classList.add("animate__animated");
        seccionDestacada.classList.add("animate__backInDown");
      } else {
        seccionDestacada.classList.remove("animate__backInDown");
      }
    },
  },
};
</script>

<style scoped>
.opacity {
  opacity: 0;
}
.img {
  width: 450px;
}

.box-shadow {
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  border-radius: 0px;
  box-shadow: 0px 100px 75px -30px rgba(155, 155, 155, 0.79);
}

#story {
  margin-top: 10%;
  margin-bottom: 10%;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.welcome-container {
  position: relative;
  font-family: "Cormorant Garamond", serif;
  width: 100%;
  height: auto; /* Ocupar el 100% de la altura de la pantalla */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.welcome-image {
  max-width: 100%;
}

.text-center {
  font-size: 35px;
  text-align: center;
}

.welcome-title {
  font-size: 24px;
  color: #b59580;
  margin-bottom: 10px;
}

.welcome-message {
  font-size: 18px;
  color: #333;
}

.invitation-title {
  font-family: "Alex Brush", cursive;
  font-size: 70px;
  color: #b59580;
  margin-bottom: 20px;
}

.invitation-names {
  margin-top: 15%;
  font-family: "Alex Brush", cursive;
  color: #b59580;
  margin-bottom: 26px;
}
.invitation-message {
  text-align: left;
  font-size: 28px;
  color: #333;
  margin-bottom: 15px;
}

.story-wedding {
  animation: rotation 12s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@media screen and (max-width: 768px) {
  .invitation-title {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    font-size: 30px;
    color: #b59580;
    margin-bottom: 20px;
  }
  .invitation-message {
    text-align: left;
    font-size: 20px;
    color: #333;
    margin-bottom: 15px;
  }
  .invitation-names {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    color: #b59580;
    margin-bottom: 26px;
  }
  .text-center {
    font-size: 20px;
    text-align: center;
    font-weight: 400;
  }
  .story-img {
    width: 100%;
    margin-left: 0;
    margin-top: -10%;
  }
}

@media screen and (max-width: 425px) {
  .invitation-title {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    font-size: 30px;
    color: #b59580;
    margin-bottom: 20px;
  }
  .invitation-message {
    text-align: left;
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }
  .invitation-names {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    color: #b59580;
    margin-bottom: 26px;
  }
  .text-center {
    font-size: 20px;
    text-align: center;
    font-weight: 400;
  }
}

@media screen and (max-width: 320px) {
  .names-invite {
    padding: 0px 120px 0px 120px;
  }
}
</style>
