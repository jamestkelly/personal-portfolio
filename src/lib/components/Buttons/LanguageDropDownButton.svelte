<script lang="ts">
	import { IconLanguage } from '@tabler/icons-svelte';
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { _, locale } from 'svelte-i18n';

	let currentLocale: string = 'en';

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
	<DropdownItem
		class={currentLocale === 'en' ? 'bg-red-900' : ''}
		on:click={() => handleLocaleChange('en')}>{$_('locale-switch.languages.en')}</DropdownItem
	>
	<DropdownItem
		class={currentLocale === 'de' ? 'bg-red-900' : ''}
		on:click={() => handleLocaleChange('de')}>{$_('locale-switch.languages.de')}</DropdownItem
	>
	<DropdownItem
		class={currentLocale === 'jp' ? 'bg-red-900' : ''}
		on:click={() => handleLocaleChange('jp')}>{$_('locale-switch.languages.jp')}</DropdownItem
	>
	<DropdownItem
		class={currentLocale === 'vn' ? 'bg-red-900' : ''}
		on:click={() => handleLocaleChange('vn')}>{$_('locale-switch.languages.vn')}</DropdownItem
	>
</Dropdown>
