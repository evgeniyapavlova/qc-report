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
        'За 2020 год у нас активизировалось более 7,8К партнеров, из которых 4,8К зарегистрировались в этом году. <br>Совместными усилиями партнеров, команд партнерских программ, маркетинга, разработки и платформы мы получили более 173 тысяч новых депозитеров — в 3 раза больше результатов прошлого года. Начиная с апреля 2020 мы держали показатель MAU на уровне более 90K трейдеров в месяц.<br><br>Все эти достижения происходили при ужесточении правил со стороны регуляторов и потерей нескольких платежных систем для выплат партнерам.',
      text_2:
        'Это молодое направление принесло компании больше $3M дохода и продолжает расти. Собрана и обучена многонациональная команда менеджеров. Разработана новая схемы работы с партнерами — Spread share.',
      text_3:
        'Создали 75 региональных брендовых сайтов и вывели их в топ выдачи. В 60 странах ответили на множество запросов наших пользователей в Google о разных аспектах работы с платформой. Создали большую базу данных с ответами.',
      sites: 'сайтов в топе выдачи',
    },
    en: { text_1: '', text_2: '', text_3: '', sites: '' },
  };
  const items = [
    {
      period: '80 000 <span>2019</span>',
      number: '245 000',
      caption: 'FTD',
    },
    {
      period: '44 000 <span>2019</span>',
      number: '92 500',
      caption: 'MAU',
    },
  ];

  const item2 = {
    period: '$235K <span>2019</span>',
    number: '$3M',
    caption: { ru: 'Сумма депозитов', en: '' },
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
