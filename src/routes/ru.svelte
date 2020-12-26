<script>
  const lang = 'ru';
  import Header from '../components/Header/Header.svelte';
  import Intro1 from '../components/IndexPage/Intro.svelte';
  import Intro from '../components/1_EbitdaPage/sections/1_Intro.svelte';
  import Quarters from '../components/1_EbitdaPage/sections/2_Quarters.svelte';
  import IntroMF from '../components/2_MarginForexPage/sections/1_Intro.svelte';
  import IntroMAU from '../components/3_MauPage/sections/1_Intro.svelte';
  import Marketing from '../components/3_MauPage/sections/2_Marketing.svelte';
  import Marketing_video from '../components/3_MauPage/sections/2_Marketing_video.svelte';
  import Marketing_influence from '../components/3_MauPage/sections/2_Marketing_influence.svelte';
  import Regions from '../components/3_MauPage/sections/Regions.svelte';
  import Users from '../components/3_MauPage/sections/4_Users.svelte';
  import Team from '../components/3_MauPage/sections/4_Team.svelte';
  import Verification from '../components/3_MauPage/sections/4_Verification.svelte';
  import B2B from '../components/B2BPage/Page.svelte';
  import Remote_Intro from '../components/6_Remote/sections/Intro.svelte';
  import Legal from '../components/6_Remote/sections/Legal.svelte';
  import ITBar from '../components/6_Remote/sections/ITBar.svelte';
  import OfficeTeam from '../components/6_Remote/sections/OfficeTeam.svelte';
  import SocialIntro from '../components/8_SocialResponsibility/sections/Intro.svelte';
  import Fund from '../components/8_SocialResponsibility/sections/2_Fund.svelte';
  import Corporate from '../components/8_SocialResponsibility/sections/3_Corporate.svelte';
</script>

<svelte:head>
  <title>Quadcode Annual Review 2020</title>
</svelte:head>

<Header />
<span data-id="intro"></span>
<Intro1 />

<span data-id="ebitda"></span>
<Intro lang="{lang}" />
<span data-id="quarters"></span>
<Quarters lang="{lang}" />

<span data-id="marginForex"></span>
<IntroMF lang="{lang}" />

<span data-id="mau"></span>
<IntroMAU lang="{lang}" />
<span data-id="marketing"></span>
<Marketing lang="{lang}" />
<Marketing_video lang="{lang}" />
<Marketing_influence lang="{lang}" />
<span data-id="regions"></span>
<Regions lang="{lang}" />
<span data-id="support"></span>
<Users lang="{lang}" />
<Team lang="{lang}" />
<span data-id="verification"></span>
<Verification lang="{lang}" />

<span data-id="b2b"></span><span data-id="holding"></span>
<B2B />

<span data-id="remote"></span>
<Remote_Intro lang="{lang}" />
<Legal lang="{lang}" />
<ITBar lang="{lang}" />
<OfficeTeam lang="{lang}" />

<span data-id="responsibility"></span>
<SocialIntro lang="{lang}" />
<Fund lang="{lang}" />
<Corporate lang="{lang}" />
