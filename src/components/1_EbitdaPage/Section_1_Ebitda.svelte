<script>
  export let lang;

  import Intro from './sections/1_Intro.svelte';
  import Quarters from './sections/2_Quarters.svelte';
</script>

<span data-id="ebitda"></span>
<Intro lang="{lang}" />
<Quarters lang="{lang}" />
