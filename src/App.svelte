<script lang="typescript">
  import Tailwindcss from "./TailwindStyles.svelte";
  import ModeSwitcher from "./ModeSwitcher.svelte";
  import NavBar from "./NavBar.svelte";

  import Home from "./pages/Home.svelte";
  import Publication from "./pages/Publication.svelte";
  import Software from "./pages/Software.svelte";
  import Teaching from "./pages/Teaching.svelte";
  import Cv from "./pages/Cv.svelte";
  import Contact from "./pages/Contact.svelte";

  import Router from "svelte-spa-router";
  import Footer from "./Footer.svelte";

  const routes = {
    "/": Home,
    "/publication": Publication,
    "/software": Software,
    "/teaching": Teaching,
    "/cv": Cv,
    "/contact": Contact,
    "*": Home,
  };
</script>

<style>
</style>

<Tailwindcss />
<ModeSwitcher />
<NavBar />
<div class="flex-grow max-w-screen-lg m-auto p-4">
  <Router {routes} />
</div>
<Footer />
