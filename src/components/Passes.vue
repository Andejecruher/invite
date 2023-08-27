<template>
  <v-container id="story" class="welcome-container" fluid>
    <v-row class="story">
      <v-col cols="12" xs="12" md="5">
        <div
          class="story-img animate-box fadeInLeft animated"
          data-animate-effect="fadeInLeft"
        >
          <div class="img">
            <img src="../assets/pases.jpg" class="img-fluid" alt="" />
          </div>
        </div>
      </v-col>
      <v-col cols="12" xs="12" md="7">
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

.text-center {
  font-size: 35px;
  text-align: center;
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
  margin-top: 25%;
  font-family: "Alex Brush", cursive;
  font-size: 70px;
  color: #bd945a;
  margin-bottom: 20px;
}

.invitation-names {
  margin-top: 15%;
  font-family: "Alex Brush", cursive;
  color: #bd945a;
  margin-bottom: 26px;
}
.invitation-message {
  text-align: left;
  font-size: 28px;
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

@media screen and (max-width: 425px) {
  .invitation-title {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    font-size: 30px;
    color: #bd945a;
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
    color: #bd945a;
    margin-bottom: 26px;
  }
  .text-center {
    font-size: 20px;
    text-align: center;
    font-weight: 400;
  }
  .story-img {
    width: 60%;
    margin-left: 20%;
    margin-top: 20%;
  }
}
</style>
