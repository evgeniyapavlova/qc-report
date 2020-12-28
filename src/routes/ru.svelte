<script>
  const lang = 'ru';
  import Header from '../components/Header/Header.svelte';
  import Section_0_Intro from '../components/IndexPage/Intro.svelte';
  import Section_2_MarginForex from '../components/2_MarginForexPage/sections/1_Intro.svelte';
  import Section_3_B2B from '../components/B2BPage/Page.svelte';
  import Section_1_Ebitda from '../components/1_EbitdaPage/Section_1_Ebitda.svelte';
  import Section_3_MAU from '../components/3_MauPage/Section_3_MAU.svelte';
  import Section_5_IT from '../components/5_IT/Section_5_IT.svelte';
  import Section_6_Remote from '../components/6_Remote/Section_6_Remote.svelte';
  import Section_7_Management from '../components/7_Management/Section_7_Management.svelte';
  import Section_8_SocialResponsibility from '../components/8_SocialResponsibility/Section_8_SocialResponsibility.svelte';
  import Section_9_Gratitude from '../components/9_Gratitude/Section_9_Gratitude.svelte';
</script>

<svelte:head>
  <title>Quadcode Annual Review 2020</title>
</svelte:head>

<Header />

<Section_0_Intro />

<Section_1_Ebitda lang="{lang}" />

<Section_2_MarginForex lang="{lang}" />

<Section_3_MAU lang="{lang}" />

<Section_3_B2B />

<Section_5_IT lang="{lang}" />

<Section_6_Remote lang="{lang}" />

<Section_7_Management lang="{lang}" />

<Section_8_SocialResponsibility lang="{lang}" />

<Section_9_Gratitude lang="{lang}" />
