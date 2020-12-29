<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import people from '../../../helpers/people';
  const { laskin } = people;
  import content from '../content/intro';
</script>

<section>
  <Layout>
    <H1_Text_Avatar
      h1="{content[lang].h2}"
      person="{laskin}"
      text="{content[lang].h4}"
    />
    <p>
      {@html content[lang].p}
    </p>
  </Layout>
</section>

<style>
  section {
    padding-top: 200px;
  }
  p {
    margin: 100px 0 170px;
  }
  @media only screen and (min-width: 960px) {
    p {
      margin: 75px 0 200px;
      width: 58%;
    }
  }
</style>
