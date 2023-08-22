<template>
  <FullScreen />
  <WelcomeView />
  <CeremonyReceptionView />
</template>

<script>
import FullScreen from "@/components/FullScreen.vue";
import WelcomeView from "@/components/Welcome.vue";
import CeremonyReceptionView from "@/components/CeremonyReception.vue";
export default {
  name: "HomeView",
  components: {
    FullScreen,
    WelcomeView,
    CeremonyReceptionView,
  },
};
</script>
