<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header
	class="dark:bg-cyan-200 bg-cyan-700 shadow-lg px-4 py-3 flex items-center justify-between"
>
	<div class="text-gray-800 font-bold text-xl">My App</div>
	<div class="flex items-center space-x-2">
		<button
			class="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded"
		>
			Menu
		</button>
		<LightSwitch />
	</div>
</header>
