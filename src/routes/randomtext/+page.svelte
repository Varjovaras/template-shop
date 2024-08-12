<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	// import type { PageData } from './$types';

	// export let data: PageData;
</script>

<main class="flex-1 overflow-y-scroll px-4 py-16">
	<h1 class="h3 text-center">RANDOM FACTS ABOUT FISH :D</h1>
	<div class="bg-secondary-900 shadow-lg rounded-lg m-8">
		<Accordion class="w-full">
			<AccordionItem open class="bg-secondary-800">
				<svelte:fragment slot="lead">
					<img alt="" class="w-7" src="/fish.png" />
				</svelte:fragment>
				<svelte:fragment slot="summary"
					>Fish are social and cooperative</svelte:fragment
				>
				<svelte:fragment slot="content">
					<div class="p-4">
						Giant moray eels and Red Sea coral groupers often hunt together.
						First, the groupers make gestures to ask the eels to join them on a
						hunt — a kind of fish sign language. Then, once out hunting, they
						adopt complementary roles: the eels can squeeze into crevices too
						small for the groupers, while the groupers are faster swimmers in
						open water. Working together, the pair has a better chance of
						catching something to eat. Other species of fish work together to
						hunt prey. Fish, such as groupers and coral trout, will send a
						visual signal to show other fish the location of a hidden prey.
						Together, they will catch prey at a higher rate than when hunting
						alone. Groupers don’t just cooperate with other fish. They’ll also
						invite octopuses to hunt.
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead">
					<img alt="" class="w-7" src="/fish.png" />
				</svelte:fragment>
				<svelte:fragment slot="summary"
					>Fish feel pleasure, not just pain</svelte:fragment
				>
				<svelte:fragment slot="content">
					<div class=" p-2">
						Fish interact and form relationships with each other and other fish
						species. For example, bluestreak cleaner wrasses provide a special
						service to fellow fish. The wrasses swim into the gills and mouths
						of their “clients” to remove and feed on their parasites. In some
						cases, their clients are fish who’d otherwise eat them. So, to help
						appease them, the wrasses will often stroke their clients with their
						fins. Studies have shown that being stroked by cleaner fish is not
						only a pleasurable feeling for client fish, it also helps them to
						relieve stress — almost like a therapeutic massage.
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
	<div>joo en jaksanu loppuja kopsaa :D</div>
	<a class="anchor" href="https://spca.bc.ca/news/fun-facts-about-fish/">
		https://spca.bc.ca/news/fun-facts-about-fish/
	</a>
</main>
