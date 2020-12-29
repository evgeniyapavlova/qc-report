<script>
  export let lang;
  import Section from '../Section.svelte';
  import Layout from '../Layout.svelte';
  import Tags from '../Tags.svelte';
  import H1_Text_Avatar from '../H1_Text_Avatar.svelte';
  import H2_Text_Avatar from '../H2_Text_Avatar.svelte';
  import Stages from '../B2BPage/Stages.svelte';
  import Goals from '../B2BPage/Goals.svelte';
  import DevelopmentB2B from '../B2BPage/DevelopmentB2B.svelte';
  import ImprovingPlatform from '../B2BPage/ImprovingPlatform.svelte';
  const golubev = {
    name: 'Vladimir Golubev',
    position: 'Chief of Strategic Finance and Legal',
    photo: 'golubev',
  };
  const bolotov = {
    name: 'Kirill Bolotov',
    position: 'Chief of B2B',
    photo: 'bolotov',
  };
  const tags = [
    'Admin platform',
    'Affiliate',
    'Android',
    'Billing',
    'Chats',
    'Client services',
    'Compliance Development',
    'Customer Acquisition',
    'QA Desktop ',
    'GL core',
    'Infrastructure',
    'iOS',
    'Ops',
    'Quotes',
    'Root',
    'System Architecture',
    'Copywriting',
    'Web solutions development',
  ];
  const content = {
    ru: {
      h1: 'Создание B2B-бизнеса',
      text:
        'В Mission Action Plan в 2019 году топ-менеджмент определил вектор развития компании до 2022 года — иметь развитую систему управления, амбициозные реализуемые цели, EBITDA $500M, растущую базу активных клиентов, юридически и финансово быть готовыми к выходу на IPO. Миссия и план, заложенные тогда, превратились в цели: развить B2B-бизнес и подготовить готовые White Label-решения. Для этого нужно было создать юридическую структуру и новый бренд, из которого и вырастет B2B-направление.',
      goals:
        'Для достижения целей, которые определил топ-менеджмент компании, отдел Legal проделал большую работу по формированию холдинга и правовой защите бренда Quadcode.',
      h2: 'Развитие B2B направлений SaaS, Banking, Liquidity',
      text2:
        'Развитие B2B — это создание сильного IT-бренда, выход на новый рынок, новые долгосрочные клиенты, а также новые продукты, привлекательные не только для брокеров, но и банков. Мы развиваем три B2B направления: SaaS, Banking и Liquidity.',
    },
    en: {
      h1: 'Creation of B2B business',
      text:
        "In the 2019 Mission Action Plan, top management set out the company's development vector until 2022—to have a well-developed management system, ambitious achievable targets, $500M EBITDA, a growing base of active clients, and be legally and financially ready for an IPO. The mission and plan laid out then evolved into goals: to develop a B2B business and prepare ready-made White Label solutions. To do this, it was necessary to create a legal structure and a new brand, from which the B2B line of business will then grow.",
      goals:
        "To achieve the goals set by the company's top management, the Legal department has done a lot of work to form our holding company and to legally protect the Quadcode brand. ",
      h2: 'Developing B2B areas: SaaS, Banking and Liquidity',
      text2:
        "Developing B2B means building a strong IT brand, entering a new market, new long-term clients, and new products that appeal not only to brokers but also to banks. We're developing three B2B areas: SaaS, Banking and Liquidity.",
    },
  };
</script>

<span data-id="b2b"></span>
<Layout>
  <Section>
    <H1_Text_Avatar
      h1="{content[lang].h1}"
      person="{golubev}"
      text="{content[lang].text}"
    />
    <Stages />
    <p class="p-goals">{content[lang].goals}</p>
    <Goals lang="{lang}" />
    <span data-id="saas"></span>
    <div class="h2-wrap">
      <H2_Text_Avatar
        h2="{content[lang].h2}"
        person="{bolotov}"
        text="{content[lang].text2}"
      />
    </div>
    <DevelopmentB2B lang="{lang}" />
    <ImprovingPlatform lang="{lang}" />
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
    margin-top: 100px;
  }
  @media only screen and (min-width: 960px) {
    .p-goals {
      margin-bottom: 60px;
      margin-top: 150px;
    }
    .h2-wrap {
      margin-bottom: 48px;
    }
    .tags-wrap {
      margin-top: 150px;
    }
  }
</style>
