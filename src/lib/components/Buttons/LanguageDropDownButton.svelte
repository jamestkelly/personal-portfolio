<script lang="ts">
	import { IconLanguage } from '@tabler/icons-svelte';
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { _, locale } from 'svelte-i18n';

	let currentLocale: string = 'en';
	const locales = ['en', 'de', 'jp', 'vn'];

	function handleLocaleChange(newLocale: string) {
		currentLocale = newLocale;
		$locale = currentLocale;
	}
</script>

<Button
	>{$_(`locale-switch.languages.${currentLocale}`)}
	<IconLanguage class="w-6 h-6 ms-2 text-white dark:text-white" /></Button
>
<Dropdown>
	{#each locales as loc}
		<DropdownItem
			class={currentLocale === loc ? 'bg-pink-100' : ''}
			on:click={() => handleLocaleChange(loc)}
		>
			{$_(`locale-switch.languages.${loc}`)}
		</DropdownItem>
	{/each}
</Dropdown>
