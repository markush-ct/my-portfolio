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
// Partials
import Navbar from "./components/partials/Navbar.vue";
import Hero from "./components/partials/Hero.vue";

// Sections
import About from "./components/partials/sections/About.vue";
import Skills from "./components/partials/sections/Skills.vue";
</script>
