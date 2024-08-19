<script lang="ts">
	import Featured from '$lib/components/featured.svelte';
</script>

<div class="flex-1 px-8 p-4">
	<Featured />

	<div class="container mx-auto p-8 space-y-8">
		<h1 class="h1">Technologies used</h1>
		<p></p>
		<section>
			<a class="btn variant-filled-primary" href="https://kit.svelte.dev/"
				>SvelteKit</a
			>
			<a class="btn variant-filled-secondary" href="https://tailwindcss.com/"
				>Tailwind</a
			>
			<a
				class="btn variant-filled-tertiary"
				href="https://github.com/Varjovaras/template-shop">GitHub repository</a
			>
		</section>
	</div>
</div>
