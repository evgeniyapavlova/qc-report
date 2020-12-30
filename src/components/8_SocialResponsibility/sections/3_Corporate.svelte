<script>
  export let lang;
  import content from '../content/corporate';
  import Layout from '../../Layout.svelte';
  import FishkoShop from '../components/FishkoShop.svelte';
  import Ecooffice from '../components/Ecooffice.svelte';
  import Hospitals from '../components/Hospitals.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  const galak = {
    name: 'Olga Galak',
    position: 'Charity PR manager',
    photo: 'galak',
  };
</script>

<Layout>
  <H2_Text_Avatar
    h2="{content[lang].h2}"
    text="{content[lang].h4}"
    person="{galak}"
  />
  <p>{content[lang].p}</p>
  <FishkoShop lang="{lang}" />
  <div class="wrap">
    <Ecooffice lang="{lang}" />
  </div>
  <div class="wrap2">
    <Hospitals lang="{lang}" />
  </div>
</Layout>

<style>
  .wrap {
    margin-top: 80px;
  }
  p {
    margin: 80px 0 125px;
  }
  @media only screen and (min-width: 960px) {
    p {
      width: 58%;
    }
    .wrap {
      margin-top: 150px;
    }
    .wrap2 {
      margin-top: 180px;
    }
  }
</style>
