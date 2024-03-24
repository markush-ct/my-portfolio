<template>
  <section id="skills" class="min-h-screen bg-base px-3 py-24 md:px-12">
    <div class="space-y-6">
      <span class="border-l-4 border-primary px-6 text-xl font-bold">
        Skills
      </span>

      <h1 class="text-4xl font-bold">My strength in different areas</h1>

      <div class="grid gap-6 md:grid-cols-12">
        <div class="col-span-6">
          <h2 class="mb-6 text-xl font-bold">Frontend development</h2>

          <div class="space-y-3">
            <div v-for="skill in skills.frontend">
              <SkillsIndicator
                :name="skill.name"
                :percentage="skill.percentage"
              />
            </div>
          </div>
        </div>

        <div class="col-span-6">
          <h2 class="mb-6 text-xl font-bold">Backend development</h2>

          <div class="space-y-3">
            <div v-for="skill in skills.backend">
              <SkillsIndicator
                :name="skill.name"
                :percentage="skill.percentage"
              />
            </div>
          </div>
        </div>

        <div class="col-span-6">
          <h2 class="mb-6 text-xl font-bold">Databases</h2>

          <div class="space-y-3">
            <div v-for="skill in skills.databases">
              <SkillsIndicator
                :name="skill.name"
                :percentage="skill.percentage"
              />
            </div>
          </div>
        </div>

        <div class="col-span-6">
          <h2 class="mb-6 text-xl font-bold">Languages</h2>

          <div class="space-y-3">
            <div v-for="skill in skills.languages">
              <SkillsIndicator
                :name="skill.name"
                :percentage="skill.percentage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillsIndicator from "../../SkillsIndicator.vue";

const skills = {
  frontend: [
    {
      name: "React",
      percentage: "50%",
    },
    {
      name: "Vue",
      percentage: "90%",
    },
    {
      name: "CSS",
      percentage: "90%",
    },
    {
      name: "TailwindCSS",
      percentage: "90%",
    },
    {
      name: "Bootstrap",
      percentage: "90%",
    },
  ],
  backend: [
    {
      name: "NodeJS",
      percentage: "70%",
    },
    {
      name: "ExpressJS",
      percentage: "75%",
    },
    {
      name: "Php",
      percentage: "70%",
    },
    {
      name: "Laravel",
      percentage: "90%",
    },
  ],
  databases: [
    {
      name: "MySQL",
      percentage: "90%",
    },
    {
      name: "MongoDB",
      percentage: "60%",
    },
    {
      name: "Sqlite",
      percentage: "80%",
    },
  ],
  languages: [
    {
      name: "English",
      percentage: "85%",
    },
    {
      name: "Filipino",
      percentage: "95%",
    },
  ],
};
</script>
