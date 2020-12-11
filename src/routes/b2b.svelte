<script>
  import Section from '../components/Section.svelte';
  import Layout from '../components/Layout.svelte';
  import Avatar from '../components/Avatar.svelte';
  import Tags from '../components/Tags.svelte';
  import Stages from '../components/B2BPage/Stages.svelte';
  import Goals from '../components/B2BPage/Goals.svelte';
  import DevelopmentB2B from '../components/B2BPage/DevelopmentB2B.svelte';
  import people from '../helpers/people';
  const { golubev, bolotov } = people;
  const tags = [
    'Admin platform',
    'Affiliate',
    'Android',
    'Billing',
    'Chats',
    'Client services',
    'Compliance Development',
    'Customer Acquisition',
    'Desktop QA',
    'GL core',
    'Infrastructure',
    'iOS',
    'Ops',
    'Quotes',
    'Root',
    'System Architecture',
    'Translation',
    'Web',
  ];
</script>

<Layout>
  <Section>
    <h1>Создание B2B-бизнеса</h1>
    <h2>Холдинг <span>Quadcode</span></h2>
    <div class="flex">
      <div class="wrap-avatar">
        <Avatar {...golubev} />
      </div>
      <h4>
        В Mission Action Plan в 2019 году топ-менеджмент компании определил
        вектор развития до 2022 года. Миссия и план, заложенные тогда,
        превратились в цели: развить B2B-бизнес, подготовить готовые
        бизнес-решения по White Label — и к 2022 году иметь первых клиентов.
      </h4>
    </div>
    <Stages />
    <p class="p-goals">
      Для достижения целей, которые определил топ-менеджмент компании, отдел
      Legal проделал большую работу по формированию холдинга и правовой защите
      бренда Quadcode:
    </p>
    <Goals />
    <h2 style="max-width:530px;">
      Развитие B2B направлений SaaS, Banking, Liquidity
    </h2>
    <div class="flex">
      <div class="wrap-avatar wrap-avatar-b2b">
        <Avatar {...bolotov} />
      </div>
      <h4 class="h4-b2b">
        Развитие B2B — это создание сильного IT-бренда, выход на новый рынок,
        новые долгосрочные клиенты, а также новые продукты, привлекательные не
        только для брокеров, но и банков. Мы развиваем три B2B направления:
        SaaS, Banking и Liquidity.
      </h4>
    </div>
    <DevelopmentB2B />
    <div class="tags-wrap">
      <Tags tags="{tags}" />
    </div>
  </Section>
</Layout>

<style>
  .flex h4 {
    margin-top: 40px;
  }
  .p-goals {
    margin: 80px 0 48px;
    max-width: 550px;
  }
  .h4-b2b {
    margin-bottom: 34px;
  }
  .tags-wrap {
    max-width: 760px;
  }
  @media only screen and (min-width: 800px) {
    .flex {
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
    }
    .flex h4 {
      margin-top: 0;
      padding-right: 40px;
    }
  }
  @media only screen and (min-width: 960px) {
    .wrap-avatar {
      position: relative;
      top: -85px;
    }
    .wrap-avatar-b2b {
      top: -130px;
    }
    .p-goals {
      margin-bottom: 60px;
    }
    .h4-b2b {
      margin-bottom: 48px;
    }
  }
</style>
