<script setup>
import { IonButton } from "@ionic/vue";
import { routeNames } from "@/router";

defineProps({ data: Object });
</script>
<template>
  <div class="text-black m-5">
    <img class="rounded-t-2xl object-cover w-full h-52" :src="data.img" />
    <h2 class="font-bold">{{ data.title }}</h2>
    <div class="pb-4 w-2/3">{{ data.description }}</div>
    <div class="flex gap-24">
      <div class="content-center font-light">0/10 lessons completed</div>
      <RouterLink
        :to="{ name: routeNames.lessonSubject, params: { id: data.id } }"
        class="justify-self-end content-center"
        ><ion-button class="font-bold w-20"> Start </ion-button></RouterLink
      >
    </div>
  </div>
</template>
