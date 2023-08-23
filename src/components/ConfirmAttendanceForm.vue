<template>
  <v-container class="full-height">
    <v-row class="full-height" justify="center" align="center">
      <v-col cols="6">
        <div class="confirm-info">
          <h2>Confirmar Asistencia</h2>
          <p>Favor de confirmar tu asistencia lo antes posible.</p>
        </div>
      </v-col>
      <v-col cols="6">
        <v-form @submit="submitForm">
          <h2>Asistirás a nuestra boda</h2>
          <v-divider></v-divider>
          <v-checkbox v-model="willAttend" label="Asistiré"></v-checkbox>
          <v-checkbox v-model="wontAttend" label="No asistiré"></v-checkbox>
          <v-select
            v-model="numberOfPeople"
            :items="peopleOptions"
            label="Número de personas confirmadas"
          ></v-select>
          <v-textarea  v-model="greetings"
            label="Mensaje de felicitación"></v-textarea>
          <v-btn type="submit" color="primary">Confirmar Asistencia</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ConfirmAttendanceForm",
  data() {
    return {
      willAttend: false,
      wontAttend: false,
      numberOfPeople: 1,
      peopleOptions: [1, 2, 3, 4, 5],
      sendGreetings: false,
    };
  },
  methods: {
    submitForm() {
      // Agrega la lógica para manejar los datos del formulario aquí
      console.log("Datos del formulario:", {
        willAttend: this.willAttend,
        wontAttend: this.wontAttend,
        numberOfPeople: this.numberOfPeople,
        sendGreetings: this.sendGreetings,
      });
    },
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
  width: 100%;
}
.confirm-info {
  padding: 20px;
}
</style>
