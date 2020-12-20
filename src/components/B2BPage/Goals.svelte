<script>
  const goals = [
    {
      icon: 'ASSET_PREFIX/assets/b2b/goal1.jpg',
      title: 'Товарный знак',
      text:
        'Для достижения целей, которые определил топ-менеджмент компании, отдел Legal проделал большую работу по формированию холдинга и правовой защите бренда Quadcode. В 2020 году мы зарегистрировали товарный знак в России, Европейском союзе, Гонконге и в других странах, провели юридический ребрендинг компаний.',
    },
    {
      icon: 'ASSET_PREFIX/assets/b2b/goal2.jpg',
      title: 'Открытие офиса',
      text:
        'Оказали юридическую поддержку при открытии офиса на Гибралтаре и трудоустройстве сотрудников.',
    },
    {
      icon: 'ASSET_PREFIX/assets/b2b/goal3.jpg',
      title: 'Расширение лицензий',
      text:
        'Также мы подали документы на расширение лицензий в финансовые регуляторы Соединенного Королевства и Австралии.',
    },
    {
      icon: 'ASSET_PREFIX/assets/b2b/goal4.jpg',
      title: 'Надежные банки',
      text:
        'Ко всему прочему, отдел Legal обеспечил группу наших компаний надежными банками в разных юрисдикциях.',
    },
  ];
</script>

<div class="goals">
  {#each goals as goal}
    <div class="item">
      <img src="{goal.icon}" alt="" />
      <h5>{goal.title}</h5>
      <p>{goal.text}</p>
    </div>
  {/each}
</div>

<style>
  .goals {
    padding-bottom: 80px;
  }
  p {
    max-width: 306px;
    margin: 0 auto;
  }
  .item {
    text-align: center;

    margin: 0 auto 60px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  h5 {
    margin-top: 18px;
    margin-bottom: 13px;
  }
  @media only screen and (min-width: 700px) {
    .goals {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      width: 50%;
    }
  }
  @media only screen and (min-width: 960px) {
    .item {
      width: 25%;
      text-align: left;
    }
    p {
      max-width: 218px;
      margin-left: 0;
    }
    h5 {
      margin-bottom: 15px;
    }
  }
</style>
