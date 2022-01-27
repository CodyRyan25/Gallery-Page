<template>
  <q-page class="flex flex-center">
    <v-html>
        <h3>Welcome!</h3>
          <p>
            <img
              alt="Oli Logo"
              src="~assets/Oli_Pic1.jpg"
              style="width: 500px; height: 500px"
            />
          </p>
    </v-html>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageIndex",
});
</script>
