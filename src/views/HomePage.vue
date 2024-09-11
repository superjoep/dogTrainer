<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons>
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <div class="grid font-bold text-2xl mt-5">Pick a training</div>
      <div v-for="item in jsonData.puppyTrainingCourses" :key="item.completed">
        <trainingComp :data="item" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import trainingComp from "@/components/trainingComp.vue";
import jsonData from "@/data/tempData.json";
</script>
