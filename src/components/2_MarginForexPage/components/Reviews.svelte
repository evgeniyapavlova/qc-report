<script>
  export let lang;
  import icon1 from '../img/smile.svg';
  import icon2 from '../img/interface.svg';
  import icon3 from '../img/spread.svg';
  import icon4 from '../img/ok.svg';
  import H5_p from '../../H5_p.svelte';
  import Icon_Number_Text from '../../Icon_Number_Text.svelte';
  const content = {
    ru: {
      title: 'Отзывы пользователей',
      desc:
        'В ходе релиза мы задавали клиентам вопросы о том, нравится ли им наша новая платформа. Нам важно было получить обратную связь — насколько она удобна в использовании и есть ли что-то, что мы можем улучшить. За время релиза мы опросили 420 человек.',
      list: [
        'Общая удовлетворенность',
        'Простота и удобство использования нового пользовательского интерфейса',
        'Удовлетворенность спредами',
        'Готовность продолжать использовать наш Margin Forex',
      ],
      reviews: [
        'Гораздо проще пользовательский интерфейс, чем у других Forex-брокеров',
        'Мне нравится новая вкладка портфеля',
        'Здесь легко открывать и контролировать сделки',
        'Очень динамичный по сравнению с другими приложениями',
      ],
    },
    en: {
      title: 'Feedback from our clients',
      desc:
        'During the release we&nbsp;asked customers if&nbsp;they liked our new platform. It&nbsp;was important for&nbsp;us to&nbsp;get feedback&nbsp;&mdash; how user-friendly it&nbsp;was and whether there was anything we&nbsp;could improve. We&nbsp;interviewed 420 people over the course of&nbsp;the release.',
      list: [
        'Overall Satisfaction',
        'Easy and usability of the new UI',
        'Satisfaction with spreads',
        'Ready to continue using our Margin Forex',
      ],
      reviews: [
        "It's easy to open and monitor trades",
        'I like the new portfolio tab',
        'Much easier to use UI than other Forex brokers',
        'Very dynamic compared to other applications',
      ],
    },
  };
  const reviewsEmoji = [
    'ASSET_PREFIX/assets/emoji/emoji1.jpg',
    'ASSET_PREFIX/assets/emoji/emoji2.jpg',
    'ASSET_PREFIX/assets/emoji/emoji3.jpg',
    'ASSET_PREFIX/assets/emoji/emoji4.jpg',
  ];
  const list = [
    { icon: icon1, title: '7,8' },
    {
      icon: icon2,
      title: '8,0',
    },
    { icon: icon3, title: '7,0' },
    {
      icon: icon4,
      title: '7,8',
    },
  ];
</script>

<div class="wrap">
  <div class="content">
    <div class="text-cont">
      <H5_p h5="{content[lang].title}" p="{content[lang].desc}" />
    </div>
    <div class="list">
      {#each content[lang].list as item, index}
        <div class="item">
          <Icon_Number_Text
            icon="{list[index].icon}"
            text="{item}"
            title="{list[index].title}"
          />
        </div>
      {/each}
    </div>
  </div>
  <div class="reviews">
    {#each content[lang].reviews as item, index}
      <div class="review">
        {#if index % 2 === 0}
          <img
            class="bgr"
            alt="Bubble"
            src="ASSET_PREFIX/assets/margin_forex/bubble_right.jpg"
          />
        {:else}
          <img
            alt="Bubble"
            class="bgr"
            src="ASSET_PREFIX/assets/margin_forex/bubble_left.jpg"
          />
        {/if}

        <span>{item} </span>
        <img class="emoji" src="{reviewsEmoji[index]}" alt="" />
      </div>
    {/each}
  </div>
</div>

<style>
  .wrap {
    margin-top: 80px;
  }
  .list {
    text-align: center;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .reviews {
    margin-top: 55px;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  .review {
    margin-bottom: 30px;
    color: rgba(50, 62, 72, 0.5);
    position: relative;
  }
  .review span {
    position: relative;
  }
  .bgr {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .review:nth-child(odd) {
    padding: 16px 41px 18px 23px;
  }
  .review:nth-child(2),
  .review:nth-child(3) {
    max-width: 280px;
  }
  .review:nth-child(2) {
    margin-right: 0;
    margin-left: auto;
  }
  .review:nth-child(even) {
    padding: 16px 23px 18px 61px;
  }
  .item {
    width: 190px;
    margin-bottom: 27px;
  }
  .emoji {
    position: relative;
    width: 20px;
    margin-bottom: -5px;
  }
  @media only screen and (min-width: 960px) {
    .wrap {
      display: flex;
      margin-top: 120px;
    }
    .reviews {
      width: 33%;
    }
    .list {
      text-align: left;
      justify-content: flex-start;
      margin-top: 55px;
    }
    .reviews {
      margin-top: 0;
    }
    .review {
      margin-bottom: 40px;
    }

    .item {
      width: 160px;
      margin-right: 10px;
    }
    .content {
      padding-right: 20px;
      width: 66%;
    }
    .text-cont {
      width: 87%;
    }
  }
</style>
