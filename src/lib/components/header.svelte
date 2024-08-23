<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	const fnfn = () => {
		supabase.auth.signInWithOAuth({
			provider: 'google',
		});
	};
</script>

<header
	class="bg-surface-500/15 shadow-lg p-4 flex items-center justify-between w-full"
>
	<h1 class="h2">Website for noobs</h1>
	<button on:click={fnfn}>login</button>
</header>
