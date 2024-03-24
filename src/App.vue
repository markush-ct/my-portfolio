<template>
  <div class="min-h-screen bg-base font-['poppins'] text-gray-50">
    <Navbar />
    <Hero />

    <main>
      <About />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/sections/About.vue";
</script>
