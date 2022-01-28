<template>
  <q-page>
    <v-html>
      <div class="row" style="height: 940px">
        <div class="col-3 SideCol"></div>
        <div class="col-6 relative-center TopPad">
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                navigation
                arrows
                height="600px"
                class="bg-grey-1 shadow-2 rounded-borders">

                <q-carousel-slide :name="1" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli1.jpg" />
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli2.jpg" />
                  </div>
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli3.jpg" />
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli4.jpg" />
                  </div>

                </q-carousel-slide>
                <q-carousel-slide :name="3" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli5.jpg" />
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli6.jpg" />
                  </div>

                </q-carousel-slide>
                <q-carousel-slide :name="4" class="column no-wrap">
                  <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli7.jpg" />
                    <q-img class="rounded-borders col-6 full-height" src="~assets/Oli8.jpg" />
                  </div>

                </q-carousel-slide>
              </q-carousel>

        </div>
        <div class="col-3 SideCol"></div>
      </div>
    </v-html>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
export default {
  setup () {
    return {
      slide: ref(1)
    }
  },
   name: "PageGallery",
};
</script>