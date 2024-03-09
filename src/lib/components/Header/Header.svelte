<script lang="ts">
  import { _ } from "svelte-i18n";
  import LanguageDropDownButton from "../Buttons/LanguageDropDownButton.svelte";

  export let y: any;

  
  let tabs = [
    { name: "about", link: "/about"},
    { name: "experience", link: "/experience"},
    { name: "projects", link: "/projects"},
    { name: "contact", link: "/contact"},
  ];
</script>

<header class="{"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
  y > 0 ? 'py-4 bg-slate-950 border-violet-950' : 'py-6 bg-transparent border-transparent'
)}">
  <h1 class="font-medium">
    <b class="font-bold">Jim Tran Kelly</b>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab}
      <a href={tab.link} class="duration-200 hover:text-violet-400">
        <p>{$_(`sections.${tab.name}`)}</p>
      </a>
    {/each}
  </div>
  <LanguageDropDownButton />
</header>