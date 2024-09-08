<template>
  <div class="h-12">
    <div class="grid grid-cols-5 relative">
      <div class="bg-blue-500 w-5 h-5 rounded-full"></div>
      <div class="bg-blue-200 w-5 h-5 rounded-full"></div>
      <div class="bg-blue-200 w-5 h-5 rounded-full"></div>
      <div class="bg-blue-200 w-5 h-5 rounded-full"></div>
      <div class="bg-blue-200 w-5 h-5 rounded-full"></div>
    </div>
  </div>
  <div class="h-1/5 container">
    <div class="grid absolute h-48">
      <div class="mainTitle drop-shadow-lg self-end z-20">
        {{ data.title }}
      </div>
    </div>
    <img
      class="shadow-inner h-48 relative object-cover w-full z-0"
      src="https://cdn.usegalileo.ai/sdxl10/1820a57a-7a7a-46ae-a67a-5f3b90777691.png"
    />
  </div>
  <div class="grid">
    <div v-for="id in data.lessonInfo">
      <div v-if="(id.partType = 'text')">
        <h1 class="font-bold">{{ id.title }}</h1>
        <div class="text-xl">{{ id.text }}</div>
      </div>
      <div v-if="(id.partType = 'list')">
        <h1 class="font-bold">{{ id.title }}</h1>
        <ol class="list-decimal pl-4">
          <li class="pt-4" v-for="item in id.list">
            {{ item.step }}
          </li>
        </ol>
      </div>
    </div>
    <div class="text-2xl font-bold pt-5">Tips & Cautions</div>
    <div class="text-xl pt-3">{{ data.Tip }}</div>
    <div class="text-l font-light pt-3 text-blue-500">{{ data.Warning }}</div>
  </div>
  <div class="grid">
    <ion-button class="font-bold place-self-center w-56 m-5"
      >Next Lesson</ion-button
    >
  </div>
</template>
<script setup>
import { IonButton } from "@ionic/vue";
defineProps(["data"]);
</script>
