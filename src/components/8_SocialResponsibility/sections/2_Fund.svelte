<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import content from '../content/fund';
  import Python from '../components/Python.svelte';
  import Google from '../components/Google.svelte';
  const latokhin = {
    name: 'Kirill Latokhin',
    position: 'Charity Team Leader',
    photo: 'latokhin',
  };
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="{content[lang].h2}"
      person="{latokhin}"
      text="{content[lang].desc}"
    />
    <p>{content[lang].p}</p>
    <Python lang="{lang}" />
    <Google lang="{lang}" />
  </Layout>
</section>

<style>
  section {
    margin-top: 135px;
  }
  p {
    margin-top: 80px;
    margin-bottom: 150px;
  }
  @media only screen and (min-width: 960px) {
    section {
      margin-top: 160px;
    }
    p {
      width: 58%;
      margin-bottom: 135px;
    }
  }
</style>
