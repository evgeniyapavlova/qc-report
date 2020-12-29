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
<section>
  <Strategic lang="{lang}" />
</section>
<section>
  <PeoplePartners lang="{lang}" />
</section>
<section>
  <Development lang="{lang}" />
</section>
<Operational lang="{lang}" />
<CorporateCulture lang="{lang}" />

<style>
  section {
    margin-bottom: 150px;
  }
</style>
