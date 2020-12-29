<script>
  export let lang;
  import Tags from '../../Tags.svelte';

  import sitesIcon from '../img/sites.svg';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import NumbersList from '../../NumbersList.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  const content = {
    ru: {
      text_1:
        'За&nbsp;2020 год у&nbsp;нас активизировалось более 7800&nbsp;партнеров, из&nbsp;которых 4800 зарегистрировались в&nbsp;этом году.<br /><br />Совместными усилиями партнеров, команд партнерских программ, маркетинга, разработки и&nbsp;платформы мы&nbsp;получили более 173 тысяч новых депозитеров&nbsp;&mdash; в&nbsp;3&nbsp;раза больше результатов прошлого года. Начиная с&nbsp;апреля 2020&nbsp;мы держали показатель MAU на&nbsp;уровне более 90&nbsp;000 трейдеров в&nbsp;месяц.<br /><br />Все эти достижения происходили при ужесточении правил со&nbsp;стороны регуляторов и&nbsp;потерей нескольких платежных систем для выплат партнерам.',
      text_2:
        'Это молодое направление принесло компании больше $3M дохода и продолжает расти. Собрана и обучена многонациональная команда менеджеров. Разработана новая схемы работы с партнерами — Spread share.',
      text_3:
        'Создали 75 региональных брендовых сайтов и вывели их в топ выдачи. В 60 странах ответили на множество запросов наших пользователей в Google о разных аспектах работы с платформой. Создали большую базу данных с ответами.',
      sites: 'сайтов в топе выдачи',
    },
    en: {
      text_1:
        'We&nbsp;have more than 7,800 affiliates active in&nbsp;2020, of&nbsp;which 4,800 have registered this year.<br /><br />Through the joint efforts of&nbsp;partners, affiliate program teams, marketing, development and the platform, we&nbsp;gained over 173,000 new depositors&mdash;three times the results of&nbsp;last year. Since April 2020, we&rsquo;ve kept MAU at&nbsp;the level of&nbsp;more than 90,000 traders per month.<br /><br />All of&nbsp;these achievements have taken place with the tightening of&nbsp;regulations by&nbsp;regulators and the loss of&nbsp;several payment systems for payments to&nbsp;affiliates.',
      text_2:
        'This young business has generated more than $3M in revenue for the company and continues to grow. A multinational management team has been assembled and trained. A new partner scheme, Spread Share, has been developed.',
      text_3:
        "We created 75 regional branded websites and brought them to the top of the rankings. In sixty countries we responded to many queries from our users on Google about various aspects of the platform. We've created a large database with answers.",
      sites: 'websites',
    },
  };
  const items = [
    {
      period:
        lang === 'en' ? '80,000 <span>2019</span>' : '80 000 <span>2019</span>',
      number: lang === 'en' ? '245,000' : '245 000',
      caption: 'FTD',
    },
    {
      period:
        lang === 'en' ? '44,000 <span>2019</span>' : '44 000 <span>2019</span>',
      number: lang === 'en' ? '92,500' : '92 500',
      caption: 'MAU',
    },
  ];

  const item2 = {
    period: '$235K <span>2019</span>',
    number: '$3M',
    caption: { ru: 'Сумма депозитов', en: 'Total deposits' },
  };
  const tags = [
    'VIP & Sales department',
    'Video Production',
    'Acquisition Design',
    'Product Marketing',
    'SEO/SMM/Blog/Brand Management',
    'Introducing Broker',
    'Affiliate',
    'Mobile Media Buying',
    'Social Media Buying',
    'Contextual advertising',
    'Influencer Marketing',
  ];
</script>

<section>
  <div class="affiliate">
    <h5>Affiliate</h5>
    <p>
      {@html content[lang].text_1}
    </p>
    <NumbersList dataArray="{items}" />
  </div>
  <div class="seo-and-ib">
    <div class="ib desktop-2-col">
      <div class="text">
        <h5>Introducing Brokers</h5>
        <p>
          {@html content[lang].text_2}
        </p>
      </div>
      <div class="col2">
        <LineNumberItem {...item2} caption="{item2.caption[lang]}" />
      </div>
    </div>

    <div class="seo desktop-2-col">
      <div class="text">
        <h5>SEO — Search Engine Optimization</h5>
        <p>
          {@html content[lang].text_3}
        </p>
      </div>
      <div class="col2">
        <div class="item-wrap">
          <Icon_Number_Text
            icon="{sitesIcon}"
            title="75"
            text="{content[lang].sites}"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<Tags tags="{tags}" />

<style>
  h5 {
    margin-bottom: 19px;
  }
  p {
    margin-bottom: 45px;
  }
  .item-wrap {
    text-align: center;
    max-width: 160px;
    margin: 0 auto;
  }
  section {
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 800px) {
    section {
      display: flex;
      justify-content: space-between;
    }
    .affiliate,
    .seo-and-ib {
      width: 47%;
    }
  }
  @media only screen and (min-width: 960px) {
    p {
      margin-bottom: 35px;
    }
    .affiliate {
      width: 37%;
    }
    .seo-and-ib {
      width: 57%;
    }
    .desktop-2-col {
      display: flex;
      justify-content: space-between;
    }
    .text {
      width: 56%;
    }
    .item-wrap {
      text-align: left;
      margin: 0;
      max-width: 130px;
    }
    .col2 {
      width: 26%;
    }
  }
  @media only screen and (min-width: 1100px) {
    .affiliate {
      width: 32%;
    }
  }
</style>
