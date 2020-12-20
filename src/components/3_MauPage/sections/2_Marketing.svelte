<script>
  import people from '../../../helpers/people';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Layout from '../../Layout.svelte';
  import MarketingInfo from '../components/MarketingInfo.svelte';
  export let lang;
  const { pachko } = people;
  const content = {
    ru: {
      h2: 'Маркетинг',
      text:
        'С самого начала 2020 года мы видели бурный интерес пользователей к нашему бренду. Буквально с первых месяцев мы смогли выполнить годовую цель по MAU, которая вначале казалась очень амбициозной. В феврале мы подняли планку и смогли выполнить еще более высокую цель, благодаря слаженной работе всех команд.',
    },
  };
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      h2="{content[lang].h2}"
      person="{pachko}"
      text="{content[lang].text}"
    />
    <MarketingInfo lang="{lang}" />
  </Layout>
</section>

<style>
  section {
    padding-top: 120px;
  }
</style>
