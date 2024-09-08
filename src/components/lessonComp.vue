<template>
  <div class="h-1/5 container">
    <div class="grid absolute h-48">
      <div class="mainTitle drop-shadow-lg self-end z-20">
        {{ data.title }}
      </div>
    </div>
    <img
      class="shadow-inner brightness-50 h-48 relative object-cover w-full z-0"
      src="https://cdn.usegalileo.ai/sdxl10/1820a57a-7a7a-46ae-a67a-5f3b90777691.png"
    />
  </div>
  <div class="grid">
    <div v-for="lessons in data.lessonInfo">
      <div v-if="lessons.partType == 'text'">
        <h1 class="font-bold">{{ lessons.title }}</h1>
        <div class="text-xl">{{ lessons.text }}</div>
      </div>
      <div v-else>
        <h1 class="font-bold">{{ lessons.title }}</h1>
        <ol class="list-decimal pl-4">
          <li class="pt-4 font-bold" v-for="item in lessons.list">
            {{ item.step }}
          </li>
        </ol>
      </div>
    </div>
    <div class="text-2xl font-bold pt-5">Tips & Cautions</div>
    <div class="text-xl pt-3">{{ data.tip }}</div>
    <div class="text-l font-light pt-3 text-blue-500">{{ data.warning }}</div>
  </div>
</template>
<script setup>
defineProps({ data: { type: Object, required: true } });
</script>
