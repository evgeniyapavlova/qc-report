<script>
  export let lang;
  import icon from '../img/mau_icon_1.svg';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import ContentWithIcon from '../../ContentWithIcon.svelte';
  const items = [
    { period: 'Q1 <span>2020</span>', number: '320 000', caption: 'MAU' },
    { period: 'Q1 <span>2020</span>', number: '100 000', caption: 'FTD' },
  ];
  const text = {
    ru:
      'Мы планировали достигнуть до конца года показателей 320 000 Monthly Active Users и 100 000 First Time Depositors в месяц. И уже в первом квартале обе эти цели были достигнуты.',
    en: '',
  };
</script>

<div class="aside-3-1">
  <div class="text-wrap">
    <ContentWithIcon icon="{icon}" text="{text[lang]}" />
  </div>
  <div class="flex">
    <LineNumberItem {...items[0]} />
    <LineNumberItem {...items[1]} />
  </div>
</div>

<style>
  .text-wrap {
    margin: 66px 0;
    max-width: 300px;
  }
  @media only screen and (max-width: 959px) {
    .flex {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .text-wrap {
      text-align: center;
      margin: 66px auto;
    }
  }
  @media only screen and (min-width: 430px) and (max-width: 959px) {
    :global(.aside-3-1 .line-number-item) {
      margin: 0 20px;
    }
    .flex {
      justify-content: center;
    }
  }
</style>
