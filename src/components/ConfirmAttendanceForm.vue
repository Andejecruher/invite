<template>
  <v-parallax src="https://image.freepik.com/free-photo/grey-paper-texture_1253-25.jpg">
  <v-container class="full-height">
    <v-row class="full-height" justify="center" align="center">
      <v-col cols="12" xs="12" md="6">
        <div class="confirm-info">
          <h2 class="title">Confirmar Asistencia</h2>
          <p class="message">
            FAVOR DE CONFIRMAR TU ASISTENCIA LO ANTES POSIBLE.
          </p>
        </div>
        <div class="confirm-info">
          <h2 class="title">Consideración</h2>
          <p class="message">
            LA CANTIDAD DE PASES OTORGADA ESTA CONTADA MINUCIOSAMENTE PORFAVOR SER TAN AMABLE DE RESPETARLA PARA EVITAR FUTURAS CONTRADICCIONES
          </p>
          <p class="message">
            SOLO ADULTOS. (NO NIÑOS)
          </p>
        </div>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-form @submit.stop="submitForm" class="form">
          <h2 class="title-form">Asistirás a nuestra boda</h2>
          <v-divider></v-divider>
          <div class="container">
            <v-checkbox :model-value="willAttend" :defaults-target="willAttend" label="Asistiré"></v-checkbox>
            <v-checkbox
              :model-value="wontAttend"
              :defaults-target="wontAttend"
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
          <v-btn type="submit" color="#B59580" class="btn-confirm"
            >Confirmar Asistencia</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</v-parallax>
</template>

<script>
export default {
  name: "ConfirmAttendanceForm",
  data() {
    return {
      willAttend: true,
      wontAttend: false,
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
  height: 100vh;
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
  color: #B59580;
}

.title-form {
  font-family: "Alex Brush", cursive;
  font-size: 35px;
  color: #B59580;
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

@media screen and (max-width: 768px) {
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

@media screen and (max-width: 425px) {
  .title {
    font-size: 30px;
  }
  .title-form {
    font-size: 30px;
  }
  .message {
    font-size: 12px;
  }
  .form {
    font-size: 12px;
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

@media screen and (max-width: 375px) {
  .title {
    font-size: 30px;
  }
  .title-form {
    font-size: 30px;
  }
  .message {
    font-size: 12px;
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
    margin-bottom: 30%;
    margin-right: 0px;
    margin-top: 5%;
  }
}

@media screen and (max-width: 320px) {
  .title {
    font-size: 30px;
  }
  .title-form {
    font-size: 30px;
  }
  .message {
    font-size: 12px;
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
    margin-bottom: 30%;
    margin-right: -10px;
    margin-top: 5%;
  }
}
</style>
