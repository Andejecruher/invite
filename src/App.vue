<template>
  <transition name="fade" mode="out-in">
    <v-layout v-if="layout">
      <v-navigation-drawer
        v-model="clicked"
        permanent
        location="left"
        width="400"
        class="drawer-menu"
        color="#F6F1F0"
      >
        <template v-slot:prepend>
          <div class="pa-2 text-center" center>
            <transition name="anillo" mode="in-out">
              <div v-if="layout">
                <img
                  width="70"
                  src="https://i.postimg.cc/BZp4MQ6R/anillo-de-bodas.png"
                  alt=""
                  class="anillos"
                />
              </div>
            </transition>
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
              21 Diciembre 2023. Chiapa de corzo, Chiapas, México.
            </p>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </transition>
  <transition name="fade" mode="in-out">
    <LoaderHeart v-if="loading" />
  </transition>
</template>

<script>
import LoaderHeart from "./components/LoaderHeart.vue";
export default {
  name: "App",
  components: {
    LoaderHeart,
  },
  data() {
    return {
      clicked: true,
      loading: true,
      layout: false,
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setTimeout(() => {
        this.layout = true;
        this.loading = false;
      }, 2000);
    },
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
  font-size: 35px;
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
  font-size: 12px;
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
  color: #000;
  text-decoration: none;
  position: relative;
  padding: 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
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
.v-navigation-drawer__content .menu {
  padding: 25px;
  margin-top: 0px !important;
  background: transparent;
}
.menu .v-list-item .v-list-item-title {
  font-size: 18px !important;
}
.drawer-menu {
  padding: 80px 45px 45px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.anillo-enter-active {
  animation: heart-bounce 2s infinite;
}
.anillo-leave-active {
  animation: heart-bounce 2s infinite;
}

.anillo-enter-from {
  opacity: 1;
}
.anillo-enter-to {
  opacity: 1;
}

.anillos:hover {
  cursor: pointer;
  animation: girotresd 2s infinite;
}
@keyframes heart-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes girotresd {
  40% {
    transform: perspective(800px) translateZ(120px) rotateY(170deg);
  }
  50% {
    transform: perspective(800px) translateZ(120px) rotateY(190deg);
  }
  80% {
    transform: perspective(800px) translateZ(0px) rotateY(360deg);
  }
  100% {
    transform: perspective(800px) rotateY(360deg);
  }
  /*Según donde pongamos el translateZ la animación tendrá una forma u otra*/
}
</style>
