<script>
  const lang = 'ru';
  import Intro from '../../components/1_EbitdaPage/sections/1_Intro.svelte';
  import Quarters from '../../components/1_EbitdaPage/sections/2_Quarters.svelte';
  import IntroMF from '../../components/2_MarginForexPage/sections/1_Intro.svelte';
  import IntroMAU from '../../components/3_MauPage/sections/1_Intro.svelte';
  import Marketing from '../../components/3_MauPage/sections/2_Marketing.svelte';
  import Marketing_video from '../../components/3_MauPage/sections/2_Marketing_video.svelte';
  import Marketing_influence from '../../components/3_MauPage/sections/2_Marketing_influence.svelte';
  import Regions from '../../components/3_MauPage/sections/Regions.svelte';
  import Users from '../../components/3_MauPage/sections/4_Users.svelte';
  import Team from '../../components/3_MauPage/sections/4_Team.svelte';
  import Verification from '../../components/3_MauPage/sections/4_Verification.svelte';
  import B2B from '../../components/B2BPage/Page.svelte';
</script>

<svelte:head>
  <title>Quadcode - one year in review</title>
</svelte:head>

<Intro lang="{lang}" />
<Quarters lang="{lang}" />
<IntroMF lang="{lang}" />
<IntroMAU lang="{lang}" />
<Marketing lang="{lang}" />
<Marketing_video lang="{lang}" />
<Marketing_influence lang="{lang}" />
<Regions lang="{lang}" />
<Users lang="{lang}" />
<Team lang="{lang}" />
<Verification lang="{lang}" />
<B2B />
