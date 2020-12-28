<script>
  import emailsIcon from '../img/emails.svg';
  import chatsIcon from '../img/chats.svg';
  import callsIcon from '../img/calls.svg';

  import speedIcon from '../img/speed.svg';
  import smileIcon from '../img/smile.svg';
  import langIcon from '../img/lang.svg';
  import Chart from '../../Chart.svelte';
  import Layout from '../../Layout.svelte';
  import Col2 from '../../Col2.svelte';
  import Col2_3 from '../../Col2_3.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  import NumbersList from '../../NumbersList.svelte';
  import people from '../../../helpers/people';
  export let lang;
  const { kutkova } = people;
  const content = {
    ru: {
      h2: 'Поддержка клиентов: новые страны, новые продукты',
      desc:
        'Увеличение количества активных пользователей повлияло и&nbsp;на&nbsp;работу департамента клиентского сервиса. В&nbsp;этом году мы&nbsp;ставили новые рекорды по&nbsp;количеству обработанных обращений клиентов в&nbsp;чатах, на&nbsp;электронной почте, горячей линии, а&nbsp;также активно нанимали удаленных сотрудников, чтобы сохранить качество услуг при возросшей нагрузке. На&nbsp;протяжении года мы&nbsp;поддерживали высокий уровень удовлетворенности сотрудников.',
      records: 'Support в цифрах',
      recordsText:
        'Мы&nbsp;ставим новые рекорды в&nbsp;скорости обработки сообщений наших клиентов: 80% чатов обрабатывается со&nbsp;скоростью до&nbsp;60&nbsp;секунд, оставшиеся&nbsp;20% ждут в&nbsp;эскалации 12&nbsp;часов; на&nbsp;электронные письма (тикеты) мы&nbsp;отвечаем в&nbsp;среднем за&nbsp;16&nbsp;часов, включая эскалацию; в&nbsp;наших социальных сетях клиенты получают ответ в&nbsp;течение одного рабочего дня, а&nbsp;звонки поднимаются автоматически.',
      quote: 'Cтавим новые рекорды в скорости обработки сообщений',
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
  const list2 = [
    {
      icon: speedIcon,
      title: '60 сек',
      text: 'средняя скорость обработки 80% обращений в чате',
    },
    { icon: smileIcon, title: '40,5%', text: 'средний NPS' },
    { icon: langIcon, title: '20', text: 'языков' },
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
          <p>
            {@html content[lang].recordsText}
          </p>
        </div>
        <NumbersList dataArray="{itemsIcon}" />
      </div>
    </Col2>
    <Col2_3>
      <div slot="right">
        <div class="chart-label">Динамика обращений пользователей</div>
        <div class="chart-wrap">
          <Chart chartId="requests-chart" data="{chartData}" label="" />
        </div>
      </div>
      <div slot="left">
        <div class="list">
          {#each list2 as iconItem}
            <div class="list-item">
              <Icon_Number_Text {...iconItem} />
            </div>
          {/each}
        </div>
      </div>
    </Col2_3>
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
  .chart-label {
    margin-top: 50px;
  }
  .chart-wrap {
    height: 350px;
    position: relative;
  }

  .list {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;
  }

  .list-item {
    width: 50%;
    margin-bottom: 60px;
    max-width: 160px;
  }
  @media only screen and (min-width: 960px) {
    .records {
      margin-top: 65px;
      max-width: 528px;
    }
    .quote {
      margin-top: 67px;
    }
    .list {
      margin-top: 0;
      text-align: left;
      display: block;
    }
    .list-item {
      margin-bottom: 35px;
    }
  }
</style>
