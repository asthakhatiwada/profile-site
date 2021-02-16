<script lang="typescript">
  import Tailwindcss from "./TailwindStyles.svelte";
  import ModeSwitcher from "./ModeSwitcher.svelte";
  import NavBar from "./NavBar.svelte";

  import Home from "./pages/Home.svelte";
  import Publication from "./pages/Publication.svelte";
  import Software from "./pages/Software.svelte";
  import Teaching from "./pages/Teaching.svelte";
  import Cv from "./pages/Cv.svelte";
  import Project from "./pages/Project.svelte";

  import Router from "svelte-spa-router";
  import Footer from "./Footer.svelte";

  const routes = {
    "/": Home,
    "/publication": Publication,
    "/software": Software,
    "/teaching": Teaching,
    "/cv": Cv,
    "/project": Project,
    "*": Home,
  };
</script>

<style>
  :global(a.external-link) {
    @apply underline;
  }
</style>

<Tailwindcss />
<ModeSwitcher />
<NavBar />
<div class="flex flex-col flex-grow max-w-screen-lg w-screen m-auto p-4">
  <Router {routes} />
</div>
<Footer />
