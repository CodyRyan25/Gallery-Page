<template>
   <q-page>
    <v-html>
      <div class="row" style="height: 940px">
      <div class="col-3 SideCol"></div>
      <div class="col-6 flex flex-center">
        <img
          alt="Oli Logo"
          src="~assets/Oli_Pic1.jpg"
          style="width: 500px; height: 500px"/> 
      </div>
      <div class="col-3 SideCol"></div>
      </div>
    </v-html>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PageIndex",
});
</script>

<style>
.SideCol {background-color:#474a50;}
.TopPad {padding-top: 175px;}
</style>
