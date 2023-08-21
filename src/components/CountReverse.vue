<template>
  <v-card class="countdown-card" elevation="0">
    <v-card-text>
      <v-row>
        <v-col cols="3">
          <div class="number">{{ timelineEvents[0].timeRemaining }}</div>
          <p>Dias</p>
        </v-col>
        <v-col cols="3">     
          <div class="number">{{ timelineEvents[1].timeRemaining }}</div>
          <p>Horas</p>
        </v-col>
        <v-col cols="3">
          <div class="number">{{ timelineEvents[2].timeRemaining }}</div>
          <p>Minutos</p>
        </v-col>
        <v-col cols="3">
          <div class="number">{{ timelineEvents[3].timeRemaining }}</div>
          <p>Segundos</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CountReverse",
  data() {
    return {
      targetDate: new Date("2023-12-21 12:00:00"), // Cambia esta fecha a la que desees
      timelineEvents: [
        { icon: "mdi-calendar-clock", text: "Días", timeRemaining: 0 },
        { icon: "mdi-clock", text: "Horas", timeRemaining: 0 },
        { icon: "mdi-clock-time-eight", text: "Minutos", timeRemaining: 0 },
        { icon: "mdi-clock-start", text: "Segundos", timeRemaining: 0 },
      ],
      countdownInterval: null,
    };
  },
  mounted() {
    this.startCountdown();
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
.countdown-card {
  font-family: monospace, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  color: white; /* Cambia el color del texto si es necesario */
}

.number{
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
}

.v-card-title {
    color: #bd945a;
    font-family: 'Alex Brush', cursive;
    display: block;
    flex: none;
    font-size: 2rem;
    font-weight: 500;
    -webkit-hyphens: auto;
    hyphens: auto;
    letter-spacing: 0.0125em;
    min-width: 0;
    overflow-wrap: normal;
    overflow: hidden;
    padding: 0.5rem 1rem;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    word-break: normal;
    word-wrap: break-word;
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
.v-card--variant-elevated, .v-card--variant-flat {
    background: none;
    color: white;
}
</style>
