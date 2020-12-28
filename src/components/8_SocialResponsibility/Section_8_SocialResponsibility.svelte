<script>
  export let lang;

  import SocialIntro from './sections/Intro.svelte';
  import Fund from './sections/2_Fund.svelte';
  import Corporate from './sections/3_Corporate.svelte';
  import Cyprus from './sections/Cyprus.svelte';
</script>

<span data-id="responsibility"></span>
<SocialIntro lang="{lang}" />
<Fund lang="{lang}" />
<Corporate lang="{lang}" />
<Cyprus lang="{lang}" />
