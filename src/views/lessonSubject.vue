<script setup lang="ts">
import lessonComp from "@/components/lessonComp.vue";
import progressComp from "@/components/progressComp.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButton,
  IonBackButton,
  IonToolbar,
  IonButtons,
} from "@ionic/vue";
import jsonData from "../data/tempData.json";
import { computed } from "vue";
const contentRef = ref(null);
const route = useRoute();
const lessonId = route.params.id;
const lessonPage = ref(1);
let lessonData = jsonData.lessons.find((x) => x.id === lessonId);
const specificData = computed(() =>
  lessonData.lessonPart.find(
    (x) => x.lessonPartID === lessonPage.value.toString()
  )
);
const nextLesson = () => {
  if (lessonPage.value < lessonData.lessonPart.length) {
    specificData.value.finished = true;
    contentRef.value.$el.scrollToTop();
    lessonPage.value++;
  }
};
const nextLessonCheck = () => {
  if (
    lessonPage.value < lessonData.lessonPart.length &&
    specificData.value.finished == true
  ) {
    specificData.value.finished = true;
    contentRef.value.$el.scrollToTop();
    lessonPage.value++;
  }
};
const previousLesson = () => {
  if (lessonPage.value > 1) {
    contentRef.value.$el.scrollToTop();
    lessonPage.value--;
  }
};
</script>
<template>
  <ion-page>
    <ion-content ref="contentRef" :fullscreen="true">
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons>
            <RouterLink to="/"
              ><ion-back-button default-href="/"></ion-back-button
            ></RouterLink>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <progressComp
        :lessonData="lessonData"
        :lessonPage="lessonPage"
        @nextPage="nextLessonCheck"
        @previousPage="previousLesson"
      />
      <lessonComp :data="specificData" />
      <div class="grid">
        <ion-button
          v-if="lessonPage < lessonData.lessonPart.length"
          @click="
            nextLesson();
            console.log(lessonData.lessonPart.length);
          "
          class="font-bold place-self-center w-56 m-5"
          >Next Lesson</ion-button
        >
        <RouterLink class="place-self-center" v-else to="/home">
          <ion-button default-href="/" class="font-bold w-56 m-5"
            >Finish</ion-button
          >
        </RouterLink>
      </div>
    </ion-content>
  </ion-page>
</template>
