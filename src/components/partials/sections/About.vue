<template>
  <section
    id="about"
    class="grid min-h-screen grid-cols-1 items-center gap-6 bg-secondary px-3 py-24 md:grid-cols-12 md:px-12"
  >
    <div class="space-y-6 md:col-span-6">
      <span class="border-l-4 border-primary px-6 text-xl font-bold">
        About Me
      </span>

      <h1 class="text-4xl font-bold">
        I've been developing
        <br />
        websites since 2021
      </h1>

      <p class="text-justify text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In non aliquam
        at quia exercitationem tempore reiciendis odit error quasi earum eveniet
        nam, ipsa delectus dolorem voluptatem molestias, officiis impedit
        numquam!
      </p>
    </div>

    <div class="space-y-6 md:col-span-6">
      <div class="flex gap-6">
        <div class="inline-flex items-end gap-3">
          <span class="text-6xl font-bold text-primary">3</span>
          <div>
            years of
            <br />
            experience
          </div>
        </div>

        <div class="inline-flex items-end gap-3">
          <span class="text-6xl font-bold text-primary">10</span>
          <div>
            Successful
            <br />
            projects
          </div>
        </div>
      </div>

      <p class="text-justify text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi
        deserunt sint corrupti quam consequuntur. Rerum labore consectetur qui
        nemo, id hic? Enim nobis accusantium adipisci ex sit qui distinctio!
      </p>
    </div>

    <div class="space-y-6 md:col-span-12">
      <h1 class="text-4xl font-bold">
        My favorite tools and
        <br />
        technologies I use
      </h1>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
        <template v-for="favoriteTool in favoriteTools">
          <TechCards
            :name="favoriteTool.name"
            :classIcon="favoriteTool.class"
            :image="favoriteTool.image"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import TechCards from "../../TechCards.vue";

const favoriteTools = [
  {
    name: "HTML5",
    class: "devicon-html5-plain colored",
  },
  {
    name: "CSS3",
    class: "devicon-css3-plain colored",
  },
  {
    name: "JavaScript",
    class: "devicon-javascript-plain colored",
  },
  {
    name: "Bootstrap",
    class: "devicon-bootstrap-plain colored",
  },
  {
    name: "TailwindCSS",
    class: "devicon-tailwindcss-original colored",
  },
  {
    name: "Vite",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Vue",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React",
    class: "devicon-react-original colored",
  },
  {
    name: "NodeJS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "NPM",
    class: "devicon-npm-original-wordmark colored",
  },
  {
    name: "Php",
    class: "devicon-php-plain colored",
  },
  {
    name: "Laravel",
    class: "devicon-laravel-original colored",
  },
  {
    name: "LiveWire",
    class: "devicon-livewire-plain colored",
  },
  {
    name: "Codeigniter",
    class: "devicon-codeigniter-plain colored",
  },
  {
    name: "MySql",
    class: "devicon-mysql-original colored",
  },
  {
    name: "Wordpress",
    class: "devicon-wordpress-plain",
  },
  {
    name: "Java",
    class: "devicon-java-plain colored",
  },
  {
    name: "C#",
    class: "devicon-csharp-plain colored",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Django",
    class: "devicon-django-plain",
  },
  {
    name: "Godot",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
  },
  {
    name: "Git",
    class: "devicon-git-plain colored",
  },
  {
    name: "Github",
    class: "devicon-github-original",
  },
  {
    name: "Photoshop",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Illustrator",
    class: "devicon-illustrator-plain colored",
  },
];
</script>
