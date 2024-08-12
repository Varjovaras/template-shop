<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<Header />
<div class="h-screen flex flex-col justify-center">
	<slot></slot>
</div>
<Footer />
