<script>
  export let lang;
  import Header from './Header/Header.svelte';
  import Section_0_Intro from './IndexPage/Intro.svelte';
  import Section_2_MarginForex from './2_MarginForexPage/sections/1_Intro.svelte';
  import Section_3_B2B from './B2BPage/Page.svelte';
  import Section_1_Ebitda from './1_EbitdaPage/Section_1_Ebitda.svelte';
  import Section_3_MAU from './3_MauPage/Section_3_MAU.svelte';
  import Section_5_IT from './5_IT/Section_5_IT.svelte';
  import Section_6_Remote from './6_Remote/Section_6_Remote.svelte';
  import Section_7_Management from './7_Management/Section_7_Management.svelte';
  import Section_8_SocialResponsibility from './8_SocialResponsibility/Section_8_SocialResponsibility.svelte';
</script>

<svelte:head>
  <title>Quadcode Annual Review 2020</title>
</svelte:head>

<Header lang="{lang}" />

<Section_0_Intro lang="{lang}" />

<Section_1_Ebitda lang="{lang}" />

<Section_2_MarginForex lang="{lang}" />

<Section_3_MAU lang="{lang}" />

<Section_3_B2B lang="{lang}" />

{#if lang === 'ru'}
  <Section_5_IT lang="{lang}" />
{/if}

<Section_6_Remote lang="{lang}" />

<Section_7_Management lang="{lang}" />

<Section_8_SocialResponsibility lang="{lang}" />
