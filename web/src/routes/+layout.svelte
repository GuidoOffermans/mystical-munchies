<script lang="ts">
  import "../theme.postcss";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
  import { AppShell, storePopup } from "@skeletonlabs/skeleton";
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";

  import { page } from "$app/stores";
  import Header from "$lib/components/Header.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>


<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-50">
  <svelte:fragment slot="header">
    {#if !($page.url.pathname.startsWith('/login') || $page.url.pathname.startsWith('/register'))}
      <Header />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    {#if !($page.url.pathname.startsWith('/login') || $page.url.pathname.startsWith('/register'))}
      <Sidebar />
    {/if}
  </svelte:fragment>

  <main class="py-10">
    <div class="px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </main>

</AppShell>
