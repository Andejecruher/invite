<template>
  <div class="ceremony-reception">
    <v-container class="ceremony-reception-container">
      <v-row> 
        <v-col cols="12" md="6" xs="12" class="text-center">
          <svg-icon type="mdi" :path="ceremony" size="60" />
          <h1 class="title">Civil</h1>
          <v-divider :thickness="grosor" class="divider"></v-divider>
          <p class="info">
            Jueves 21 de Diciembre del 2023 <br />
            08:00 p.m
          </p>
          <p class="info">Salon " Las Haditas ", Chiapa de corzo</p>
          <p class="info">
            Rumbo a, Carr. al Puente Viejo 89, <br />
            Ribera Cahuaré, Cahuaré, 29160 Chiapa de Corzo, Chis.
          </p>
          <v-btn @click="openModal('Ceremonia')" color="#bd945a" class="btn"
            >Ver Mapa</v-btn
          >
        </v-col>
        <v-col cols="12" md="6" xs="12">
          <svg-icon type="mdi" :path="reception" size="60" />
          <h1 class="title">Recepción</h1>
          <v-divider :thickness="grosor" class="divider"></v-divider>
          <p class="info">
            Jueves 21 de Diciembre del 2023 <br />
            08:45 p.m
          </p>
          <p class="info">Salon " Las Haditas ", Chiapa de corzo</p>
          <p class="info">
            Rumbo a, Carr. al Puente Viejo 89, <br />
            Ribera Cahuaré, Cahuaré, 29160 Chiapa de Corzo, Chis.
          </p>
          <v-btn @click="openModal('Recepción')" color="#bd945a" class="btn"
            >Ver Mapa</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="modalVisible" max-width="600">
      <v-card>
        <v-card-title class="headline">
          Ubicacion de la {{ title }}
        </v-card-title>
        <v-card-text>
          <!-- Embed the map here -->
          <div class="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.79403949167423!2d-93.03343408549398!3d16.741583168229223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed2666bb4241f9%3A0x2f91aca11000387d!2sCarr.%20al%20Puente%20Viejo%2089%2C%20Ribera%20Cahuar%C3%A9%2C%20Cahuar%C3%A9%2C%2029165%20Chiapa%20de%20Corzo%2C%20Chis.!5e0!3m2!1ses!2smx!4v1692734302299!5m2!1ses!2smx"
              width="600"
              height="500"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#bd945a" @click="closeModal" variant="tonal"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChurch } from "@mdi/js";
import { mdiGlassWine } from "@mdi/js";

export default {
  name: "CeremonyReceptionView",
  components: { SvgIcon },
  data() {
    return {
      ceremony: mdiChurch,
      reception: mdiGlassWine,
      modalVisible: false,
      title: "",
      grosor: 5,
    };
  },
  mounted() {
    this.grosor = this.$vuetify.display.mobile ? 5 : 2;
  },
  methods: {
    openModal(title) {
      this.title = title;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
};
</script>

<style scoped>
.ceremony-reception-container {
  margin-top: 10%;
  margin-bottom: 10%;
}
.btn {
  font-size: 16px;
  font-family: "Cormorant Garamond", serif;
  color: white;
}
.ceremony-reception {
  position: relative;
  font-family: "Cormorant Garamond", serif;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-family: "Alex Brush", cursive;
  font-size: 60px;
  margin-top: 10px;
  color: #bd945a;
}
.headline {
  font-weight: 600;
  font-family: "Alex Brush", cursive;
  font-size: 40px;
  margin-top: 10px;
  color: #bd945a;
}
.divider {
  width: 50%;
  margin: 2% 25%;
  margin-bottom: 20px;
}

.info {
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 5%;
  font-weight: 400;
}

.map-placeholder {
  width: 100%;
  height: 500px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
@media (max-width: 768px) {
  .title {
    font-size: 26px;
  }
  .info {
    font-size: 18px;
  }
  .btn {
    font-size: 16px;
  }
}

@media (max-width: 425px) {
  .title {
    font-size: 26px;
  }
  .info {
    font-size: 18px;
  }
  .btn {
    font-size: 16px;
  }
}
</style>
