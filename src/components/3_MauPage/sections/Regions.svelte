<script>
  import items from '../content/regions';

  import RegionSection from '../components/RegionSection.svelte';

  export let lang;
  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  const content = {
    ru: {
      title: 'Развитие в регионах',
      desc:
        'Диверсификация прибыли по региону стала одной из наших стратегических целей на год. Над проектом работали региональные менеджеры Джоан Лопес, Степан Кулик, Борис Нещерет, Александр Кох и Никос Рентумис. Для выполнения целей по PnL и активным клиентам в регионах в этом году мы занимались подключением новых платежных методов, получением лицензий, развитием IB-системы, Customer Journey Map и многими другими инициативами.',
    },
    en: {
      title: 'Development in the regions',
      desc:
        'Diversifying profits across the region was one of our strategic goals for the year. Regional managers Joan Lopez, Stepan Kulik, Boris Nesheret, Alexander Koch and Nikos Rentumis worked on the project. To meet our goals for PnL and active customers in the regions, this year we were connecting new payment methods, obtaining licences, developing the IB system, Customer Journey Map and many other initiatives.',
    },
  };
</script>

<section>
  <Layout>
    <div class="h2-wrap">
      <H2_Text_Avatar
        h2="{content[lang].title}"
        person=""
        text="{content[lang].desc}"
      />
    </div>
    {#each items as item}
      <RegionSection
        person="{item.person}"
        numbers="{item.numbers}"
        title="{item[lang].title}"
        title2="{item[lang].title2}"
        text="{item[lang].text}"
        text2="{item[lang].text2}"
        quote="{item[lang].quote}"
        reverse="{item.reverse}"
        img="{item.img}"
      />
    {/each}
  </Layout>
</section>

<style>
  section {
    overflow: hidden;
    padding-top: 80px;
  }
  .h2-wrap {
    margin-bottom: 100px;
  }
  @media only screen and (min-width: 960px) {
    section {
      padding-top: 120px;
    }
  }
</style>
