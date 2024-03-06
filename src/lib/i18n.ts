import { browser } from '$app/environment';
import { init, locale, register } from 'svelte-i18n';
import { derived } from 'svelte/store';

register('en', () => import('../lang/en.json'));
register('de', () => import('../lang/de.json'));
register('jp', () => import('../lang/jp.json'));
register('vn', () => import('../lang/vn.json'));

init({
	initialLocale: browser ? window.navigator.language : 'en',
	fallbackLocale: 'en'
});

export const isLocaleLoaded = derived(locale, ($locale) => typeof $locale === 'string');

export const escapeHtml = (unsafe: string): string => {
	const replacements: { [key: string]: string } = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	};
	return unsafe.replace(/[&<>"']/g, (match) => replacements[match]);
};
