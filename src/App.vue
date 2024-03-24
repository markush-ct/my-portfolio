<template>
  <div class="min-h-screen bg-base font-['poppins'] text-gray-50">
    <Navbar />
    <Hero />

    <main>
      <About />
      <Skills />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";

// Sections
import About from "./components/sections/About.vue";
import Skills from "./components/sections/Skills.vue";
</script>
