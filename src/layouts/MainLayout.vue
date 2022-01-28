<template>
  <q-layout view="lHr lpR lfr">
    <q-header elevated class="bg-grey-10 text-white justify-center">
      <q-toolbar class="justify-center">
          <div class="q-pa-md q-gutter-sm">
              <q-btn
                align="center"
                class="glossy"
                color="primary"
                label="Home"
                icon="home"
                @click="GoToHome"/>
              <q-btn
                align="center"
                class="glossy"
                color="primary"
                label="Gallery"
                icon="pets"
               @click="GoToGallery"/>
              <q-btn
                align="center"
                class="glossy"
                color="primary"
                label="Info"
                icon="info"
                @click="GoToInfo"/>
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