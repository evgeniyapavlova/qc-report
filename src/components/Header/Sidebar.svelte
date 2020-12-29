<script>
  export let open = false;
  const menu = [
    {
      name: 'EBITDA',
      code: 'ebitda',
    },

    { name: 'Запуск Margin Forex', code: 'marginForex' },

    {
      name: 'Эпик по MAU выполнен',
      code: 'mau',
    },
    {
      name: 'Создание B2B-бизнеса ',
      code: 'b2b',
    },
    { name: 'Технические и продуктовые апдейты', code: 'updates' },
    { name: 'Переход на удалёнку', code: 'remote' },
    { name: 'Улучшение подходов к менеджменту', code: 'improvement' },
    { name: 'Social responsibility', code: 'responsibility' },
    {
      name: 'Благодарности',
      code: 'thanks',
    },
  ];

  const handleClickMenuItem = (e) => {
    const code = e.target.dataset.code;
    const scrollTo = document.querySelector(`[data-id="${code}"]`);
    scrollTo.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
    open = !open;
  };
</script>

<div class="sidebar" class:open id="sidebar">
  <div class="sidebar-content">
    {#each menu as item}
      <div class="block">
        <div
          on:click="{handleClickMenuItem}"
          class="item"
          data-code="{item.code}"
        >
          {item.name}
        </div>
      </div>
    {/each}
  </div>
</div>

{#if open}
  <style>
    body {
      overflow: hidden;
    }
  </style>
{/if}

<style>
  .sidebar {
    transition: transform ease-out 0.3s;
    background-color: #000;
    color: #666;
    font-size: 16px;
    line-height: 19px;
    min-height: calc(100vh - 70px);
    right: 100%;
    transform: none;
    -webkit-transform: translateZ(101px);
    position: fixed;
    overflow: visible;
    top: 70px;
    width: 100%;
    max-width: 520px;
    z-index: 6;
  }
  .sidebar-content {
    width: 100%;
    overflow-y: scroll;
    height: calc(100vh - 70px);
    padding: 40px 24px 40px 70px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .sidebar.open {
    transform: translateX(100%);
    -webkit-transform: translateX(100%) translateZ(101px);
  }
  .item {
    cursor: pointer;
    margin-bottom: 6px;
    position: relative;
    transition: color ease-out 0.2s;
  }
  .item:hover:before {
    background-color: var(--red);
  }
  .item:hover {
    font-weight: bold;
    color: #fff;
  }

  .item:before {
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
  .block {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 480px) {
    .sidebar {
      padding: 40px 24px 40px;
    }
  }
</style>
