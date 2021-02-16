<script lang="ts">
  import InlineSVG from "svelte-inline-svg";
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import menu from "../public/heroicons/outline/menu.svg";
  import cross from "../public/heroicons/outline/x.svg";
  import home from "../public/heroicons/solid/home.svg";

  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }
</script>

<style>
  .nav-item {
    @apply block text-white font-semibold hover:bg-black rounded px-2 py-1 md:mt-0 md:ml-2 flex items-center;
  }

  :global(a.nav-item-active) {
    @apply bg-black
  }
</style>

<header class="dark:bg-gray-800 bg-gray-600">
  <div
    class="max-w-screen-lg m-auto md:flex md:justify-between md:px-4 md:py-3 md:pr-3 md:justify-center">
    <div class="flex items-center justify-between px-4 py-3 md:p-0">
      <h1
        class="text-gray-100 text-2xl font-semibold flex-shrink-0 hover:text-blue-100">
        <a href="/" use:link class="flex items-center">
          <InlineSVG
            src={home}
            class="h-6 w-6 fill-current inline-block mr-1" />
          <span>Aastha Khatiwada</span>
        </a>
      </h1>
      <div class="md:hidden">
        <button
          type="button"
          class="text-gray-300 focus:text-white hover:text-white"
          on:click={toggleNav}>
          {#if !isNavOpen}
            <InlineSVG src={menu} class="h-6 w-6 fill-current" />
          {/if}
          {#if isNavOpen}
            <InlineSVG src={cross} class="h-6 w-6 fill-current" />
          {/if}
        </button>
      </div>
    </div>
    <div class="{isNavOpen ? 'block' : 'hidden'} md:block">
      <nav class="px-2 pt-2 pb-4 md:flex md:p-0">
        <a
          href="/"
          class="nav-item"
          use:link
          use:active={{ className: 'nav-item-active' }}>
          Home</a>
        <a
          href="/publication"
          class="nav-item"
          use:link
          use:active={{ className: 'nav-item-active' }}>
          Publication</a>
        <a
          href="/teaching"
          class="nav-item"
          use:link
          use:active={{ className: 'nav-item-active' }}>
          Teaching
        </a>
        <a
          href="/software"
          class="nav-item"
          use:link
          use:active={{ className: 'nav-item-active' }}>
          Software
        </a>
        <a
          href="/project"
          class="nav-item"
          use:link
          use:active={{ className: 'nav-item-active' }}>
          Project
        </a>
        <a
          href="/cv"
          class="nav-item"
          use:link
          use:active={{ className: 'nav-item-active' }}>
          CV
        </a>
      </nav>
    </div>
  </div>
</header>
