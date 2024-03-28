<script>
	import Tilt from '$lib/utils/tilt';
	import { Button, Card } from 'flowbite-svelte';

	let reverse = true;
</script>

<div use:Tilt={{ scale: 1.1, reverse }}>
	<Card>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button class="w-fit">Read more</Button>
	</Card>
</div>
