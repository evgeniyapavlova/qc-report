const content = {
  ru: {
    h5: 'От миссии компании к задачам разработки',
    items: [
      {
        title: 'Mission Action Plan',
        text: 'Общая картина того, что мы хотим достичь',
        refresh: 'Ежегодно',
        responsible: 'CEO',
        caption:
          'Показать миссию компании и то, какие большие шаги мы должны сделать для достижения этой миссии.',
      },
      {
        title: 'Objectives tree',
        text: 'Цели и ключевые результаты',
        refresh: 'Раз в полгода',
        responsible: 'CEO',
        caption:
          'Показать глобальный стратегический план компании и определить ключевые результаты для достижения поставленных целей.',
      },
      {
        title: 'Roadmaps',
        text:
          'Показать долгосрочный план разработки и улучшения продукта. Согласовать продуктовые планы с целями компании.',
        refresh: 'Раз в квартал',
        responsible: 'Product Owner',
        caption:
          'Показать стратегический план развития и улучшения продукта. Согласовать продуктовые планы с целями компании',
      },
      {
        title: 'Конкрети&shy;зировать фичи<br />(1-й этап плани&shy;рования)',
        text:
          'Получить фичи в разработку на следующий квартал с критериями их выполнения',
        refresh: 'Раз в квартал',
        responsible: 'CPO',
        caption:
          'Предоставить подробную и непротиворечивую информацию о фичах, которые будут разрабатываться. Координация требований со всеми заинтересованными сторонами. Определение блокеров.',
      },
      {
        title: 'Оценить фичи<br />(2-й этап плани&shy;рования)',
        text: 'Получить хорошо описанные фичи для анализа и оценки',
        refresh: 'Раз в квартал',
        responsible: 'CPO',
        caption: 'Приоритезировать фичи на следующий квартал.',
      },
      {
        title:
          'Заплани&shy;ровать разработку фичей<br />(3-5-й этапы плани&shy;рования) ',
        text:
          'Планирование нагрузки разработки по фичам с учетом выставленных приоритетов.',
        refresh: 'Раз в квартал',
        responsible: 'Feature Owner',
        caption:
          'Запланировать распределение ресурсов разработки в соответствии с приоритетом фичей. Определить, какие фичи, скорее всего, будут реализованы, а какие точно не будут включены в квартальные планы и не будут сделаны. Определить риски разработки и согласовать план по управлению рисками.',
      },
    ],
  },
  en: {
    h5: 'From company mission to development tasks',
    items: [
      {
        title: 'Mission Action Plan',
        text: 'Big picture what we should achieve',
        refresh: 'Annualy',
        responsible: 'CEO',
        caption:
          'To show propose and mission of the company + what big steps we should take in order to achieve this mission.',
      },
      {
        title: 'Objectives tree',
        text: 'Goals and KRs',
        refresh: 'Once in half year',
        responsible: 'CEO',
        caption:
          'To show the global strategic plan of the company and to put proper KRs to achieve this goals.',
      },
      {
        title: 'Roadmaps',
        text:
          'To show long term plan of product development and evolution. To align product plans with company goals.',
        refresh: 'Quarterly',
        responsible: 'Product Owner',
        caption: '',
      },
      {
        title: 'To elaborate features<br /> (the 1st stage of Dev planning)',
        text:
          'To get features for development for the next quarter with criterias for their implementation',
        refresh: 'Quarterly',
        responsible: 'CPO',
        caption:
          'To provide detailed and consistent information on features going to development. Coordination of requirements with all stakeholders. Definition of implementation blockers.',
      },
      {
        title: 'To score features<br /> (the 2nd stage of Dev planning)',
        text:
          'To get well-elaborated features for analysis and scoring (and a list that could not be worked out to cut off)',
        refresh: 'Quarterly',
        responsible: 'CPO',
        caption: 'To prioritize features for the next quarter.',
      },
      {
        title: 'To plan Dev of features<br /> (Stages 3–5 of Dev planning)',
        text:
          'Scheduling Dev resources occupation by features according to the given priorities.',
        refresh: 'Quarterly',
        responsible: 'Feature Owner',
        caption:
          'To plan development resources according to feature priorities. Indicate what features are likely to be made (commit), and what exactly will not be included in the quarterly plan and will not be done. Identify development risks and submit a risk management plan.',
      },
    ],
  },
};

export default content;

export const captions = {
  ru: { cap1: 'Обновляется', cap2: 'Ответственный' },
  en: { cap1: 'Refresh', cap2: 'Responsible' },
};
