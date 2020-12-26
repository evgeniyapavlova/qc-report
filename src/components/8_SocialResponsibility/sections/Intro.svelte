<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import content from '../content/intro';
</script>

<section>
  <Layout>
    <H1_Text_Avatar h1="{content[lang].h1}" text="{content[lang].desc}" />
  </Layout>
</section>

<style>
  section {
    padding-top: 80px;
  }
</style>
