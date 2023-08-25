<template>
  <FullScreen id="FullScreen"/>
  <WelcomeView id="WelcomeView"/>
  <CeremonyReceptionView id="CeremonyReceptionView"/>
  <DressCodeView id="DressCodeView"/>
  <PassesView id="PassesView"/>
  <GiftTableView id="GiftTableView" />
  <ConfirmAttendanceForm id="ConfirmAttendanceForm" />
  <FooterView />
</template>

<script>
import FullScreen from "@/components/FullScreen.vue";
import WelcomeView from "@/components/Welcome.vue";
import CeremonyReceptionView from "@/components/CeremonyReception.vue";
import DressCodeView from "@/components/DressCode.vue";
import PassesView from "@/components/Passes.vue";
import GiftTableView from "@/components/GiftTable.vue";
import ConfirmAttendanceForm from "@/components/ConfirmAttendanceForm.vue";
import FooterView from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    FullScreen,
    WelcomeView,
    CeremonyReceptionView,
    DressCodeView,
    PassesView,
    GiftTableView,
    ConfirmAttendanceForm,
    FooterView,
  },
};
</script>
xz