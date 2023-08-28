<template>
  <v-parallax :src="urlImg">
  <div class="drees-code">
    <v-container class="drees-code-container drees-reception-container">
      <h2 class="title">Código de Vestimenta</h2>
      <p class="subtitle">Formal</p>
      <v-row align="center" justify="center">
        <v-col xs="12" md="6" align="center" justify="center">
          <div class="vestiment">
            <v-img
              :width="whiteTraje"
              src="https://invites-now.com/wp-content/uploads/2023/01/suit-gris.png"
            ></v-img>
            <p class="type">Traje y Corbata</p>
          </div>
        </v-col>
        <v-col cols="12" xs="12" md="6" align="center" justify="center">
          <div class="vestiment">
            <v-img
              :width="whiteVestido"
              src="https://invites-now.com/wp-content/uploads/2022/07/Dress_3_black-1.png"
            ></v-img>
            <p class="type">Vestido Largo</p>
            <p class="type">No colores</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</v-parallax>
</template>

<script>
import Banner from "../assets/372.jpg";
export default {
  name: "DressCodeView",
  data() {
    return {
      whiteTraje: 150,
      whiteVestido: 120,
      urlImg: Banner,
    };
  },
  mounted() {
    if (this.$vuetify.display.mobile) {
      this.whiteTraje = 100;
      this.whiteVestido = 100;
    }
  },
};
</script>

<style scoped>
.drees-code {
  position: relative;
  font-family: "Cormorant Garamond", serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-family: "Alex Brush", cursive;
  font-size: 60px;
  color: #bd945a;
}
.subtitle {
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  margin-top: 10px;
  color: white;
  margin-bottom: 5%;
}
.type {
  font-size: 25px;
  font-family: "Cormorant Garamond", serif;
  text-align: center;
}

.drees-code-container {
  margin-top: 15%;
  margin-bottom: 15%;
}

@media screen and (max-width: 768px) {
  .title {
  font-size: 30px;
}
.subtitle {
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20%;
}
.type {
  font-size: 16px;
  font-family: "Cormorant Garamond", serif;
  text-align: center;
}

.drees-code-container {
  margin-top: 15%;
  margin-bottom: 25%;
}
}


@media screen and (max-width: 425px) {
  .title {
  font-size: 30px;
}
.subtitle {
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20%;
}
.type {
  font-size: 16px;
  font-family: "Cormorant Garamond", serif;
  text-align: center;
}

.drees-code-container {
  margin-top: 15%;
  margin-bottom: 25%;
}
}
</style>
