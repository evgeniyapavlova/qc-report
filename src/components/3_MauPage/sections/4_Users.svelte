<script>
  import emailsIcon from '../img/emails.svg';
  import chatsIcon from '../img/chats.svg';
  import callsIcon from '../img/calls.svg';
  import Chart from '../../Chart.svelte';
  import Layout from '../../Layout.svelte';
  import Col2 from '../../Col2.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import NumbersList from '../../NumbersList.svelte';
  import people from '../../../helpers/people';
  export let lang;
  const { kutkova } = people;
  const content = {
    ru: {
      h2: 'Поддержка клиентов: новые страны, новые продукты',
      desc:
        'Увеличение количества активных пользователей повлияло и на работу департамента клиентского сервиса. В этом году мы ставили новые рекорды по количеству обработанных обращений клиентов в чатах, на электронной почте, горячей линии, а также активно нанимали удаленных сотрудников, чтобы сохранить качество услуг при возросшей нагрузке. На протяжении года мы поддерживали высокий уровень удовлетворенности сотрудников.',
      records: 'Наши рекорды',
      recordsText:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
      quote:
        'На протяжении года мы поддерживали высокий уровень удовлетворенности сотрудников',
    },
    en: { h2: '', desc: '', records: '', recordsText: '', quote: '' },
  };
  const chartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
    ],
    values: [
      250000,
      700000,
      1100000,
      1000000,
      900000,
      600000,
      700000,
      600000,
      300000,
      400000,
      300000,
    ],
  };
  const itemsIcon = [
    {
      icon: emailsIcon,
      period: '239 846 <span>2019</span>',
      number: '736 786',
      caption: 'Emails',
    },
    {
      icon: chatsIcon,
      period: '1 909 847 <span>2019</span>',
      number: '3 641 110',
      caption: 'Chats',
    },
    {
      icon: callsIcon,
      period: '166 <span>2019</span>',
      number: lang === 'ru' ? '238 дней' : '238 days',
      caption: 'Talk time',
    },
  ];
</script>

<section>
  <Layout>
    <H2_Text_Avatar
      person="{kutkova}"
      h2="{content[lang].h2}"
      text="{content[lang].desc}"
    />

    <Col2 isReverse="{true}">
      <div slot="right">
        <div class="quote">{content[lang].quote}</div>
      </div>
      <div slot="left">
        <div class="records">
          <h5>{content[lang].records}</h5>
          <p>{content[lang].recordsText}</p>
        </div>
        <NumbersList dataArray="{itemsIcon}" />
        <div class="chart-wrap">
          <Chart
            chartId="requests-chart"
            data="{chartData}"
            label="Динамика обращений пользователей"
          />
        </div>
      </div>
    </Col2>
  </Layout>
</section>

<style>
  section {
    padding-top: 80px;
  }
  .quote {
    margin: 65px 0;
    max-width: 347px;
  }
  .records {
    margin-bottom: 50px;
  }
  h5 {
    margin-bottom: 19px;
  }
  .chart-wrap {
    margin-top: 50px;
  }
  @media only screen and (min-width: 960px) {
    .records {
      margin-top: 65px;
      max-width: 528px;
    }
    .quote {
      margin-top: 140px;
      font-size: 30px;
    }
  }
</style>
