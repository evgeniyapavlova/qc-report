<script>
  import Section from '../Section.svelte';
  import Layout from '../Layout.svelte';
  import Tags from '../Tags.svelte';
  import H1_Text_Avatar from '../H1_Text_Avatar.svelte';
  import H2_Text_Avatar from '../H2_Text_Avatar.svelte';
  import Stages from '../B2BPage/Stages.svelte';
  import Goals from '../B2BPage/Goals.svelte';
  import DevelopmentB2B from '../B2BPage/DevelopmentB2B.svelte';
  import people from '../../helpers/people';
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

<span data-id="b2b"></span>
<Layout>
  <Section>
    <H1_Text_Avatar
      h1="Создание B2B-бизнеса"
      person="{golubev}"
      text="В Mission Action Plan в 2019 году топ-менеджмент компании определил
        вектор развития до 2022 года. Миссия и план, заложенные тогда,
        превратились в цели: развить B2B-бизнес, подготовить готовые
        бизнес-решения по White Label — и к 2022 году иметь первых клиентов."
    />
    <Stages />
    <p class="p-goals">
      Для достижения целей, которые определил топ-менеджмент компании, отдел
      Legal проделал большую работу по формированию холдинга и правовой защите
      бренда Quadcode:
    </p>
    <Goals />
    <span data-id="saas"></span>
    <div class="h2-wrap">
      <H2_Text_Avatar
        h2="Развитие B2B направлений SaaS, Banking, Liquidity"
        person="{bolotov}"
        text="Развитие B2B — это создание сильного IT-бренда, выход на новый рынок,
        новые долгосрочные клиенты, а также новые продукты, привлекательные не
        только для брокеров, но и банков. Мы развиваем три B2B направления:
        SaaS, Banking и Liquidity."
      />
    </div>
    <DevelopmentB2B />
    <div class="tags-wrap">
      <Tags tags="{tags}" />
    </div>
  </Section>
</Layout>

<style>
  .p-goals {
    margin: 80px 0 48px;
    max-width: 550px;
  }
  .h2-wrap {
    padding-top: 80px;
    margin-bottom: 34px;
  }
  .tags-wrap {
    max-width: 760px;
  }
  @media only screen and (min-width: 960px) {
    .p-goals {
      margin-bottom: 60px;
    }
    .h2-wrap {
      margin-bottom: 48px;
    }
  }
</style>
