<template>
  <v-layout>
    <v-navigation-drawer
      permanent
      location="left"
      width="350"
      class="pa-10"
      color="#F6F1F0"
    >
      <template v-slot:prepend>
        <div class="pa-2 text-center" center>
          <img
            width="60"
            src="https://i.postimg.cc/BZp4MQ6R/anillo-de-bodas.png"
            alt=""
            class="anillos"
          />
          <p class="name">Valeria & Orlando</p>
          <p class="date">21.12.2023</p>
        </div>
      </template>

      <v-list center class="mt-10 menu" variant="text">
        <v-list-item
          class="hover-underline"
          title="Inicio"
          value="inicio"
        ></v-list-item>
        <v-list-item
          class="hover-underline"
          title="Bienvenida"
          value="bienvenida"
        ></v-list-item>
        <v-list-item
          class="hover-underline"
          title="Ceremonia y Recepción"
          value="ceremonia"
        ></v-list-item>
        <v-list-item
          class="hover-underline"
          title="Codigo de Vestimenta"
          value="codigo"
        ></v-list-item>
        <v-list-item
          class="hover-underline"
          title="Pases"
          value="pases"
        ></v-list-item>
        <v-list-item
          class="hover-underline"
          title="Mesa de Regalos"
          value="mesa"
        ></v-list-item>
        <v-list-item
          class="hover-underline"
          title="Confirmar Asistencia"
          value="confirmacion"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2 footer1">
          <div class="separator"></div>
          <p>
            © 2023 Valeria & Orlando. Boda
            <br />
            21 Diciembre 2023. Cintalapa, Chiapas, México.
          </p>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clicked: true,
    };
  },
};
</script>

<style lang="scss" scope>
#app {
  font-family: "Alex Brush", monospace, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  font-weight: 400;
}
.anillos {
  opacity: 0.6;
}

.name {
  display: block;
  font-size: 36px;
  color: #bd945a;
  font-family: "Alex Brush", cursive;
  font-weight: 400;
  display: block;
  margin-top: 0px;
  text-align: center;
  line-height: 1.5em;
}
.date {
  font-family: monospace, sans-serif;
  font-weight: 400;
  text-transform: none;
  text-align: center;
  font-size: 10px;
  letter-spacing: 5px;
  color: #000;
  margin-bottom: 5px;
}

.separator {
  width: 60px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border-bottom: 1px solid rgba(189, 148, 90, 0.4);
  margin: 5px auto;
}

.footer1 {
  color: #888;
  letter-spacing: 0.5px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 10px;
  font-weight: 400;
}

.hover-underline {
  position: relative;
  cursor: pointer;
}
.hover-underline::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(189, 148, 90, 0.4);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
.hover-underline:hover::before {
  transform: scaleX(1);
}

.v-list-item-title {
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  word-wrap: break-word;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  line-height: 1.5rem;
  text-transform: none;
}
/* Estilos específicos del componente */
.v-list-item__overlay {
  background-color: transparent !important;
}

.no-background {
  background-color: transparent !important;
}

</style>
