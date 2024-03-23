<template>
  <header
    class="grid min-h-[calc(100vh-60px)] grid-cols-1 px-6 text-center md:gap-6 md:px-12 lg:grid-cols-2 lg:text-left"
  >
    <div class="flex flex-col justify-center gap-6 py-6">
      <h1 class="text-6xl font-bold">
        I'm <span class="text-primary">Marc Jenald</span>, a
        <br />
        Programmer and
        <br />
        Graphic Designer
      </h1>

      <p class="text-gray-400">
        A programmer and graphic designer with both have of almost 3 years of
        experience specialized in sublimation products and full stack web
        development.
      </p>

      <div class="flex justify-center gap-3 lg:justify-start">
        <a
          href="#"
          class="bg-primary inline-flex items-center gap-2 px-3 py-2 transition duration-150 ease-in-out hover:bg-opacity-80"
        >
          <PhFile id="icon" weight="fill" />
          <span class="font-medium">My Resume</span>
        </a>
        <a
          href="#"
          class="border-primary text-primary hover:bg-primary inline-flex items-center gap-2 border-2 px-3 py-2 transition duration-150 ease-in-out hover:bg-opacity-10"
        >
          <PhPhoneCall id="icon" weight="fill" />
          <span class="font-medium">Hire Me</span>
        </a>
      </div>
    </div>

    <div class="divide-secondary flex flex-col justify-center divide-y-2">
      <div class="space-y-6 py-6">
        <h2 class="text-2xl font-bold uppercase">About Me</h2>

        <p class="text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa
          deserunt itaque vitae quo illum, iusto architecto quam temporibus
          nesciunt, doloribus debitis eligendi eveniet reiciendis alias
          repellendus? Natus, corrupti vitae!
        </p>

        <a
          href="#"
          class="hover:text-primary hover:border-primary inline-flex gap-3 border-b-4 pb-1 uppercase transition duration-150 ease-in-out"
        >
          Learn More
          <ArrowRightIcon />
        </a>
      </div>

      <div class="space-y-6 py-6">
        <h2 class="text-2xl font-bold uppercase">My Works</h2>

        <p class="text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa
          deserunt itaque vitae quo illum, iusto architecto quam temporibus
          nesciunt, doloribus debitis eligendi eveniet reiciendis alias
          repellendus? Natus, corrupti vitae!
        </p>

        <a
          href="#"
          class="hover:text-primary hover:border-primary inline-flex gap-3 border-b-4 pb-1 uppercase transition duration-150 ease-in-out"
        >
          Learn More
          <ArrowRightIcon />
        </a>
      </div>

      <div class="space-y-6 py-6">
        <h2 class="text-2xl font-bold uppercase">Follow Me</h2>

        <div class="inline-flex gap-3">
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhFacebookLogo id="icon" weight="fill" />
          </a>
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhGithubLogo id="icon" weight="fill" />
          </a>
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhInstagramLogo id="icon" weight="fill" />
          </a>
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhLinkedinLogo id="icon" weight="fill" />
          </a>
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhYoutubeLogo id="icon" weight="fill" />
          </a>
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhTwitterLogo id="icon" weight="fill" />
          </a>
          <a
            href="#"
            class="hover:text-primary transition duration-150 ease-in-out"
          >
            <PhBehanceLogo id="icon" weight="fill" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import {
  PhFacebookLogo,
  PhGithubLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhYoutubeLogo,
  PhTwitterLogo,
  PhBehanceLogo,
  PhFile,
  PhPhoneCall,
} from "@phosphor-icons/vue";
</script>
