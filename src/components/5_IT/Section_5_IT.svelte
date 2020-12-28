<script>
  export let lang;
  import IntroIT from './sections/Intro.svelte';
  import Effective from './sections/Effective.svelte';
  import Mission from './sections/Mission.svelte';
  import Amaiz from './sections/Amaiz.svelte';
  import Portfolio from './sections/Portfolio.svelte';
  import Cloud from './sections/Cloud.svelte';
  import DataPlatform from './sections/DataPlatform.svelte';
  import Infra from './sections/Infra.svelte';
  import Regulators from './sections/Regulators.svelte';
</script>

<span data-id="updates"></span>
<IntroIT lang="{lang}" />
<Effective lang="{lang}" />
<Mission lang="{lang}" />
<Amaiz lang="{lang}" />
<Portfolio lang="{lang}" />
<Cloud lang="{lang}" />
<DataPlatform lang="{lang}" />
<Infra lang="{lang}" />
<Regulators lang="{lang}" />
