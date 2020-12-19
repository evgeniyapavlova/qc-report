<script>
  import Intro from '../../components/3_MauPage/sections/1_Intro.svelte';
  import Marketing from '../../components/3_MauPage/sections/2_Marketing.svelte';
  import Marketing_video from '../../components/3_MauPage/sections/2_Marketing_video.svelte';
  import Marketing_influence from '../../components/3_MauPage/sections/2_Marketing_influence.svelte';
  import Regions from '../../components/3_MauPage/sections/Regions.svelte';
  import Users from '../../components/3_MauPage/sections/4_Users.svelte';
  import Team from '../../components/3_MauPage/sections/4_Team.svelte';
  import Verification from '../../components/3_MauPage/sections/4_Verification.svelte';
  const lang = 'ru';
</script>

<svelte:head>
  <title>Эпик по MAU выполнен</title>
</svelte:head>

<Intro lang="{lang}" />
<Marketing lang="{lang}" />
<Marketing_video lang="{lang}" />
<Marketing_influence lang="{lang}" />
<Regions lang="{lang}" />
<Users lang="{lang}" />
<Team lang="{lang}" />
<Verification lang="{lang}" />
