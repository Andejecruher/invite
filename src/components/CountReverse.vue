<template>
  <v-parallax :src="urlImg">
    <div class="full-screen">
      <div class="overlay">
        <v-card
          class="countdown-card"
          elevation="5"
          color="rgba(0, 0, 0, 0.4)"
          :width="widthCount"
        >
          <v-card-title><h1 class="titule">Solo Faltan !</h1></v-card-title>
          <v-card-text>
            <v-row justify="center" align="center">
              <v-col cols="3">
                <div class="number">{{ timelineEvents[0].timeRemaining }}</div>
                <p class="number-name">Dias</p>
              </v-col>
              <v-col cols="3">
                <div class="number">{{ timelineEvents[1].timeRemaining }}</div>
                <p class="number-name">Horas</p>
              </v-col>
              <v-col cols="3">
                <div class="number">{{ timelineEvents[2].timeRemaining }}</div>
                <p class="number-name">Minutos</p>
              </v-col>
              <v-col cols="3">
                <div class="number">{{ timelineEvents[3].timeRemaining }}</div>
                <p class="number-name">Segundos</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import Banner from "../assets/counter.jpg";
export default {
  name: "CountReverse",
  data() {
    return {
      urlImg: Banner,
      targetDate: new Date("2023-12-21T20:45:00"), // Cambia esta fecha a la que desees
      timelineEvents: [
        { icon: "mdi-calendar-clock", text: "Días", timeRemaining: 0 },
        { icon: "mdi-clock", text: "Horas", timeRemaining: 0 },
        { icon: "mdi-clock-time-eight", text: "Minutos", timeRemaining: 0 },
        { icon: "mdi-clock-start", text: "Segundos", timeRemaining: 0 },
      ],
      countdownInterval: null,
      widthCount: "50%",
    };
  },
  mounted() {
    this.startCountdown();
    if (this.$vuetify.display.mobile) {
      this.widthCount = "90%";
    }
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    startCountdown() {
      this.updateCountdown(); // Llama una vez para mostrar la cuenta regresiva inmediatamente

      this.countdownInterval = setInterval(() => {
        this.updateCountdown();
      }, 1000);
    },
    updateCountdown() {
      const now = new Date();
      const timeDifference = this.targetDate - now;
      if (timeDifference <= 0) {
        clearInterval(this.countdownInterval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      this.timelineEvents[0].timeRemaining = days;
      this.timelineEvents[1].timeRemaining = hours;
      this.timelineEvents[2].timeRemaining = minutes;
      this.timelineEvents[3].timeRemaining = seconds;
    },
  },
};
</script>

<style scoped>
.full-screen {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0%;
  left: -12%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #B59580;
}
.countdown-card {
  font-family: monospace, sans-serif;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  color: white; /* Cambia el color del texto si es necesario */
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Cambia el color del fondo si es necesario */
}

.number {
  font-family: monospace, serif;
  font-size: 26px;
  margin-bottom: 10px;
}

.number-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  font-weight: bold;
}
.v-card-title {
  color: #B59580;
  font-family: "Alex Brush", cursive;
  display: block;
  flex: none;
  font-size: 1.5rem;
  font-weight: 500;
  -webkit-hyphens: auto;
  hyphens: auto;
  letter-spacing: 0.0125em;
  min-width: 0;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 35px;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  word-break: normal;
  word-wrap: break-word;
  margin-bottom: 10px;
}

.v-card-text {
  flex: 1 1 auto;
  font-family: monospace;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  padding: 1rem;
  text-transform: none;
}
.v-card--variant-elevated,
.v-card--variant-flat {
  background: none;
  color: white;
}

@media (max-width: 425px) {
  .number {
    font-size: 22px;
  }
  .v-card-text {
    font-size: 12px;
  }
}

@media (max-width: 375px) {
  .number {
    font-size: 22px;
  }
  .v-card-text {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .number {
    font-size: 16px;
  }
  .number-name{
    font-size: 11px;
  }
  .v-card-text {
    font-size: 11px;
    padding: 0;
  }
  .overlay {
    left: 0;
  }

  .v-card-title{
    font-size: 1em;
    padding: 10px;
  }
}

@media (max-width: 320px) {
  .number {
    font-size: 16px;
  }
  .number-name{
    font-size: 11px;
  }
  .v-card-text {
    font-size: 11px;
    padding: 0;
  }
  .overlay {
    left: 0;
  }

  .v-card-title{
    font-size: 1em;
    padding: 10px;
  }
}
</style>
