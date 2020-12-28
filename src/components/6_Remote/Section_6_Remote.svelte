<script>
	export let lang;
  import Remote_Intro from './sections/Intro.svelte';
  import Legal from './sections/Legal.svelte';
  import ITBar from './sections/ITBar.svelte';
  import OfficeTeam from './sections/OfficeTeam.svelte';
</script>

<span data-id="remote"></span>
<Remote_Intro lang="{lang}" />
<Legal lang="{lang}" />
<ITBar lang="{lang}" />
<OfficeTeam lang="{lang}" />
