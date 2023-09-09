<template>
    <v-footer class="footer">
      <v-container>
        <v-row>
          <v-col>
            <p class="message">&copy; {{ currentYear }} <a href="http://www.andejecruher.com" target="_blank" class="title">Andejecruher</a>.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: "FooterView",
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped>
  /* Agrega estilos específicos del componente aquí */
  .message {
  font-family: monospace, serif;
  font-size: 12px;
  color: #333;
}

.title {
  font-family: monospace, cursive;
  font-size: 16px;
  color: #B59580;
}
  </style>
  