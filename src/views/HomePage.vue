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
      <div v-for="item in jsonData.puppy_training_courses">
        <trainingComp
          :title="item.title"
          :description="item.description"
          :img="item.img"
          :id="item.id"
        />
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
import trainingComp from "../comps/trainingComp.vue";
import jsonData from "../data/tempData.json";
</script>
