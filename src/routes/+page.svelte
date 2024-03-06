<script lang="ts">
  import { _, locale } from 'svelte-i18n';

  let value: string = 'en';

const handleLocaleChange = (event: any) => {
    event.preventDefault();
    value = event?.target?.value;
    $locale = value;
}
</script>

<h1>{$_('main.heading')}</h1>

<div>
  <h2>{$_('locale-switch.title')}</h2>
  <span>{$_('locale-switch.label')}: </span>
  <select {value} on:change={handleLocaleChange}>
      <option value="en" selected>{$_('locale-switch.languages.en')}</option>
      <option value="de">{$_('locale-switch.languages.de')}</option>
      <option value="jp">{$_('locale-switch.languages.jp')}</option>
      <option value="vn">{$_('locale-switch.languages.vn')}</option>
  </select>
</div>

<style>
  h2 { margin-top: 2rem; margin-bottom: 0.4rem; }
  p { line-height: 1.75; }
</style>