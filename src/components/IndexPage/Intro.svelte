<script>
  import Layout from '../../components/Layout.svelte';
  import Logo from './logo_black.svg';
  import Cubes from './Cubes.svelte';
  import Img2020 from './2020.svelte';
  const menuItems = [
    { name: 'Проекция EBITDA за год', code: 'ebitda' },
    { name: 'Проект года — Margin Forex', code: 'marginForex' },
    { name: 'Эпик по MAU выполнен', code: 'mau' },
    { name: 'Наши первые B2B-клиенты', code: 'b2b' },
    { name: 'Технические и продуктовые апдейты', code: 'updates' },
    { name: 'Переход на удалёнку', code: 'remote' },
    { name: 'Улучшение подходов к менеджменту', code: 'improvement' },
    { name: 'Social responsibility', code: 'responsibility' },
    { name: 'Благодарности', code: 'thanks' },
  ];
  const scrollDown = (e) => {
    const code = e.currentTarget.dataset.code;
    const scrollTo = document.querySelector(`[data-id="${code}"]`);
    scrollTo.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
</script>

<section>
  <Img2020 />
  <Cubes />
  <div class="wrap">
    <Layout>
      <Logo />
      <div class="caption">ONE YEAR<br /> IN REVIEW</div>
      <div class="menu">
        {#each menuItems as item, index}
          <div data-code="{item.code}" class="row" on:click="{scrollDown}">
            <div class="item">{item.name}</div>
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
    line-height: 34px;
  }
  .row {
    display: flex;
    position: relative;
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
