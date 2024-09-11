<template>
  <div class="pt-2 h-12">
    <div class="flex gap-7 justify-center items-center relative">
      <button
        :class="{ '!bg-blue-200': backward }"
        @click="previousPage()"
        class="bg-blue-500 p-2 rounded-xl text-white font-extrabold"
      >
        <
      </button>
      <div v-for="item in lessonData.lessonPart">
        <div
          :class="{
            '!bg-blue-500': item.lessonPartID == lessonPage,
            '!bg-blue-400': item.finished && item.lessonPartID != lessonPage,
          }"
          class="bg-blue-200 w-5 h-5 rounded-full"
        ></div>
      </div>
      <button
        :class="{ '!bg-blue-200': forward }"
        @click="nextPage()"
        class="bg-blue-500 p-2 rounded-xl text-white font-extrabold"
      >
        >
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  lessonData: { type: Object, required: true },
  lessonPage: { type: Number, required: true },
  forward: { type: Boolean, required: true },
  backward: { type: Boolean, required: true },
});
const emit = defineEmits();

const nextPage = () => {
  emit("nextPage");
};
const previousPage = () => {
  emit("previousPage");
};
</script>
