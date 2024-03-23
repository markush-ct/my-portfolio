<template>
  <nav
    class="relative flex h-[60px] items-center justify-between px-6 md:px-12"
  >
    <div class="text-2xl font-black">
      <a href="/">
        <span class="text-primary mr-3">&#60;&#47;&#62;</span>MarkushCT
      </a>
    </div>

    <ul class="hidden gap-6 md:flex">
      <li v-for="navLink in navLinks">
        <a
          href="#"
          class="hover:border-primary inline-flex items-center border-b-4 border-transparent px-1 pb-3 pt-4 font-medium leading-5 transition duration-150 ease-in-out"
        >
          {{ navLink }}
        </a>
      </li>
    </ul>

    <div class="block md:hidden">
      <button
        @click="isResponsive = !isResponsive"
        class="bg-secondary hover:bg-primary rounded-xl p-3 shadow-md transition duration-150 ease-in-out"
      >
        <Bars3Icon />
      </button>

      <div
        v-if="isResponsive"
        class="bg-base absolute left-0 top-[60px] block w-full text-center shadow-xl"
      >
        <ul>
          <li v-for="navLink in navLinks">
            <a
              href="#"
              class="bg-base hover:bg-primary block px-6 py-4 font-medium leading-5 transition duration-150 ease-in-out"
            >
              {{ navLink }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Bars3Icon } from "@heroicons/vue/24/solid";

import { ref } from "vue";

const navLinks = ["Home", "About", "Skills", "Works", "Contact"];
const isResponsive = ref(false);
</script>
