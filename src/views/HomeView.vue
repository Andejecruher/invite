<template>
  <FullScreen id="FullScreen"/>
  <WelcomeView id="WelcomeView"/>
  <CountReverse id="CountReverse"/>
  <CeremonyReceptionView id="CeremonyReceptionView"/>
  <DressCodeView id="DressCodeView"/>
  <PassesView id="PassesView"/>
  <GiftTableView id="GiftTableView" />
  <GalleryMobileView id="GalerryView" v-show="$vuetify.display.mobile" />
  <GalleryView id="GalerryView" v-show="!$vuetify.display.mobile"/>
  <ConfirmAttendanceForm id="ConfirmAttendanceForm" />
  <FooterView />
</template>

<script>
import FullScreen from "@/components/FullScreen.vue";
import WelcomeView from "@/components/Welcome.vue";
import CountReverse from "@/components/CountReverse.vue";
import CeremonyReceptionView from "@/components/CeremonyReception.vue";
import DressCodeView from "@/components/DressCode.vue";
import PassesView from "@/components/Passes.vue";
import GiftTableView from "@/components/GiftTable.vue";
import ConfirmAttendanceForm from "@/components/ConfirmAttendanceForm.vue";
import GalleryView from "@/components/Gallery.vue";
import GalleryMobileView from "@/components/GalleryMobile.vue"
import FooterView from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    FullScreen,
    WelcomeView,
    CountReverse,
    CeremonyReceptionView,
    DressCodeView,
    PassesView,
    GiftTableView,
    GalleryMobileView,
    GalleryView,
    ConfirmAttendanceForm,
    FooterView,
  },
};
</script>
xz