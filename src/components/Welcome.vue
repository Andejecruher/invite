<template>
  <div class="welcome-container" >
    <v-container id="story" v-scroll.self="handleScroll">
      <v-row class="story">
        <v-col cols="12" xs="12" md="5">
          <div class="img" data-animate-effect="fadeInLeft">
            <img
              src="../assets/story.jpg"
              class="img-fluid box-shadow"
              alt=""
            />
          </div>
        </v-col>
        <v-col cols="12" xs="12" md="7">
          <h1 class="invitation-title">¡Nos casamos!</h1>
          <p class="invitation-message">
            Es un honor para nosotros invitarte a compartir este día tan
            especial en nuestras vidas. Estamos emocionados de celebrar nuestra
            unión y nos encantaría que te unas a nosotros en esta ocasión única.
          </p>
          <p class="invitation-message">
            Tu presencia y cariño son lo más importante para nosotros y
            esperamos que puedas acompañarnos en este momento lleno de amor y
            felicidad.
          </p>
          <p class="invitation-message">
            Te agradecemos por ser parte de nuestras vidas y esperamos verte en
            este día tan especial.
          </p>
          <v-row class="row-ainvite">
            <v-col cols="12" xs="12" md="6">
              <h1 class="invitation-names">Padres de Valeria</h1>
              <p class="invitation-names-p">SUSANA HERNANDES</p>
              <p class="invitation-names-p">ROBERTO ESCARPULLI</p>
            </v-col>
            <v-col cols="12" xs="12" md="6">
              <h1 class="invitation-names">Padres de Orlando</h1>
              <p class="invitation-names-p">MARILU CAMACHO</p>
              <p class="invitation-names-p">ESDRAS JIMENEZ</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  data(){

  },
  methods:{
    handleScroll: function(evt, el) {
    console.log("🚀 ~ file: Welcome.vue:53 ~ evt, el:", evt, el)
    if (window.scrollY > 50) {
      el.setAttribute("style", "opacity: 1; transform: translate3d(0, -10px, 0)")
    }
    return window.scrollY > 100;
    }
  }
};
</script>

<style scoped>
.row-ainvite {
  margin-bottom: 5%;
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
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.welcome-image {
  max-width: 100%;
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
  margin-top: 25%;
  font-family: "Alex Brush", cursive;
  font-size: 70px;
  color: #b59580;
  margin-bottom: 20px;
}

.invitation-names {
  margin-top: 15%;
  font-family: "Alex Brush", cursive;
  color: #b59580;
  margin-bottom: 20px;
}
.invitation-message {
  text-align: left;
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
}
/* ======= Our Story style ======= */
.img {
  margin-left: 35%;
  width: 200px;
  height: 200px;
}

.box-shadow {
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  border-radius: 0px;
  box-shadow: 0px 100px 75px -30px rgba(155, 155, 155, 0.79);
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

@media (max-width: 768px) {
  .img {
    margin-left: 25%;
    width: 200px;
    height: 200px;
  }

  .box-shadow {
    background-color: rgba(255, 255, 255, 1);
    color: #000;
    border-radius: 0px;
    box-shadow: 0px 100px 75px -30px rgba(155, 155, 155, 0.79);
  }
  .invitation-title {
    margin-top: 35%;
    font-family: "Alex Brush", cursive;
    font-size: 30px;
    color: #b59580;
    margin-bottom: 10px;
  }

  .invitation-names {
    margin-top: 5%;
    font-family: "Alex Brush", cursive;
    color: #b59580;
    margin-bottom: 16px;
  }
  .invitation-message {
    text-align: left;
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }

  .invitation-names {
    font-size: 22px;
  }
  .invitation-names-p {
    font-size: 18px;
  }

  .story-img {
    width: 60%;
    margin-left: 20%;
  }
}
</style>
