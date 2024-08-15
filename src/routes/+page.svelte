<script lang="ts">
	import Featured from '$lib/components/featured.svelte';
</script>

<div class="flex-1 px-8 p-4">
	<Featured />
	<div class="bg-white shadow-lg rounded-lg mb-6 p-4">
		<h2 class="text-gray-800 font-bold text-lg mb-4">Recent Activity</h2>
		<ul class="space-y-4">
			{#each Array(2) as _, i}
				<li>{i + 1}</li>
				<li class="flex items-center">
					<div class="bg-blue-500 text-white rounded-full p-2 mr-4">
						<svg
							class="h-6 w-6 fill-current"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm3-8a3 3 0 1 1-3-3 3 3 0 0 1 3 3z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-gray-800 font-bold">Moro :D essi :D</h3>
						<p class="text-gray-600 text-sm">10 years ago</p>
					</div>
				</li>
			{/each}

			<!-- Add more activity items as needed -->
		</ul>
	</div>
	<div class="container mx-auto p-8 space-y-8">
		<h1 class="h1">Hello Skeleton</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<section>
			<a class="btn variant-filled-primary" href="https://kit.svelte.dev/"
				>SvelteKit</a
			>
			<a class="btn variant-filled-secondary" href="https://tailwindcss.com/"
				>Tailwind</a
			>
			<a class="btn variant-filled-tertiary" href="https://github.com/"
				>GitHub</a
			>
		</section>
	</div>
</div>
