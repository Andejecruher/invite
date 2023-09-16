<template>
  <v-parallax src="https://image.freepik.com/free-photo/grey-paper-texture_1253-25.jpg">
  <div class="drees-code"  v-scroll="handleScroll">
    <v-container class="drees-code-container drees-reception-container" id="scroll-dress">
      <h2 class="title">Código de Vestimenta</h2>
      <p class="subtitle">Formal</p>
      <v-row align="center" justify="center">
        <v-col xs="12" md="6" align="center" justify="center">
          <div class="vestiment" id="vestiment">
            <v-img
              :width="whiteTraje"
              src="https://invites-now.com/wp-content/uploads/2023/01/suit-gris.png"
            ></v-img>
            <p class="type">Traje y Corbata</p>
          </div>
        </v-col>
        <v-col cols="12" xs="12" md="6" align="center" justify="center">
          <div class="vestiment" id="traje">
            <v-img
              :width="whiteVestido"
              src="https://invites-now.com/wp-content/uploads/2022/07/Dress_3_black-1.png"
            ></v-img>
            <p class="type">Vestido Largo</p>
            <p class="type">No colores claros</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</v-parallax>
</template>

<script>

export default {
  name: "DressCodeView",
  data() {
    return {
      whiteTraje: 150,
      whiteVestido: 120,
    };
  },
  mounted() {
    if (this.$vuetify.display.mobile) {
      this.whiteTraje = 100;
      this.whiteVestido = 100;
    }
  },
  methods:{
    handleScroll(){
      const scrollY = window.scrollY;
      const seccionDestacada = document.getElementById("scroll-dress");
      const traje = document.getElementById('traje');
      const vestiment = document.getElementById("vestiment");
      const seccionTop = seccionDestacada.offsetTop + 3800;
      const distanciaDesdeLaParteSuperior = scrollY + window.innerHeight;
      if (distanciaDesdeLaParteSuperior >= seccionTop) {
        traje.classList.remove("opacity");
        vestiment.classList.remove("opacity");
        vestiment.classList.add("animate__animated");
        traje.classList.add("animate__animated");
        traje.classList.add("animate__backInLeft");        
        vestiment.classList.add("animate__backInRight");
      } else {
        traje.classList.remove("animate__backInLeft");
        vestiment.classList.remove("animate__backInRight");
      }
    }
  }
};
</script>

<style scoped>
.opacity {
  opacity: 0;
}
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
  color: #B59580;
}
.subtitle {
  font-family: "Cormorant Garamond", serif;
  font-size: 30px;
  margin-top: 10px;
  color: #000;
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
  font-size: 35px;
}
.subtitle {
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 20%;
}
.type {
  font-size: 20px;
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
