<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>:D</title>
</svelte:head>

<Header />
<main class="h-screen flex flex-col justify-center overflow-auto">
	<slot></slot>
</main>
<Footer />

<style>
	:global(body) {
		padding-top: 32px;
		padding-bottom: 16;
		overscroll-behavior-y: none;
	}

	:global(html) {
		overflow-y: auto;
	}
</style>
