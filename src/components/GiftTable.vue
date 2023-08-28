<template>
  <v-parallax :src="banner">
  <v-container id="story" class="welcome-container" fluid justify="center" align="center">
    <v-row class="story" justify="center" align="center">
      <v-col xs="12" md="12" class="mesa" justify="center" align="center">
        <v-card class="p-10" elevation="3" color="rgba(0, 0, 0, 0.5)" width="100%">
          <h1 class="invitation-title">¡Mesa de regalos!</h1>
        <p class="invitation-message">
          "La presencia de ustedes tiene un valor incalculable para nosotros. Si
          bien su compañía es el regalo más preciado, si desean hacernos un
          obsequio, apreciaríamos mucho que este fuese en efectivo. Para su
          comodidad, hemos dispuesto una urna en la entrada del salón donde
          podrán depositarlo junto a sus felicitaciones. Agradecemos
          profundamente su consideración."
        </p>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</v-parallax>
</template>

<script>
import Banner from "../assets/giftable.jpg"
export default {
  name: "GiftTableView",
  data() {
    return {
      banner: Banner,
    };
  },
};
</script>

<style scoped>
.mesa {
  padding: 130px 200px 230px;
  margin-top: 10%;
  margin-bottom: 15%;
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
  color: #FFF;
}

.invitation-title {
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
  font-size: 30px;
  color: #FFF;
  margin-bottom: 15px;
  padding: 60px;
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

@media screen and (max-width: 768px) {
  .invitation-title {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    font-size: 30px;
    color: #bd945a;
    margin-bottom: 20px;
  }
  .invitation-message {
    padding: 25px;
    text-align: left;
    font-size: 18px;
    color: #fff;
    margin-bottom: 15px;
  }
  .invitation-names {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    color: #bd945a;
    margin-bottom: 26px;
  }
  .text-center {
    font-size: 18px;
    text-align: center;
  }
  .story-img {
    width: 60%;
    margin-left: 20%;
    margin-top: 20%;
  }

  .mesa{
    padding: 5px 5px 5px;
    margin-top: 15%;
    margin-bottom: 25%;
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
    padding: 25px;
    text-align: left;
    font-size: 18px;
    color: #fff;
    margin-bottom: 15px;
  }
  .invitation-names {
    margin-top: 15%;
    font-family: "Alex Brush", cursive;
    color: #bd945a;
    margin-bottom: 26px;
  }
  .text-center {
    font-size: 18px;
    text-align: center;
  }
  .story-img {
    width: 60%;
    margin-left: 20%;
    margin-top: 20%;
  }

  .mesa{
    padding: 5px 5px 5px;
    margin-top: 15%;
    margin-bottom: 25%;
  }
  
}
</style>
