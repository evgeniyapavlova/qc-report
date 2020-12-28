<script>
  export let lang;
  import ManagementIntro from './sections/Intro.svelte';
  import Strategic from './sections/Strategic.svelte';
  import PeoplePartners from './sections/PeoplePartners.svelte';
  import Development from './sections/Development.svelte';
  import Operational from './sections/Operational.svelte';
  import CorporateCulture from './sections/Corporate.svelte';
</script>

<span data-id="improvement"></span>
<ManagementIntro lang="{lang}" />
<Strategic lang="{lang}" />
<PeoplePartners lang="{lang}" />
<Development lang="{lang}" />
<Operational lang="{lang}" />
<CorporateCulture lang="{lang}" />
