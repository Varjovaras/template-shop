<script lang="ts">
    import type { Country } from "$lib/utils/types";

    export let data: { countries: Country[] };
</script>

<div class="px-16 p-4">
    <div class="container bg-slate-300 shadow-lg rounded-lg p-8 m-4 space-y-4">
        <h2 class="h1 text-gray-800 font-bold text-lg">What we offer</h2>
        <p class="text-gray-800 text-sm">ali ali :D</p>
        <p class="text-gray-800 text-sm">ali ali :D</p>
    </div>

    <div class="container shadow-lg rounded-lg border p-8 space-y-4 m-4">
        <h1 class="h1">Technologies used</h1>
        <section class="space-y-2">
            <a class="btn variant-filled-primary" href="https://kit.svelte.dev/"
                >SvelteKit</a
            >
            <a
                class="btn variant-filled-secondary"
                href="https://tailwindcss.com/">Tailwind</a
            >
            <a
                class="btn variant-filled-tertiary"
                href="https://github.com/Varjovaras/template-shop"
                >GitHub repository</a
            >
        </section>
    </div>
</div>

<ul>
    {#each data.countries as country}
        <li>{country.name}</li>
    {/each}
</ul>
