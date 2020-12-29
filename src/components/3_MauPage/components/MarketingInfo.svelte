<script>
  import star from '../img/star.svg';
  import LogoIqOption from '../img/iq_option_logo_round.svg';
  import LogoIqBroker from '../img/iq_broker_logo_round.svg';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import Col2 from '../../Col2.svelte';
  export let lang;
  const content = {
    ru: [
      {
        title: 'Мобильная закупка',
        text:
          'За 2020 год мы подключили 55 новых рекламных источников, а в общей сложности закупали мобильный трафик одновременно в 106 источниках. <br><br>Благодаря этому за год мы привели на платформу 217 128 новых платящих пользователей из 131 страны мира — более 211 000 из них остались активными трейдерами, а это в 5 раз больше, чем в 2019 году.',
        numbers: [
          {
            period: '+500% <span>2019</span>',
            number: '217 128',
            caption: 'FTD',
          },
          {
            period: '+500% <span>2019</span>',
            number: '211 000',
            caption: 'MAU',
          },
        ],
      },
      {
        title: 'Google Search',
        text:
          'Нам удалось увеличить количество платящих пользователей на 292% (почти в 4 раза) по отношению к 2019 году.<br /><br />В 2019 году мы привели 63 500 платящих пользователей с общей суммой депозитов $14,2M. За 2020 год мы привели более 250 000 платящих пользователей, с общей суммой депозитов более $52,5 млн.',
        numbers: [
          {
            period: '63 500 <span>2019</span>',
            number: '250 000',
            caption: 'FTD',
          },
          {
            period: '$14,2M <span>2019</span>',
            number: '$52,5M',
            caption: 'Сумма депозитов',
          },
        ],
      },
      {
        title: 'Google — Universal App Campaign',
        text:
          'С&nbsp;начала года удалось вернуть наше старое приложение к&nbsp;закупке и&nbsp;показать хорошие объёмы и&nbsp;результаты.<br /><br />За&nbsp;2020 год с&nbsp;этого направления мы&nbsp;привели более 77&nbsp;000 платящих пользователей, с&nbsp;общей суммой депозитов более $10M.',
        numbers: [
          {
            period: '10 500 <span>2019</span>',
            number: '77 000',
            caption: 'FTD',
          },
          {
            period: '$16,8M <span>2019</span>',
            number: '$10M',
            caption: 'Сумма депозитов',
          },
        ],
      },
      {
        title: 'Social Media Buying',
        text:
          'Как вы знаете, в июле Facebook полностью запретил наши продукты к рекламе. Но есть отличные новости: приложение IQ Broker уже больше месяца держится без банов, а значит, мы можем начинать закупку и на основное приложение IQ Option.<br><br>За 2020 год нам удалось вырасти в 2 раза по количеству FTD по сравнению с 2019 годом.',
        numbers: [
          {
            period: '72 300 <span>2019</span>',
            number: '137 000',
            caption: 'FTD',
          },
        ],
      },
      {
        title: 'Sales department',
        text:
          'За 2020 год с переходом на удаленную работу удалось подстроиться под текущую ситуацию — cреднее количество звонков на менеджера увеличилось в 1,5 раза. <br><br>Мы провели более 5 экспериментов — и это только начало. С октября команды поделены на регионы и помогают фокусно добиваться результатов в каждой стране.',
      },
      {
        title: 'Retention',
        text:
          'За год команда Retention начала активное покрытие Customer Journey Map через запуск триггерных и регулярных ситуативных кампаний. <br><br>Мы проделали большую работу по взаимодействию с отделами Compliance, Dealing, Regional Managers. <br><br>Начали работу над таким важным проектом как Unified Communication Center, который поможет повысить эффективность управления кампаниями.',
      },
    ],
    en: [
      {
        title: 'Mobile buying',
        text:
          'In 2020, we connected 55 new advertising sources, and bought mobile traffic from a total of 106 sources simultaneously.<br><br>This brought 217,128 new paying users from 131 countries to the platform during the year—more than 211,000 of them remained active traders, a 5-fold increase from 2019.',
        numbers: [
          {
            period: '+500% <span>2019</span>',
            number: '217,128',
            caption: 'FTD',
          },
          {
            period: '+500% <span>2019</span>',
            number: '211,000',
            caption: 'MAU',
          },
        ],
      },
      {
        title: 'Google Search',
        text:
          'We&nbsp;managed to&nbsp;increase the number of&nbsp;paying users by&nbsp;292% (almost 4&nbsp;times) compared to&nbsp;2019.<br /><br />In&nbsp;2019, we&nbsp;brought in&nbsp;63.5K paying users with total deposits of&nbsp;$14.2M. In&nbsp;2020, we&nbsp;brought in&nbsp;over 250,000 paying users, with total deposits of&nbsp;over $52.5&nbsp;million.',
        numbers: [
          {
            period: '63 500 <span>2019</span>',
            number: '250,000',
            caption: 'FTD',
          },
          {
            period: '$14,2M <span>2019</span>',
            number: '$52,5M',
            caption: 'Total deposits',
          },
        ],
      },
      {
        title: 'Google — Universal App Campaign',
        text:
          'From the beginning of&nbsp;the year we&nbsp;managed to&nbsp;bring our old app back to&nbsp;purchase and show good volumes and results.<br /><br />In&nbsp;2020&nbsp;we brought in&nbsp;over 77,000 paying users, with total deposits of&nbsp;over $10M.',
        numbers: [
          {
            period: '10 500 <span>2019</span>',
            number: '77,000',
            caption: 'FTD',
          },
          {
            period: '$16,8M <span>2019</span>',
            number: '$10M',
            caption: 'Total deposits',
          },
        ],
      },
            {
        title: 'Social Media Buying',
        text:
          'As&nbsp;you know, Facebook banned our products from advertising altogether in&nbsp;July. But the good news is&nbsp;that the IQ&nbsp;Broker app has been holding up&nbsp;without bans for over a&nbsp;month now, which means we&nbsp;can start buying on&nbsp;the main IQ&nbsp;Option app as&nbsp;well.<br /><br />For 2020, we&rsquo;ve managed to&nbsp;grow two times the number of&nbsp;FTDs compared to&nbsp;2019.',
        numbers: [
          {
            period: '72 300 <span>2019</span>',
            number: '137,000',
            caption: 'FTD',
          },
        ],
      },
            {
        title: 'Sales department',
        text:
          'With the move to&nbsp;remote working in&nbsp;2020, it&nbsp;has been possible to&nbsp;adjust to&nbsp;the current situation&nbsp;&mdash; the average number of&nbsp;calls per manager has increased by&nbsp;1.5&nbsp;times. We&nbsp;conducted more than five experiments, and this is&nbsp;just the beginning. Since October, the teams have been divided into regions and help focus on&nbsp;achieving results in&nbsp;each country.',
      },{
        title: 'Retention',
        text:
          'The Retention team began a&nbsp;year of&nbsp;active Customer Journey Map coverage through the launch of&nbsp;trigger and regular situational campaigns.<br /><br />We&rsquo;ve done a&nbsp;lot of&nbsp;work with Compliance, Dealing, Regional Managers.<br /><br />We&nbsp;have started working on&nbsp;such an&nbsp;important project as&nbsp;Unified Communication Center, which will help improve the effectiveness of&nbsp;campaign management.',
      },
    ]
  };

  const apps = [
    { name: 'IQ Option', rating: '4.0', icon: LogoIqOption },
    { name: 'IQ Broker', rating: '4.6', icon: LogoIqBroker },
  ];
