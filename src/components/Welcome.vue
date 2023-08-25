<template>
  <div class="welcome-container">
    <v-container id="story">
      <v-row class="story">
        <v-col cols="12" xs="12" md="5">
          <div
            class="story-img animate-box fadeInLeft animated"
            data-animate-effect="fadeInLeft"
          >
            <div class="img">
              <img src="../assets/story.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" xs="12" md="7">
          <h1 class="invitation-title">¡Te invitamos a nuestra Boda!</h1>
          <p class="invitation-message">
            Es un honor para nosotros invitarte a compartir este día tan
            especial en nuestras vidas. Estamos emocionados de celebrar nuestra
            unión y nos encantaría que te unas a nosotros en esta ocasión única.
          </p>
          <p class="invitation-message">
            Tu presencia y cariño son lo más importante para nosotros, y
            esperamos que puedas acompañarnos en este momento lleno de amor y
            felicidad.
          </p>
          <p class="invitation-message">
            Te agradecemos por ser parte de nuestras vidas y esperamos verte en
            este día tan especial.
          </p>
          <v-row>
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
};
</script>

<style scoped>
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
}

.welcome-image {
  max-width: 100%;
}

.welcome-title {
  font-size: 24px;
  color: #bd945a;
  margin-bottom: 10px;
}

.welcome-message {
  font-size: 18px;
  color: #333;
}

.invitation-title {
  margin-top: 15%;
  font-family: "Alex Brush", cursive;
  font-size: 70px;
  color: #bd945a;
  margin-bottom: 20px;
}

.invitation-names {
  margin-top: 15%;
  font-family: "Alex Brush", cursive;
  color: #bd945a;
  margin-bottom: 20px;
}
.invitation-message {
  text-align: left;
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
}
/* ======= Our Story style ======= */
.story .story-img {
  position: relative;
}
.story .story-img .img {
  padding: 0 30px 30px 15px;
  position: relative;
}
.story .story-img .img:before {
  content: "";
  position: absolute;
  top: 30px;
  right: 0;
  left: 45px;
  bottom: 0;
  border: 10px solid #bd945a;
}
.story .story-img .img img {
  position: relative;
  z-index: 2;
}
.story .story-img:after {
  content: "";
  width: 90%;
  position: absolute;
  top: -5%;
  bottom: -5%;
  left: 0;
  background-image: url(../assets/dots.png);
  background-repeat: repeat;
  z-index: -1;
}

.story-img-2 {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.story-img .story-img-2 {
  width: 30% !important;
  height: 120px;
  position: absolute;
  top: 15px;
  right: 45px;
  z-index: 3;
}

/* story-wedding */

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

@media screen and (max-width: 991px) {
  .story-img .story-img-2 {
    width: 30% !important;
    height: 135px;
    position: absolute;
    top: 40px;
    right: 45px;
  }
}

@media screen and (max-width: 768px) {
  .story-img .story-img-2 {
    width: 40% !important;
    height: 120px;
    position: absolute;
    top: 15px;
    right: 45px;
  }
}

@media (max-width: 320px) {
  .story-img .story-img-2 {
    width: 20% !important;
    height: 120px;
    position: absolute;
    top: 15px;
    right: 45px;
  }
  .invitation-title {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    font-size: 22px;
    color: #bd945a;
    margin-bottom: 10px;
  }

  .invitation-names {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    color: #bd945a;
    margin-bottom: 16px;
  }
  .invitation-message {
    text-align: left;
    font-size: 12px;
    color: #333;
    margin-bottom: 15px;
  }

  .invitation-names {
    font-size: 16px;
  }
  .invitation-names-p {
    font-size: 12px;
  }

  .story-img{
    width: 60%;
    margin-left: 20%;
}

}
</style>
