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
      p1: 'Динамика обращений пользователей',
      h2: 'Поддержка клиентов: новые страны, новые продукты',
      desc:
        'Увеличение количества активных пользователей повлияло и&nbsp;на&nbsp;работу департамента клиентского сервиса. В&nbsp;этом году мы&nbsp;ставили новые рекорды по&nbsp;количеству обработанных обращений клиентов в&nbsp;чатах, на&nbsp;электронной почте и&nbsp;горячей линии, а&nbsp;также активно нанимали удаленных сотрудников, чтобы сохранить качество услуг при возросшей нагрузке. На&nbsp;протяжении года мы&nbsp;поддерживали высокий уровень удовлетворенности сотрудников и&nbsp;клиентов.',
      records: 'Support в цифрах',
      recordsText:
        'Мы&nbsp;ставим новые рекорды в&nbsp;скорости обработки сообщений наших клиентов: 80% чатов обрабатывается со&nbsp;скоростью до&nbsp;60&nbsp;секунд, оставшиеся&nbsp;20% ждут в&nbsp;эскалации 12&nbsp;часов; на&nbsp;электронные письма (тикеты) мы&nbsp;отвечаем в&nbsp;среднем за&nbsp;16&nbsp;часов, включая эскалацию; в&nbsp;наших социальных сетях клиенты получают ответ в&nbsp;течение одного рабочего дня, а&nbsp;звонки поднимаются автоматически.',
      quote: 'Cтавим новые рекорды в скорости обработки сообщений',
    },
    en: {
      p1: 'Dynamics of user requests',
      h2: 'Customer support: new countries, new products',
      desc:
        'The increase in the number of active users has also had an impact on the work of the customer service department. This year, we set new records for the number of customer requests handled in chats, emails and hotlines, and actively recruited remote staff to maintain the quality of service under the increased workload. Throughout the year, we maintained a high level of employee and customer satisfaction.',
      records: 'Support in numbers',
      recordsText:
        "We handle our customers' enquiries in four channels: 80% of chats are handled in up to 60 seconds, the remaining 20% wait 12 hours in escalation; emails (tickets) are answered on average in 16 hours, including escalation; on our social networks customers receive a response within one business day and calls are picked up automatically.",
      quote: "We handle our customers' enquiries in four channels",
    },
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
      'Dec',
    ],
    values: [
      299363,
      321004,
      404708,
      491311,
      501522,
      470995,
      478308,
      431106,
      411937,
      379581,
      374894,
      358000,
    ],
  };
  const itemsIcon = [
    {
      icon: emailsIcon,
      period:
        lang === 'en'
          ? '239,846 <span>2019</span>'
          : '239 846 <span>2019</span>',
      number: lang === 'en' ? '736,786' : '736 786',
      caption: 'Emails',
    },
    {
      icon: chatsIcon,
      period:
        lang === 'en'
          ? '1,909,847 <span>2019</span>'
          : '1 909 847 <span>2019</span>',
      number: lang === 'en' ? '3,641,110' : '3 641 110',
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
      title: lang === 'ru' ? '60 сек' : '60 sec',
      text:
        lang === 'ru'
          ? 'средняя скорость обработки 80% обращений в чате'
          : 'is the average handling rate of 80% of chat conversations',
    },
    {
      icon: smileIcon,
      title: '40,5%',
      text: lang === 'ru' ? 'средний NPS' : 'average NPS',
    },
    {
      icon: langIcon,
      title: '20',
      text: lang === 'en' ? 'languages' : 'языков',
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
          <p>
            {@html content[lang].recordsText}
          </p>
        </div>
        <NumbersList dataArray="{itemsIcon}" />
      </div>
    </Col2>
    <Col2_3>
      <div slot="right">
        <div class="chart-label">{content[lang].p1}</div>
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
    section {
      padding-top: 150px;
    }
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
