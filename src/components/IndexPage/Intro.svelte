<script>
  export let lang;
  import Layout from '../../components/Layout.svelte';
  import Logo from './logo_black.svg';
  import Cubes from './Cubes.svelte';
  import Img2020 from './2020.svelte';
  const codes = [
    'ebitda',
    'marginForex',
    'mau',
    'b2b',
    'updates',
    'remote',
    'improvement',
    'responsibility',
    'thanks',
  ];

  const content = {
    ru: {
      items: [
        'Уверенно приближаемся к цели EBITDA',
        'Запуск Margin Forex',
        'Эпик по MAU выполнен',
        'Создание B2B-бизнеса',
        'Повышение технологического уровня компании',
        'Переход на удаленную работу',
        'Улучшение подходов к HR и менеджменту',
        'Благотворительные и эко-инициативы',
        'Благодарности',
      ],
    },
    en: {
      items: [
        "We're steadily approaching our EBITDA target",
        'Launch of Margin Forex',
        'Epic for MAU completed',
        'Creation of B2B business',
        'Raising the technological level of the company',
        'Transition to remote work',
        'Improve approaches to HR and management',
        'Charity and eco-initiatives',
        'Thanks',
      ],
    },
  };
  const scrollDown = (e) => {
    const code = e.currentTarget.dataset.code;
    const scrollTo = document.querySelector(`[data-id="${code}"]`);
    scrollTo.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
</script>

<span data-id="intro"></span>
<section>
  <Img2020 />
  <Cubes />
  <div class="wrap">
    <Layout>
      <Logo />
      <div class="caption">ONE YEAR<br /> IN REVIEW</div>
      <div class="menu">
        {#each content[lang].items as item, index}
          <div data-code="{codes[index]}" class="row" on:click="{scrollDown}">
            <div class="item">{item}</div>
            <div class="number">0{index + 1}</div>
          </div>
        {/each}
      </div>
    </Layout>
  </div>
</section>

<style>
  section {
    padding: 136px 0;
    position: relative;
    min-height: calc(100vh - 70px);
    overflow: hidden;
  }
  .wrap {
    z-index: 2;
    position: relative;
  }
  .caption {
    color: rgba(0, 0, 0, 0.06);
    text-transform: uppercase;
    font-size: 80px;
    line-height: 0.87;
    font-weight: 700;
    max-width: 350px;
    margin: 30px 0 38px;
  }
  .menu {
    max-width: 440px;
    font-weight: 500;
    font-size: 16px;

    line-height: 20px;
  }
  .row {
    display: flex;
    position: relative;
    margin-bottom: 14px;
  }
  .row {
    color: rgba(50, 62, 72, 0.3);
    transition: color ease-out 0.2s;
  }
  .row.active,
  .row:hover {
    color: rgba(50, 62, 72, 1);
  }
  .row:before {
    width: 3px;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -20px;
    content: '';
    display: block;
    transition: background-color ease-out 0.2s;
  }
  .row:hover:before,
  .row.active:before {
    background-color: var(--red);
  }
  .number {
    transition: color ease-out 0.2s, font-weight ease-out 0.2s;
  }
  .row:hover,
  .row.active {
    font-weight: 700;
  }
  .row:hover .number,
  .row.active .number {
    font-weight: 600;
    color: var(--red);
  }
  .item {
    width: 350px;
    cursor: pointer;
  }
  @media only screen and (max-width: 960px) {
    section {
      padding: 100px 0 60px;
    }
  }
  @media only screen and (max-width: 639px) {
    .caption {
      margin-bottom: 450px;
    }
  }
  @media only screen and (max-width: 480px) {
    .caption {
      margin-bottom: 350px;
    }
  }
  @media only screen and (max-width: 400px) {
    .caption {
      font-size: 65px;
    }
  }
</style>
