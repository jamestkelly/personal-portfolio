<script>
	import { Marquee } from 'flowbite-svelte';
	import { _ } from 'svelte-i18n';

	const colours = ['purple-400', 'blue-400', 'pink-400'];
</script>

<div class="border py-2 border-t-1 border-l-0 border-r-0 border-b-1 relative">
	<div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
		<p class="bg-slate-950 h-full justify-center py-2">{$_('hero.marquee')}</p>
	</div>
	<Marquee speed={1} class="relative">
		{#each Array(2) as val, i}
			{#each colours as colour}
				<p class={`text-${colour}`}>{$_('hero.marquee')}</p>
			{/each}
		{/each}
	</Marquee>
</div>