</script>

<div class="wrap">
  <div class="flex">
    <div class="content">
      <div class="text-content">
        {#each [content[lang][0], content[lang][1]] as item}
          <div class="item {item.numbers ? 'with-numbers' : ''}">
            <h5>{item.title}</h5>
            <p>
              {@html item.text}
            </p>
            {#if item.numbers}
              <div class="numbers">
                {#each item.numbers as numberBlock}
                  <LineNumberItem {...numberBlock} />
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="content">
      <div class="text-content">
        {#each [content[lang][2], content[lang][3]] as item}
          <div class="item {item.numbers ? 'with-numbers' : ''}">
            <h5>{item.title}</h5>
            <p>
              {@html item.text}
            </p>
            {#if item.numbers}
              <div class="numbers">
                {#each item.numbers as numberBlock}
                  <LineNumberItem {...numberBlock} />
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
    <div class="aside">
      <h6>Оценка в Google Play</h6>
      <div class="apps">
        {#each apps as app}
          <div class="app">
            <div>
              <div class="logo">
                <svelte:component this="{app.icon}" />
              </div>
              <div class="rating">
                {app.rating}
                <svelte:component this="{star}" />
              </div>
            </div>
            <div class="name">{app.name}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="content">
      <div class="text-content">
        {#each [content[lang][4], content[lang][5]] as item}
          <div class="item {item.numbers ? 'with-numbers' : ''}">
            <h5>{item.title}</h5>
            <p>
              {@html item.text}
            </p>
            {#if item.numbers}
              <div class="numbers">
                {#each item.numbers as numberBlock}
                  <LineNumberItem {...numberBlock} />
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .app {
    display: flex;
    margin-bottom: 42px;
  }
  .name {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;
    margin-left: 21px;
    margin-top: 28px;
  }
  .rating {
    font-weight: bold;
    font-size: 26px;
    line-height: 1;
    text-align: center;
  }
  h6 {
    margin-bottom: 40px;
  }
  .logo {
    margin-bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrap {
    margin-top: 120px;
  }
  .item {
    margin-bottom: 60px;
  }
  h5 {
    margin-bottom: 19px;
  }
  .numbers {
    margin-top: 46px;
    display: flex;
    justify-content: space-between;
  }
  :global(.wrap .numbers > div) {
    width: 47%;
  }
  @media only screen and (min-width: 440px) {
    .numbers {
      justify-content: flex-start;
    }
    :global(.wrap .numbers > div:first-child) {
      margin-right: 40px;
    }
  }
  @media only screen and (min-width: 750px) {
    .item {
      margin-bottom: 100px;
    }
    .text-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .item {
      width: 50%;
      position: relative;
      padding-right: 10%;
    }
    .with-numbers {
      padding-bottom: 180px;
    }
    .numbers {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
    :global(.wrap .numbers > div:first-child) {
      margin-right: 20px;
    }
  }
  @media only screen and (max-width: 959px) {
    .aside {
      display: none;
    }
  }
  @media only screen and (min-width: 960px) {
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .aside {
      width: 16%;
    }
    .content {
      width: 83%;
    }
  }
</style>
