<script>
	export let lang;

  import IntroMAU from './sections/1_Intro.svelte';
  import Marketing from './sections/2_Marketing.svelte';
  import Marketing_video from './sections/2_Marketing_video.svelte';
  import Marketing_influence from './sections/2_Marketing_influence.svelte';
  import Regions from './sections/Regions.svelte';
  import Users from './sections/4_Users.svelte';
  import Team from './sections/4_Team.svelte';
  import Verification from './sections/4_Verification.svelte';
</script>

<span data-id="mau"></span>
<IntroMAU lang="{lang}" />
<Marketing lang="{lang}" />
<Marketing_video lang="{lang}" />
<Marketing_influence lang="{lang}" />
<Regions lang="{lang}" />
<Users lang="{lang}" />
<Team lang="{lang}" />
<Verification lang="{lang}" />
