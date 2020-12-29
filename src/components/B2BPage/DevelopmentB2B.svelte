<script>
  export let lang;
  const items = {
    ru: [
      {
        title: 'SaaS',
        img: 'ASSET_PREFIX/assets/b2b/saas.jpg',
        text:
          'Software as a Service — это предоставление программного обеспечения как услуги. В нашем случае мы предоставляем мобильную, десктоп и веб-версии трейдинговой платформы нашим клиентам: банкам, будущим и нынешним брокерам и финтех компаниям.',
        title2: 'Что нужно знать о нашем SaaS-решении?',
        subitems: [
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas1.jpg',
            text: 'Безотказное время работы нашей платформы составляет 99,95%',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas2.jpg',
            text:
              'Мы берем на себя техническое обслуживание, поэтому клиент может не тратить на это свое время.',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas3.jpg',
            text:
              'Наша платформа кастомизируема, то есть настраивается под требования клиента.',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas4.jpg',
            text:
              'Приложения, которые мы предоставляем, отвечают всем требованиям маркетплейсов.',
          },
        ],
      },
      {
        title: 'Banking',
        img: 'ASSET_PREFIX/assets/b2b/banking.jpg',
        text:
          'В 2020 году мы начали работу над созданием банковской инфраструктуры как для нашей группы компаний, так и для наших B2B-клиентов. ',
        title2: 'Почему банкинг?',
        subitems: [
          {
            icon: 'ASSET_PREFIX/assets/b2b/banking1.jpg',
            text:
              'С помощью банков Amaiz, Westiva и Westiva Brazil мы сможем значительно снизить расходы компании на банковские комиссии и биллинг.',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/banking2.jpg',
            text:
              'Обеспечим B2C-клиентов наших брокеров возможностью пополнять баланс платформы и выводить средства с помощью банковской карты.',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/banking3.jpg',
            text:
              'Регулируемые и нерегулируемые партнеры (трафик-провайдеры) получат удобный инструмент для вывода заработанных средств и реинвестирования в рекламу нашей платформы.',
          },
        ],
      },
      {
        title: 'Liquidity',
        img: 'ASSET_PREFIX/assets/b2b/liquidity.jpg',
        text:
          'Одна из целей Quadcode — стать не только разработчиком программного обеспечения, но и поставщиком ликвидности для наших клиентов. Когда компания Quadcode Markets получит лицензию FCA, она сможет предоставлять ликвидность всем компаниям нашей группы, а также всем нашим B2B-клиентам.',
        quote:
          'Мы сделаем все возможное, чтобы каждое направление B2B круто работало, а клиент получал максимально позитивный опыт',
        laptop: 'ASSET_PREFIX/assets/b2b/laptop.jpg',
      },
    ],
    en: [
      {
        title: 'SaaS',
        img: 'ASSET_PREFIX/assets/b2b/saas.jpg',
        text:
          'Software as a Service is the provision of software as a service. In our case, we provide mobile, desktop and web versions of the trading platform to our clients: banks, prospective and current brokers and fintech companies.',
        title2: 'What do you need to know about our SaaS solution?',
        subitems: [
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas1.jpg',
            text: 'Our platform has a 99.95% uptime.',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas2.jpg',
            text:
              "We take care of the tech maintenance, so the customer doesn't have to waste their time on it.",
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas3.jpg',
            text:
              "Our platform is customisable, i.e., it is adjustable to the customer's requirements.",
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/saas4.jpg',
            text:
              'The applications we provide meet all the requirements of marketplaces.',
          },
        ],
      },
      {
        title: 'Banking',
        img: 'ASSET_PREFIX/assets/b2b/banking.jpg',
        text:
          'In 2020, we started working on the banking infrastructure for both our group of companies and our B2B clients.',
        title2: 'Why banking?',
        subitems: [
          {
            icon: 'ASSET_PREFIX/assets/b2b/banking1.jpg',
            text:
              "With the help of Amaiz, Westiva and Westiva Brazil banks, we'll be able to significantly reduce the company's bank fees and billing costs.",
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/banking2.jpg',
            text:
              'We provide B2C clients of our brokers with the ability to replenish the platform balance and withdraw funds via bank card.',
          },
          {
            icon: 'ASSET_PREFIX/assets/b2b/banking3.jpg',
            text:
              'Regulated and unregulated partners (traffic providers) will receive a convenient tool for withdrawing earned funds and reinvesting in advertising on our platform.',
          },
        ],
      },
      {
        title: 'Liquidity',
        img: 'ASSET_PREFIX/assets/b2b/liquidity.jpg',
        text:
          "One of Quadcode's goals is to become not only a software developer, but also a liquidity provider for our customers. When Quadcode Markets receives its FCA licence, it'll be able to provide liquidity to all our group companies as well as all our B2B clients.",
        quote:
          "We'll do everything we can to make each B2B work well and the client experience as positive as possible.",
        laptop: 'ASSET_PREFIX/assets/b2b/laptop.jpg',
      },
    ],
  };
</script>

<div class="development">
  {#each items[lang] as item, index}
    <div class="block block-{index}">
      <img class="img-item" src="{item.img}" alt="" />
      <h3>{item.title}</h3>
      <p class="p-text">{item.text}</p>
      {#if item.title2}
        <h5>{item.title2}</h5>
        <div class="subitems">
          {#each item.subitems as subitem}
            <div class="subitem">
              <img class="img-subitem" src="{subitem.icon}" alt="" />
              <p class="centered">{subitem.text}</p>
            </div>
          {/each}
        </div>
      {:else}
        <img alt="Laptop" class="laptop" src="{item.laptop}" />
        <div class="quote">{item.quote}</div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .block {
    margin-bottom: 90px;
  }
  h5 {
    margin: 50px 0 70px;
  }
  .subitem {
    text-align: center;
    margin-bottom: 50px;
  }
  .img-subitem {
    width: 50px;
    margin-bottom: 18px;
  }
  .laptop {
    margin: 29px auto;
    width: 100%;
    max-width: 400px;
    display: block;
  }
  .centered {
    max-width: 310px;
    margin: 0 auto;
  }
  .img-item {
    height: 262px;
    max-width: 100%;
    margin: 0 auto 20px;
    display: block;
  }
  @media only screen and (min-width: 650px) {
    .img-item {
      margin-left: 0;
    }
  }

  @media only screen and (min-width: 700px) {
    .subitem {
      width: 50%;
    }
    .subitems {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 1000px) {
    .development {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      position: relative;
    }
    .block {
      width: 33%;
    }
    .subitem {
      width: 100%;
      text-align: left;
    }
    .centered,
    .p-text,
    h5 {
      max-width: 250px;
      margin: 0 auto 0 0;
    }
    .laptop {
      bottom: 0;
      position: absolute;
      right: 0;
      width: 50%;
      max-width: 100%;
      z-index: 0;
      margin: 0;
    }
    .block-1 {
      z-index: 1;
    }
    .block-2 {
      z-index: 0;
    }
    .quote {
      margin-top: 50px;
    }
    h5 {
      margin: 62px 0 50px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .laptop {
      right: -50px;
    }
  }
</style>
