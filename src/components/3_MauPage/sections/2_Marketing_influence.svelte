<script>
  import Block2 from '../components/2_Marketing_influence_block_2.svelte';
  import clipsIcon from '../img/clips.svg';
  import channelsIcon from '../img/channels.svg';
  export let lang;
  import Layout from '../../Layout.svelte';
  import LineNumberItem from '../../LineNumberItem.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  const content = {
    ru: {
      text_1:
        'C января 2020 по сегодняшний день направление привлекло 137 тысяч регистраций, 19K FTD и депозитов на сумму $2,8M. Мы выпустили более 1100 роликов и охватили около 300 каналов.',
      caption:
        'Наша рекламная интеграция попала в тренды YouTube в Индии.<br /> Впереди нас ждут интеграции в клипах латиноамериканских групп.',
    },
    en: {
      text_1:
        'From January 2020 to&nbsp;date, the area has attracted 137,000&nbsp;registrations, 19,000&nbsp;FTDs and deposits worth $2.8M. We&rsquo;ve produced more than 1,100 spots and covered around 300&nbsp;channels.',
      caption:
        'Our ad integration has hit YouTube trends in India.<br /> Ahead of us are integrations in music videos of Latin American bands.',
    },
  };

  const numbers_1 = [
    {
      period: '2480 <span>2019</span>',
      number: lang === 'en' ? '19,000' : '19 000',
      caption: {
        ru: 'FTD',
        en: 'FTD',
      },
    },
    {
      period: '$210K <span>2019</span>',
      number: '$2,8M',
      caption: {
        ru: 'Сумма депозитов',
        en: 'Total deposits',
      },
    },
  ];

  const itemsIcon = [
    { icon: clipsIcon, title: '1100', text: { ru: 'роликов', en: 'videos' } },
    {
      icon: channelsIcon,
      title: '300',
      text: { ru: 'каналов', en: 'channels' },
    },
  ];
</script>

<Layout>
  <div class="block1 mark-influence">
    <div class="text-content">
      <h5>Influence Marketing</h5>
      <p class="p1">{@html content[lang].text_1}</p>
      <div class="numbers">
        {#each numbers_1 as number}
          <LineNumberItem {...number} caption="{number.caption[lang]}" />
        {/each}
      </div>
      <div class="items">
        {#each itemsIcon as item}
          <div class="item-wrap">
            <Icon_Number_Text {...item} text="{item.text[lang]}" />
          </div>
        {/each}
      </div>
    </div>
    <div class="video">
      <div class="iframe-wrap">
        <iframe
          title="Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PYYGX38AqZs?controls=1&showinfo=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p class="p1">
        {@html content[lang].caption}
      </p>
    </div>
  </div>
  <Block2 lang="{lang}" />
</Layout>

<style>
  .iframe-wrap {
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    margin-top: 36px;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  h5 {
    margin-bottom: 19px;
  }
  .p1 {
    margin-bottom: 45px;
  }
  .block1 {
    margin-bottom: 100px;
  }
  .numbers {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }
  :global(.mark-influence .numbers > div) {
    width: 47%;
  }
  .items {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .item-wrap {
    width: 180px;
  }
  @media only screen and (min-width: 440px) {
    .numbers {
      justify-content: center;
    }
    :global(.mark-influence .numbers > div) {
      margin: 20px;
    }
  }
  @media only screen and (min-width: 800px) {
    .block1 {
      display: flex;
    }
    .video {
      width: 47%;
    }
    .text-content {
      width: 53%;
      padding-right: 10%;
    }
    :global(.mark-influence .numbers > div) {
      margin: 0;
    }
    :global(.mark-influence .numbers > div:first-child) {
      margin-right: 20px;
    }
    .numbers,
    .items {
      justify-content: flex-start;
    }
    .items {
      text-align: left;
    }
    .iframe-wrap {
      margin-top: 0;
    }
  }
  @media only screen and (min-width: 960px) {
    .video {
      width: 57%;
    }
    .text-content {
      width: 43%;
      padding-right: 10%;
    }
    .iframe-wrap {
      margin-bottom: 19px;
    }
    .p1 {
      margin-bottom: 35px;
    }
    .numbers {
      margin-bottom: 0;
    }
  }
</style>
