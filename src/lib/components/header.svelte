<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header
	class="bg-surface-700 shadow-lg px-4 py-4 flex items-center justify-between w-full fixed top-0 left-0 right-0 overflow-hidden overscroll-none"
>
	<div class=" font-bold text-xl text-white">My App</div>
	<div class="flex items-center space-x-4">
		<!-- <button
			class="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded"
		>
			Menu
		</button> -->
		<LightSwitch />
	</div>
</header>
