<template>
  <q-layout view="lHr lpR lfr">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          align="left"
          class="glossy"
          color="primary"
          label="Home"
          icon="home"
          @click="GoToHome"
        />
        <q-btn
          align="left"
          class="glossy"
          color="primary"
          label="Info"
          icon="info"
          @click="GoToInfo"
        />
        <q-btn
          align="left"
          class="glossy"
          color="primary"
          label="Gallery"
          icon="pets"
          @click="GoToGallery"
        />
      </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    function GoToHome() {
      void router.push("/");
    }
    function GoToInfo() {
      void router.push("/info");
    }
    function GoToGallery(){
      void router.push("/gallery");
    }
    return {
      GoToHome,
      GoToInfo,
      GoToGallery,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>