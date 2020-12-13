<script>
  import Layout from '../../components/Layout.svelte';
  import Logo from './logo_black.svg';
  import Cubes from './Cubes.svelte';
  import Img2020 from './2020.svelte';
  const menuItems = [
    { name: 'Проекция EBITDA за год' },
    { name: 'Проект года — Margin Forex	' },
    { name: 'Эпик по MAU выполнен' },
    { name: 'Наши первые B2B-клиенты ' },
    { name: 'Технические и продуктовые апдейты' },
    { name: 'Переход на удалёнку' },
    { name: 'Улучшение подходов к менеджменту' },
    { name: 'Social responsibility' },
    { name: 'Благодарности' },
  ];
</script>

<section>
  <div class="wrap">
    <Layout>
      <Logo />
      <div class="caption">ONE YEAR<br /> IN REVIEW</div>
      <div class="menu">
        {#each menuItems as item, index}
          <div class="row {index === 2 && 'active'}">
            <div class="item">{item.name}</div>
            <div class="number">0{index + 1}</div>
          </div>
        {/each}
      </div>
    </Layout>
  </div>
  <Img2020 />
  <Cubes />
</section>

<style>
  section {
    padding: 66px 0;
    position: relative;
    min-height: 100vh;
  }
  .wrap {
    z-index: 2;
  }
  .caption {
    color: rgba(0, 0, 0, 0.06);
    text-transform: uppercase;
    font-size: 60px;
    line-height: 60px;
    font-weight: 700;
    max-width: 250px;
    margin: 30px 0 38px;
  }
  .menu {
    max-width: 300px;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
  }
  .row {
    display: flex;
    position: relative;
  }
  .row:not(.active) {
    color: rgba(50, 62, 72, 0.3);
  }
  .row.active:before {
    content: '';
    display: block;
    background-color: var(--red);
    width: 3px;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -20px;
  }
  .row.active {
    font-weight: 700;
  }
  .row.active .number {
    font-weight: 600;
    color: var(--red);
  }
  .item {
    width: 270px;
    cursor: pointer;
  }
</style>
