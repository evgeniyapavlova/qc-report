<script>
  export let lang;
  import Arrow from '../img/arrow.svg';
  const asideContent = {
    ru: [
      {
        time: 'март 2020',
        text: 'Jumio закрыл часть своих офисов',
      },
      {
        time: 'конец марта 2020',
        number: '8 000',
        text: 'клиентов, ожидающих верификации',
      },
      {
        time: 'апрель 2020',
        number: '4 000',
        text: 'смогли сократить',
      },
      {
        time: 'май 2020',
        number: '9 500',
        text: 'первая волна пандемии',
      },
      {
        time: 'июнь 2020',
        number: '1 500',
        text: 'снизили количество',
      },
      {
        time: 'ноябрь 2020',
        number: '0',
        text: 'клиентов, ожидающих верификации',
      },
    ],
    en: [
      {
        time: 'March 2020',
        text: 'Jumio closed some of its offices',
      },
      {
        time: 'end of March 2020',
        number: '8 000',
        text: 'number of clients awaiting verification',
      },
      {
        time: 'April 2020',
        number: '4 000',
        text: 'we reduced it',
      },
      {
        time: 'May 2020',
        number: '9 500',
        text: 'the first wave of the pandemic',
      },
      {
        time: 'June 2020',
        number: '1 500',
        text: 'backoffice team has reduced the number',
      },
      {
        time: 'November 2020',
        number: '0',
        text: 'number of clients awaiting verification',
      },
    ],
  };
</script>

<div class="aside">
  {#each asideContent[lang] as item, index}
    <div class="time">{item.time}</div>
    {#if item.number}
      <div class="number">{item.number}</div>
    {/if}
    <div class="text">{item.text}</div>
    {#if index !== asideContent[lang].length - 1}
      <div class="arrow-wrap">
        <Arrow />
      </div>
    {/if}
  {/each}
</div>

<style>
  .aside {
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  .time {
    color: var(--red);
    font-weight: 600;
    margin-bottom: 6px;
  }
  .number {
    font-weight: 700;
    margin-bottom: 4px;
    font-size: 36px;
    line-height: 36px;
  }
  .text {
    opacity: 0.6;
    font-weight: 600;
    max-width: 170px;
    margin: 0 auto;
  }
  .arrow-wrap {
    margin: 20px 0 18px;
  }
  @media only screen and (min-width: 960px) {
    .aside {
      width: 25%;
      text-align: left;
    }
    .text {
      margin-left: 0;
    }
  }
</style>
