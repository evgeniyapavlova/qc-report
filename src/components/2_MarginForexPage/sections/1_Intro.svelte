<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import PlanningList from '../components/PlanningList.svelte';
  import Release from '../components/Release.svelte';
  import Reviews from '../components/Reviews.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  import Tags from '../../Tags.svelte';
  import people from '../../../helpers/people';
  import icon1 from '../img/icon1.svg';
  import icon2 from '../img/icon2.svg';
  import icon3 from '../img/icon3.svg';

  const { david } = people;
  const content = {
    ru: {
      h1: 'Запуск Margin Forex',
      text:
        'Одна из наших стратегических целей — диверсификация прибыли по продукту. Главным новым продуктом, над которым мы работали в этом году стал Margin Forex. ',
      q: 'Что даст нам новый маржинальный движок?',
      list: ['Больше клиентов', 'Больше Lifetime', 'Больший Lifetime Value'],
      quote:
        'Мы уже лидируем на рынке опционов, и cледующим продуктом, в котором мы хотели развиваться, стал Forex. Это продукт с очень большим потенциалом.',
      plan: 'Планирование',
      planText:
        'При планировании релиза Margin Forex на пользователей мы обращали особое внимание на три аспекта:',
      release: 'состоялся релиз',
    },
    en: { h1: '', text: '', q: '', list: ['', '', ''], quote: '', release: '' },
  };

  const icons = [icon1, icon2, icon3];
  const tags = [
    'Software Development',
    'IT Operations',
    'Data & Analysis',
    'Quality Control',
    'IT Infrastructure Development',
    'System Architecture',
    'Dealing',
    'Antifraud',
    'Design',
    'Insights & Experiments',
    'System Analysis',
    'Affiliate',
    'Contextual Advertising',
    'Introducing Broker',
    'Acquisition Design',
    'Video Production,',
    'VIP & Sales',
    'Research Investment & Education',
    'Customer Support',
    'Support Tutors Team',
    'Brand Management',
    'Product Marketing / Retention',
    'Compliance',
    'Finance',
  ];
</script>

<section>
  <Layout>
    <H1_Text_Avatar
      person="{david}"
      h1="{content[lang].h1}"
      text="{content[lang].text}"
    />
    <div class="wrap">
      <div class="left">
        <h5 class="h5-center">{content[lang].q}</h5>
        <div class="list">
          {#each content[lang].list as item, index}
            <div class="list-item">
              <svelte:component this="{icons[index]}" />
              <div class="desc">{item}</div>
            </div>
          {/each}
        </div>
        <div class="quote">{content[lang].quote}</div>
        <h5 class="h5">{content[lang].plan}</h5>
        <p>{content[lang].planText}</p>
      </div>
    </div>
    <PlanningList lang="{lang}" />

    <div class="release">
      <div class="text">
        <span>29.07.2020</span>
        <br />
        {content[lang].release}
      </div>
      <div class="mockup">
        <img src="ASSET_PREFIX/assets/margin_forex/margin_mockup.jpg" alt="" />
      </div>
    </div>
    <Release lang="{lang}" />
    <Reviews lang="{lang}" />
    <div class="tags-wrap">
      <Tags tags="{tags}" />
    </div>
  </Layout>
</section>

<style>
  .wrap {
    position: relative;
  }
  .desc {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin-top: 15px;
  }
  .quote {
    margin-bottom: 100px;
  }
  section {
    padding-top: 65px;
  }
  .h5-center {
    text-align: center;
    margin-top: 60px;
  }
  .list {
    margin-bottom: 60px;
    text-align: center;
  }
  .list-item {
    margin-top: 48px;
  }
  .h5 {
    margin-bottom: 19px;
  }
  .release {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    position: relative;
  }
  .release span {
    color: var(--red);
  }
  .mockup {
    margin: 37px 0 93px;
  }
  .mockup img {
    width: 100%;
    display: block;
  }
  .tags-wrap {
    margin-top: 100px;
  }
  .quote {
    max-width: 437px;
  }
  @media only screen and (min-width: 480px) {
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .list-item {
      width: 180px;
    }
  }
  @media only screen and (min-width: 660px) {
    .list {
      justify-content: flex-start;
    }
    .h5-center {
      text-align: left;
    }
    .list-item {
      text-align: left;
    }
    .mockup {
      margin-top: 10px;
    }
  }
  @media only screen and (min-width: 960px) {
    section {
      padding-top: 76px;
    }
    .left {
      width: 57%;
    }
    .quote {
      position: absolute;
      right: 0;
      top: 0;
      width: 40%;
    }
    .text {
      position: absolute;
      right: -94px;
      top: 47%;
      text-align: left;
    }
    .wrap p {
      max-width: 520px;
    }
  }
</style>
