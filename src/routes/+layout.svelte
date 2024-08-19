<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>:D</title>
	<meta name="description" content="Example shop" />
</svelte:head>

<div class="flex flex-col h-screen">
	<Header />
	<main class="flex-1 overflow-auto">
		<slot></slot>
	</main>
	<Footer />
</div>

<style>
	:global(html, body) {
		height: 100%;
		overflow: hidden;
	}
</style>
