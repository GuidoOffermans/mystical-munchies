<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	const items = [1, 2, 3, 4, 5];
</script>

<div class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mb-4">
	<h3 class="text-base font-semibold leading-6">Recipes</h3>
	<div class="mt-3 sm:ml-4 sm:mt-0">
		<button type="button" class="btn variant-filled-primary items-center text-sm font-semibold">
			Create new recipe
		</button>
	</div>
</div>

<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
	{#each items as item}
		<li>
			<a class="card bg-initial card-hover overflow-hidden" href="/recipes/1">
				<header>
					<img
						src="https://source.unsplash.com/vjUokUWbFOs/400x175"
						class="bg-black/50 w-full aspect-[21/9]"
						alt="Post"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h6 class="h6">Announcements</h6>
					<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
					<article>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
							aspernatur provident eveniet eligendi cumque consequatur tempore sint
							nisi sapiente. Iste beatae laboriosam iure molestias cum expedita
							architecto itaque quae rem.
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">By Alex</h6>
						<small>On {new Date().toLocaleDateString()}</small>
					</div>
				</footer>
			</a>
		</li>
	{/each}
</ul>
