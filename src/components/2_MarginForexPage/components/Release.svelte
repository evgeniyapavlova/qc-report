<script>
  import registrations from '../img/registrations.svg';
  import payAccount from '../img/pay_account.svg';
  import eye from '../img/eye.svg';
  import earth from '../img/earth.svg';
  import magnet from '../img/magnet.svg';
  import Chart from '../../Chart.svelte';
  import Col2 from '../../Col2.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  export let lang;
  const content = {
    ru: {
      title: 'Релиз',
      desc:
        'Релиз Margin Forex на&nbsp;клиентов был разбит на&nbsp;9&nbsp;итераций с&nbsp;июля по&nbsp;ноябрь&nbsp;&mdash; итеративный подход был необходим, чтобы убедиться, что все наши системы выдерживают большой поток пользователей.<br /><br />За&nbsp;это время мы&nbsp;открыли доступ к&nbsp;инструменту в&nbsp;199&nbsp;странах, получили в&nbsp;общей сложности 2&nbsp;830&nbsp;493&nbsp;регистраций, 11&nbsp;322 пользователей на&nbsp;реальном и&nbsp;152&nbsp;847&nbsp;на демо-балансе. Коэффициент удержания составляет порядка&nbsp;70% месяц к&nbsp;месяцу.',
      chart1Title: 'Подключение новых стран',
      chart2Title: 'Прирост активных пользователей',
      list: [
        'регистраций',
        'реальный счет',
        'демо-счет',
        'стран',
        'коэффициент удержания',
      ],
    },
    en: {
      title: 'Release',
      desc:
        'The release of&nbsp;Margin Forex to&nbsp;clients was split into 9&nbsp;iterations from July to&nbsp;November. An&nbsp;iterative approach was necessary to&nbsp;ensure that all our systems could withstand the high volume of&nbsp;users.<br /><br />During this time we&nbsp;opened access to&nbsp;the tool in&nbsp;199&nbsp;countries, receiving a&nbsp;total of&nbsp;2,830,493&nbsp;registrations, 11,322 users on&nbsp;real balances and 152,847&nbsp;on demo balances. The retention rate is&nbsp;about&nbsp;70% month-to-month.',
      chart1Title: 'New countries added',
      chart2Title: 'Growth of active users',
      list: [
        'registrations',
        'of real account users',
        'of demo account users',
        'countries',
        'Retention Rate',
      ],
    },
  };
  const list = [
    { text: '2 830 493', icon: registrations },
    { text: '11 322', icon: payAccount },
    { text: '152 847', icon: eye },
    { text: '199', icon: earth },
    { text: '70%', icon: magnet },
  ];

  const chart1Data = {
    labels: [
      '29 Jul',
      '07 Aug',
      '14 Aug',
      '18 Aug',
      '04 Sep',
      '25 Sep',
      '16 Oct',
      '06 Nov',
      '27 Nov',
    ],
    values: [24, 48, 72, 77, 117, 142, 168, 169, 199],
  };

  const chart2Data = {
    labels: [
      '29 Jul',
      '07 Aug',
      '14 Aug',
      '18 Aug',
      '04 Sep',
      '25 Sep',
      '16 Oct',
      '06 Nov',
      '27 Nov',
    ],
    values: [1291, 2208, 3774, 4285, 6281, 7494, 8710, 11579, 11833],
  };
</script>

<Col2>
  <div slot="right">
    <h5>{content[lang].title}</h5>
    <p>
      {@html content[lang].desc}
    </p>
    <div class="chart1-wrap">
      <Chart
        chartId="mf-countries-chart"
        data="{chart1Data}"
        label="{content[lang].chart1Title}"
        lineColor="#323E48"
      />
    </div>
    <div class="chart2-wrap">
      <Chart
        chartId="mf-users-chart"
        data="{chart2Data}"
        label="{content[lang].chart2Title}"
      />
    </div>
  </div>
  <div slot="left">
    <div class="list">
      {#each content[lang].list as item, index}
        <div class="item">
          <Icon_Number_Text
            icon="{list[index].icon}"
            text="{item}"
            title="{lang === 'en' ? list[index].text.replace(' ', ',') : list[index].text}"
          />
        </div>
      {/each}
    </div>
  </div>
</Col2>

<style>
  p {
    margin-bottom: 48px;
  }
  h5 {
    margin-bottom: 19px;
  }
  .chart2-wrap {
    margin-top: 60px;
  }
  .list {
    text-align: center;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .item {
    margin-bottom: 29px;
    width: 50%;
  }
  @media only screen and (min-width: 400px) {
    .item {
      width: 180px;
    }
  }
  @media only screen and (min-width: 960px) {
    .list {
      text-align: left;
      margin-top: 40px;
    }
  }
</style>
