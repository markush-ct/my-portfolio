<template>
  <a :href="href" :class="isOpaque" class="round" :target="target">
    <slot />
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  opaque: {
    default: false,
    type: Boolean,
  },
  href: {
    default: '#',
    type: String,
  },
  target: {
    default: undefined,
    type: String,
  },
});

const isOpaque = computed(() => {
  return props.opaque
    ? "inline-flex items-center gap-2 rounded-md px-3 py-2 transition duration-150 ease-in-out hover:bg-primary hover:bg-opacity-10 border-2 border-primary text-primary"
    : "inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 transition duration-150 ease-in-out hover:bg-opacity-80";
});
</script>
