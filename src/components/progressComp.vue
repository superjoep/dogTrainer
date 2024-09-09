<template>
  <div class="pt-2 h-12">
    <div class="flex gap-7 justify-center items-center relative">
      <button
        @click="previousPage()"
        class="bg-blue-200 p-2 rounded-lg text-white font-extrabold"
      >
        <
      </button>
      <div v-for="item in lessonData.lessonPart">
        <div
          v-if="item.lessonPartID == lessonPage"
          class="bg-blue-500 w-5 h-5 rounded-full"
        ></div>
        <div v-else class="bg-blue-200 w-5 h-5 rounded-full"></div>
      </div>
      <button
        @click="nextPage()"
        class="bg-blue-200 p-2 rounded-lg text-white font-extrabold"
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
});
const emit = defineEmits();
function nextPage() {
  emit("nextPage");
}
function previousPage() {
  emit("previousPage");
}
</script>
