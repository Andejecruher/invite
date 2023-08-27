<template>
  <v-container class="full-height">
    <v-row class="full-height" justify="center" align="center">
      <v-col cols="12" xs="12" md="6">
        <div class="confirm-info">
          <h2 class="title">Confirmar Asistencia</h2>
          <p class="message">
            Favor de confirmar tu asistencia lo antes posible.
          </p>
        </div>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-form @submit.stop="submitForm" class="form">
          <h2 class="title-form">Asistirás a nuestra boda</h2>
          <v-divider></v-divider>
          <div class="container">
            <v-checkbox :model-value="willAttend" label="Asistiré"></v-checkbox>
            <v-checkbox
              :model-value="wontAttend"
              label="No asistiré"
            ></v-checkbox>
          </div>
          <v-select
            v-model="numberOfPeople"
            :items="peopleOptions"
            label="Número de personas confirmadas"
          ></v-select>
          <v-textarea
            v-model="greetings"
            label="Mensaje de felicitación"
          ></v-textarea>
          <v-btn type="submit" color="#bd945a" class="btn-confirm"
            >Confirmar Asistencia</v-btn
          >
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
      willAttend: true,
      wontAttend: true,
      numberOfPeople: 1,
      peopleOptions: [1, 2, 3, 4, 5],
      sendGreetings: false,
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
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
  height: auto;
  width: 100%;
  margin-bottom: 5%;
}
.confirm-info {
  padding: 20px;
}

.message {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  color: #333;
}

.title {
  font-family: "Alex Brush", cursive;
  font-size: 35px;
  color: #bd945a;
}

.title-form {
  font-family: "Alex Brush", cursive;
  font-size: 35px;
  color: #bd945a;
}

.form {
  font-family: "Cormorant Garamond", serif;
  font-size: 22px;
  color: #000;
}

.btn-confirm {
  font-family: "Cormorant Garamond", serif;
  color: #fff;
}

.container {
  display: flex;
  align-items: center;
}

.v-label.v-field-label--floating {
  font-size: 18px !important;
  font-family: "Cormorant Garamond", serif;
  color: #000;
}

@media screen and (max-width: 425px) {
  .title {
    font-size: 30px;
  }
  .title-form {
    font-size: 30px;
  }
  .message {
    font-size: 18px;
  }
  .form {
    font-size: 18px;
  }
  .v-label.v-field-label--floating {
    font-size: 18px !important;
  }
  .confirm-info {
    padding: 0px;
  }
  .full-height {
    margin-bottom: 20%;
    margin-right: 0px;
    margin-top: 5%;
  }
}
</style>
