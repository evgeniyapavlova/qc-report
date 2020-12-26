<script>
  export let lang;
  import content from '../content/legal';
  import people from '../../../helpers/people';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Layout from '../../Layout.svelte';
  const { khimchenko } = people;
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="Legal & Personnel Administration"
      text="{content[lang].desc}"
      person="{khimchenko}"
    />
  </Layout>
</section>

<style>
  section {
    padding-top: 80px;
  }
</style>
