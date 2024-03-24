<template>
  <div
    class="col-span-4 flex items-center gap-3 rounded-md bg-base p-3 shadow-md lg:col-span-3"
  >
    <div class="inline-flex rounded-md bg-secondary p-3 shadow-md">
      <i v-if="classIcon" class="text-[28px]" :class="classIcon"> </i>
      <img v-else :src="image" alt="Technologies Icon" class="w-[28px]" />
    </div>
    {{ name }}
  </div>
</template>

<script setup>
defineProps({
  classIcon: {
    default: null,
    type: String,
  },
  image: {
    default: null,
    type: String,
  },
  name: String,
});
</script>
