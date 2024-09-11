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
let forwardBtn = ref(true);
let backwardBtn = ref(true);

//finds the lessondata based on the lessonID
let lessonData = jsonData.lessons.find((x) => x.id === lessonId);
//finds the correct lesson within the lessonData based on the value of lessonPage
const specificData = computed(() =>
  lessonData?.lessonPart.find(
    (x) => x.lessonPartID === lessonPage.value.toString()
  )
);
// finds the course to add the amount of finished lessons
const addFinished = computed(() =>
  jsonData.puppyTrainingCourses.find((x) => x.id === lessonData?.id)
);
//calculates and adds the amount of finished lessons
const amountFinished = () => {
  let amount = 0;
  lessonData?.lessonPart.forEach((x) => {
    if (x.finished == true) {
      amount++;
    }
  });
  addFinished.value.completed = amount.toString();
};
//checks if forward and backward buttons are active or not
const checkActive = () => {
  if (lessonPage.value > 1) {
    backwardBtn.value = false;
  } else {
    backwardBtn.value = true;
  }
  if (
    lessonPage.value < lessonData.lessonPart.length &&
    specificData.value.finished == true
  ) {
    forwardBtn.value = false;
  } else {
    forwardBtn.value = true;
  }
};
//goes to next lesson if possible
const nextLesson = (check = false) => {
  if (!check) {
    if (
      lessonPage.value < lessonData.lessonPart.length ||
      specificData.value.finished == true
    ) {
      specificData.value.finished = true;
      contentRef.value.$el.scrollToTop();
      lessonPage.value++;
    }
  } else if (
    lessonPage.value < lessonData.lessonPart.length &&
    specificData.value.finished == true
  ) {
    specificData.value.finished = true;
    contentRef.value.$el.scrollToTop();
    lessonPage.value++;
  }
  amountFinished(0);
  checkActive();
};
//goes to previous lesson if possible
const previousLesson = () => {
  if (lessonPage.value > 1) {
    forwardBtn.value = false;
    contentRef.value.$el.scrollToTop();
    lessonPage.value--;

    checkActive();
  }
};
//when entire lesson is finished set everything on done
const finished = () => {
  specificData.value.finished = true;
  amountFinished();
};
checkActive();
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
        :forward="forwardBtn"
        :backward="backwardBtn"
        @nextPage="nextLesson(true)"
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
        <RouterLink
          @click="finished()"
          class="place-self-center"
          v-else
          to="/home"
        >
          <ion-button default-href="/" class="font-bold w-56 m-5"
            >Finish</ion-button
          >
        </RouterLink>
      </div>
    </ion-content>
  </ion-page>
</template>
