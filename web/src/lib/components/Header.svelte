<script lang="ts">
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  import { Avatar, drawerStore, popup, storePopup } from "@skeletonlabs/skeleton";
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";

  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  const popupCombobox: PopupSettings = {
    event: "focus-click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item"
  };
</script>
<div
  class="flex h-16 shrink-0 items-center gap-x-4 justify-between border-b border-gray-600 bg-surface-50-900-token px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
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

  <div class="flex h-16 shrink-0 items-center">
    <img
      class="h-8 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt="Your Company"
    />
    <h1 class="ml-2">Mystical Munchies</h1>
  </div>

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
            <button class="block px-3 py-1 text-sm leading-6 w-full" tabindex="-1" role="menuitem">Sign out
            </button>
          </form>
        </li>
      </ul>

      <div class="arrow bg-surface-100-800-token"></div>
    </nav>
  </div>

</div>