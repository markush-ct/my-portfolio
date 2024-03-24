<template>
  <section
    id="works"
    class="flex min-h-screen items-center justify-center bg-secondary"
  >
    <div class="w-full max-w-[1920px] px-3 py-24 md:px-12">
      <div class="space-y-6">
        <span class="border-l-4 border-primary px-6 text-xl font-bold">
          About Me
        </span>

        <h1 class="text-4xl font-bold">My best projects I made so far</h1>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
          <template v-for="{ title, description, link, techStack } in projects">
            <ProjectCard
              class="col-span-6 lg:col-span-4"
              :title="title"
              :description="description"
              :link="link"
            >
              <template v-for="{ name, type, classIcon } in techStack">
                <TechLabel :name="name" :type="type" :classIcon="classIcon" />
              </template>
            </ProjectCard>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// components
import ProjectCard from "../../ProjectCard.vue";
import TechLabel from "../../TechLabel.vue";

const projects = [
  {
    title: "subli-tool",
    description:
      "A lightweight python script that automate sizing in sublimation.",
    link: "https://github.com/markush-ct/subli-tool",
    techStack: [
      {
        name: "Python",
        type: "warning",
        classIcon: "devicon-python-plain",
      },
    ],
  },
  {
    title: "social-media-app",
    description:
      "A simple and advanced social media app using Laravel and Vue.js",
    link: "https://github.com/markush-ct/social-media-app",
    techStack: [
      {
        name: "Php",
        type: "primary",
        classIcon: "devicon-php-plain",
      },
      {
        name: "Laravel",
        type: "warning",
        classIcon: "devicon-laravel-plain",
      },
      {
        name: "VueJS",
        type: "secondary",
        classIcon: "devicon-vuejs-plain",
      },
    ],
  },
  {
    title: "phaser-project-template",
    description: "A Phaser Project Template with Webpack 5",
    link: "https://github.com/markush-ct/phaser-project-template",
    techStack: [
      {
        name: "JavaScript",
        type: "primary",
        classIcon: "devicon-javascript-plain",
      },
      {
        name: "HTML5",
        type: "success",
        classIcon: "devicon-html5-plain",
      },
    ],
  },
  {
    title: "my-portfolio",
    description:
      "My simple and intuitive portfolio built with vue.js and tailwindcss",
    link: "https://github.com/markush-ct/my-portfolio",
    techStack: [
      {
        name: "HTML5",
        type: "success",
        classIcon: "devicon-html5-plain",
      },
      {
        name: "CSS3",
        type: "success",
        classIcon: "devicon-css3-plain",
      },
      {
        name: "JavaScript",
        type: "primary",
        classIcon: "devicon-javascript-plain",
      },
      {
        name: "VueJS",
        type: "secondary",
        classIcon: "devicon-vuejs-plain",
      },
    ],
  },
];
</script>
