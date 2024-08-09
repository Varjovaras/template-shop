<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<div class="flex flex-col justify-center">
	<Header />
	<slot></slot>
</div>
