<script lang="ts">
  import "../theme.postcss";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  import { AppShell, Avatar, Drawer, drawerStore, LightSwitch, popup, storePopup } from "@skeletonlabs/skeleton";
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
  import { page } from "$app/stores";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  const popupCombobox: PopupSettings = {
    event: "focus-click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item"
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/"
    },
    {
      name: "Recipes",
      href: "/recipes"
    },
    {
      name: "Grocery List",
      href: "/grocery-list"
    }
  ];

  $: classesActive = (href: string) => (href === $page.url.pathname ? "!bg-primary-500" : "");
</script>

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

        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                {#each navItems as navItem}
                  <li>
                    <a
                      href={navItem.href}
                      on:click={() => drawerStore.close()}
                      class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold {classesActive(
												navItem.href
											)}"
                    >
                      <svg
                        class="h-6 w-6 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                      {navItem.name}
                    </a>
                  </li>
                {/each}
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <svg
                  class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</Drawer>

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-50">
  <svelte:fragment slot="header">
    {#if !($page.url.pathname.startsWith('/login') || $page.url.pathname.startsWith('/register'))}
      <div
        class="flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-600 bg-surface-50-900-token px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          on:click={() => drawerStore.open()}
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="relative flex flex-1 items-center"></div>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <LightSwitch />
            <button type="button" class="-m-2.5 p-2.5">
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true"></div>

            <!-- Profile dropdown -->
            <div class="relative">
              <button
                type="button"
                class="-m-1.5 flex items-center p-1.5"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                use:popup={popupCombobox}
              >
                <span class="sr-only">Open user menu</span>
                <Avatar
                  src=""
                  initials="AB"
                  border="border-2 border-surface-300-600-token hover:!border-primary-500"
                  cursor="cursor-pointer"
                  width="w-8"
                />
                <span class="hidden lg:flex lg:items-center">
								<span
                  class="ml-4 text-sm font-semibold leading-6"
                  aria-hidden="true">Tom Cook</span
                >
								<svg
                  class="ml-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
									<path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
								</svg>
							</span>
              </button>

              <nav
                data-popup="popupCombobox"
                class="list-nav absolute right-0 top-0 z-10 mt-2.5 w-32 bg-surface-100-800-token origin-top-right rounded-md py-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <ul>
                  <li>
                    <a
                      href="/app/profile"
                      class="block px-3 py-1 text-sm leading-6"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0">Your profile</a
                    >
                  </li>
                  <li>
                    <form method="POST" action="/logout">
                      <button class="block px-3 py-1 text-sm leading-6 w-full" tabindex="-1" role="menuitem">Sign out</button>
                    </form>
                  </li>
                </ul>

                <div class="arrow bg-surface-100-800-token"></div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="sidebarLeft">
    <div
      id="sidebar-left"
      class="hidden lg:fixed lg:inset-y-0 lg:z-30 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-600 bg-surface-50-900-token px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h1 class="ml-2">Mystical Munchies</h1>
        </div>

        <nav class="list-nav flex flex-1 flex-col">
          <ul role="list" class="-mx-2 space-y-1">
            {#each navItems as navItem}
              <li>
                <a
                  href={navItem.href}
                  class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold {classesActive(
										navItem.href
									)}"
                >
                  <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  {navItem.name}
                </a>
              </li>
            {/each}
          </ul>

          <a
            href="/app/settings"
            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 mt-auto"
          >
            <svg
              class="h-6 w-6 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Settings
          </a>
        </nav>
      </div>
    </div>
  </svelte:fragment>

  <div class="lg:pl-72">
    <main class="py-10">
      <div class="px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</AppShell>
