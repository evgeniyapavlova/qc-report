<script>
  import icon1 from '../img/scale.svg';
  import icon2 from '../img/risks.svg';
  import icon3 from '../img/marketing.svg';
  export let lang;
  const content = {
    ru: {
      list: [
        {
          title: 'Масштабируемость',
          text:
            'Мы должны были убедиться, что мы сможем поддерживать на новом движке всех наших старых клиентов. <br><br>Для этого мы создали фичу <span>Sharding Scheme</span> — она позволит нам масштабировать бизнес на огромное количество пользователей без каких-либо ограничений.',
        },
        {
          title: 'Управление рисками',
          text:
            'Важно было убедиться, что у наших риск-менеджеров есть все необходимые инструменты для контроля рисков, связанных с новым продуктов. <br><br>Мы создали <span>Admin Risks Tool</span> — инструмент, который позволяет в режиме реального времени отслеживать риски по открытым сделкам наших клиентов.',
        },
        {
          title: 'Маркетинг',
          text:
            'Совместно с командой маркетологов мы создали <a href="https://iqbroker.com/lp/margin-forex/en/" target="_blank">посадочные страницы</a> для привлечения трафика.',
        },
      ],
    },
    en: {
      list: [
        {
          title: 'Scalability',
          text:
            'We&nbsp;had to&nbsp;make sure that we&nbsp;could support all our old customers on&nbsp;the new engine.<br /><br />We&nbsp;created the Sharding Scheme feature for this purpose&mdash;it will allow&nbsp;us to&nbsp;scale the business to&nbsp;a&nbsp;huge number of&nbsp;users without any restrictions.',
        },
        {
          title: 'Risk management',
          text:
            'It&nbsp;was important to&nbsp;make sure that our risk managers had all the tools they needed to&nbsp;control the risks associated with a&nbsp;new product.<br /><br />We&rsquo;ve created the Admin Risks Tool, a&nbsp;tool that allows&nbsp;us to&nbsp;monitor in&nbsp;real time the risks on&nbsp;our clients&rsquo; open trades.',
        },
        {
          title: 'Marketing',
          text:
            'With our marketing team we&nbsp;created landing pages to&nbsp;attract traffic.',
        },
      ],
    },
  };
  const icons = [icon1, icon2, icon3];
</script>

<div class="list">
  {#each content[lang].list as item, index}
    <div class="item">
      <svelte:component this="{icons[index]}" />
      <h5>{item.title}</h5>
      <p class="with-span">
        {@html item.text}
      </p>
    </div>
  {/each}
</div>

<style>
  h5 {
    margin: 19px 0;
  }
  .item {
    margin-bottom: 70px;
    text-align: center;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.with-span span, .with-span a) {
    color: var(--red);
    font-weight: bold;
  }
  .list {
    margin: 60px 0;
  }
  @media only screen and (min-width: 800px) {
    .list {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
    }
    .item {
      width: 46%;
    }
  }
  @media only screen and (min-width: 960px) {
    .item {
      width: 33%;
      text-align: left;
      padding-right: 20px;
    }
    .list {
      justify-content: space-between;
    }
  }
</style>
