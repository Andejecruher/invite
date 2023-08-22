<template>
    <div class="ceremony-reception">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-icon large>mdi-church</v-icon>
            <h2 class="title">Ceremony</h2>
            <v-divider class="divider"></v-divider>
            <p class="info">Venue: Church Name</p>
            <p class="info">Address: 123 Main St, City</p>
            <v-btn @click="openModal('Ceremony Map')" color="primary">View Map</v-btn>
          </v-col>
          <v-col cols="6">
            <v-icon large>mdi-glass-cocktail</v-icon>
            <h2 class="title">Reception</h2>
            <v-divider class="divider"></v-divider>
            <p class="info">Venue: Reception Venue</p>
            <p class="info">Address: 456 Park Ave, City</p>
            <v-btn @click="openModal('Reception Map')" color="primary">View Map</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="modalVisible" max-width="400">
        <v-card>
          <v-card-title class="headline">
            {{ modalTitle }}
          </v-card-title>
          <v-card-text>
            <!-- Embed the map here -->
            <div class="map-placeholder">Google Map Goes Here</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="closeModal">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    name: "CeremonyReceptionView",
    data() {
      return {
        modalVisible: false,
        modalTitle: "",
      };
    },
    methods: {
      openModal(title) {
        this.modalTitle = title;
        this.modalVisible = true;
      },
      closeModal() {
        this.modalVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .ceremony-reception {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .divider {
    margin: 10px 0;
  }
  
  .info {
    font-size: 16px;
  }
  
  .map-placeholder {
    width: 100%;
    height: 200px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  </style>
  