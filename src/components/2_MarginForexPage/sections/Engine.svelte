<script>
  export let lang;
  import icon1 from '../img/all_balance.svg';
  import icon2 from '../img/reinvest.svg';
  import icon3 from '../img/timer.svg';

  import icon4 from '../img/portfel.svg';
  import icon5 from '../img/acceleration.svg';
  import icon6 from '../img/registrations-1.svg';

  import Layout from '../../Layout.svelte';
  import H2_Text_Avatar from '../../H2_Text_Avatar.svelte';
  import List1 from '../../List1.svelte';
  import Icon_Title_Text from '../../Icon_Title_Text.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';

  const icons = [icon1, icon2, icon3];
  const icons2 = [icon4, icon5];

  const content = {
    ru: {
      h2: 'О разработке маржинального движка',
      p:
        'В этому году мы наконец-то запустили маржинальный Forex — это Forex с классической механикой, принятой на рынке. Хотя мы и планировали его переделку еще с конца 2018 года, но запустить его удалось только сейчас, так как этот инструмент отличается от других торговых инструментов на нашей платформе.',
      h5: 'В чем особенность маржинального Forex?',
      titles: [
        'Риск всей суммой баланса',
        'Реинвестиция прибыли',
        'Обсчет портфеля в реальном времени',
      ],
      texts: [
        'Маржинальный Forex отличается тем, что трейдер рискует всей суммой баланса, который у него есть в данный момент, а не только суммой инвестиции, как это было ранее.',
        'Взамен он получает возможность реинвестировать прибыль, полученную, от изменений курса при открытой позиции.',
        'Эта механика требует обсчет портфеля пользователя в режиме реального времени, так как изменение котировки может привести к срабатыванию дополнительных механик, например, Margin Call и Stop Out.',
      ],
      titles2: ['Маржинальный<br />портфель', 'Маржинальный движок и триггеры'],
      texts2: [
        'Сердцем маржинального Forex является так называемый маржинальный портфель, именно здесь и&nbsp;происходит вся магия математики, оживляющий баланс пользователя. При его реализации впервые были применены такие практики как масштабирование сервисов (<a href="https://miro.com/app/board/o9J_kmD3NwY=/" target="_blank">Sharding Scheme</a>) и&nbsp;нагрузочное тестирование.',
        'Не менее важные части системы, обслуживающие ордера клиентов. В их основе — сложные и надежные структуры (так называемые «машины состояний»), ряд компонентов для максимальной скорости работает только в оперативной памяти.',
      ],
      number: '250 000',
      balance:
        'балансов клиентов способен обслуживать один набор маржинальных сервисов («шарда»), число самих наборов не ограничено',
    },
    en: {
      h2: 'About the development of a margin&nbsp;engine',
      p:
        'This year we&nbsp;finally launched margin Forex, which is&nbsp;Forex with classic market-accepted mechanics. Although we&rsquo;ve been planning to&nbsp;redesign it&nbsp;since late 2018, we&rsquo;ve only been able to&nbsp;launch it&nbsp;now, as&nbsp;this tool is&nbsp;different from other trading tools on&nbsp;our platform.',
      h5: 'What are the special features of margin Forex?',
      titles: [
        'Risking the entire amount of the balance',
        'Reinvesting profits',
        'Real-time calculation',
      ],
      texts: [
        'Margin Forex is different in that the trader is risking the entire amount of the balance that they have at the time, not just the amount of the investment, as it was before.',
        'In return, they get to reinvest profits made from changes in the exchange rate on an open position.',
        'This mechanism requires real-time calculation of&nbsp;the user&rsquo;s portfolio, as&nbsp;changes in&nbsp;the quote can trigger additional mechanisms such as&nbsp;Margin Call and Stop Out.',
      ],
      titles2: [
        'Margin<br />portfolio',
        'Margin trading engine and margin triggers',
      ],
      texts2: [
        'The heart of&nbsp;margin Forex is&nbsp;the so-called margin portfolio, and this is&nbsp;where all the magic of&nbsp;mathematics happens, bringing the user&rsquo;s balance sheet to&nbsp;life. Practices such as&nbsp;service scaling (<a href="https://miro.com/app/board/o9J_kmD3NwY=/" target="_blank">Sharding Scheme</a>) and load testing were pioneered in&nbsp;its implementation.',
        'Equally important are the parts of&nbsp;the system that serve customer orders. They&rsquo;re based on&nbsp;complex and robust structures (so-called &laquo;state machines&raquo;), with a&nbsp;number of&nbsp;components running only in&nbsp;RAM for maximum speed.',
      ],
      number: '250,000',
      balance:
        'customer balances can be serviced by one set of margin services ("shards"); the number of sets themselves is unlimited.',
    },
  };
</script>

<div class="engine">
  <H2_Text_Avatar
    person="{{ name: 'Denis Milovanov', position: 'Team Leader Trading Platform', photo: 'milovanov' }}"
    h2="{content[lang].h2}"
    text="{content[lang].p}"
  />
  <h5>{content[lang].h5}</h5>
  <div class="list1">
    {#each content[lang].titles as item, index}
      <div class="item-wrap item-wrap-{index}">
        <Icon_Title_Text
          icon="{icons[index]}"
          title="{item}"
          text="{content[lang].texts[index]}"
        />
      </div>
    {/each}
  </div>
  <div class="flex flex-list-engine">
    <List1
      icons="{icons2}"
      titles="{content[lang].titles2}"
      texts="{content[lang].texts2}"
    />
    <div class="item-wrap2">
      <div class="wr">
        <Icon_Number_Text
          icon="{icon6}"
          title="{content[lang].number}"
          text="{content[lang].balance}"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .engine {
    margin-bottom: 150px;
  }
  .item-wrap {
    padding-bottom: 90px;
    padding-left: 80px;
    margin-bottom: 20px;
    background: url(ASSET_PREFIX/assets/svg/arrow_1.svg) no-repeat left 29px
      bottom;
  }
  .item-wrap2 {
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
  }
  .item-wrap-2 {
    background: none !important;
  }
  h5 {
    margin: 75px 0 80px;
  }
  .list1 {
    margin-bottom: 80px;
  }
  @media only screen and (min-width: 960px) {
    :global(.flex-list-engine .list) {
      width: 66%;
      justify-content: flex-start;
    }
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .item-wrap2 {
      text-align: left;
      width: 33%;
    }
    .wr {
      width: 75%;
      margin: 0 0 0 auto;
    }
    .list1 {
      display: flex;
      margin-bottom: 20px;
    }
    .item-wrap {
      padding-right: 40px;
      width: 33%;
      padding-left: 0;
      margin-bottom: 0;
      background: url(ASSET_PREFIX/assets/svg/arrow-h.svg) no-repeat right 40px
        top 20px;
    }
    .engine {
      margin-bottom: 200px;
    }
  }
</style>
