<script lang="ts">
  import { currentUser } from "$lib/pocketbase";
  import { redirect } from "@sveltejs/kit";

  if (!$currentUser) {
    console.log(currentUser);
    console.log("redirecting to login from error.svelte");
    throw redirect(303, "/login");
  }
</script>

<main
  class="grid min-h-full place-items-center bg-surface-100-800-token px-6 py-24 sm:py-32 lg:px-8"
>
  <div class="text-center">
    <p class="text-base font-semibold text-primary-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" class="btn variant-filled-primary text-sm font-semibold">Go back home</a>
    </div>
  </div>
</main>
