<script>
	import '$lib/i18n';
	import { isLocaleLoaded } from '$lib/i18n';
</script>

<div class="container">
	<div>
		{#if $isLocaleLoaded}
			<slot />
		{:else}
			<div>Loading...</div>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		margin: 2rem;
		font-family: sans-serif;
	}
</style>
