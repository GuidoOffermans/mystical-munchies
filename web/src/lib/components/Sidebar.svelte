<script lang="ts">
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import Navigation from "$lib/components/Navigation.svelte";
</script>

<div
  id="sidebar-left"
  class="hidden lg:block lg:inset-y-0 lg:flex lg:w-60 xl:w-72 lg:flex-col h-full"
>
  <div
    class="flex min-h-full flex-col gap-y-5 overflow-y-auto border-r border-gray-600 bg-surface-50-900-token px-6 pb-4"
  >
    <Navigation />
  </div>
</div>

<Drawer>
  <div class="relative z-50 lg:hidden h-full" role="dialog" aria-modal="true">
    <div class=" mr-16 flex w-full h-full max-w-xs flex-1">
      <div class="absolute right-0 top-0 flex w-16 justify-center pt-5 z-60">
        <button type="button" class="-m-2.5 p-2.5" on:click={() => drawerStore.close()}>
          <span class="sr-only">Close sidebar</span>
          <svg
            class="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4 h-full">
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>

        <Navigation />
      </div>
    </div>
  </div>
</Drawer>