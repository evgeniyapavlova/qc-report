import icon1 from '../img/upgrade.svg';
import icon2 from '../img/preparation.svg';

export const icons = [icon1, icon2];

const content = {
  ru: {
    h3: 'Развитие <span>платформы данных</span>',
    p:
      'За этот год мы сильно продвинулись в развитии платформы данных — Data Platform. Если раньше это был просто GreenPlum, в который происходила репликация данных через возможности логической репликации PG, то сейчас это целый комплекс, позволяющий решать различные задачи: от предоставления отчетности до проведения сложной аналитики.',
    quote:
      'Мы способны обнаруживать проблемы еще до того, как их видят пользователи',
    items: [
      {
        title: 'Апгрейд',
        text:
          'Мы проапгрейдили кластер GP до последней версии. Улучшили инфраструктуру передачи данных в платформу, теперь она надежна и самое важное — мы способны обнаруживать проблемы еще до того, как их видят пользователи.',
      },
      {
        title: 'Подготовка данных',
        text:
          'Были налажены процессы с помощью которых теперь происходит подготовка данных и витрин под конкретные цели, что позволяет выдавать качественный результат для пользователей.',
      },
    ],
  },
  en: {
    h3: 'Development of <span>data platform</span>',
    p:
      'This year, we&nbsp;made great strides in&nbsp;the development of&nbsp;the data platform, the Data Platform. Whereas once it&nbsp;was just GreenPlum with data replication through the logical&nbsp;PG replication capabilities, it&rsquo;s now a&nbsp;whole package, enabling a&nbsp;variety of&nbsp;tasks from reporting to&nbsp;sophisticated analytics.',
    quote:
      'We&rsquo;re able to&nbsp;detect problems before users even see them',
    items: [
      {
        title: 'Upgrade',
        text:
          'We&nbsp;upgraded the&nbsp;GP cluster to&nbsp;the latest version. We&nbsp;improved the data infrastructure into the platform; it&rsquo;s now reliable and most importantly, we&rsquo;re able to&nbsp;detect problems before users even see them.',
      },
      {
        title: 'Data preparing',
        text:
          'Processes have been put in place to prepare data and showcases for specific purposes, thereby producing quality results for users.',
      },
    ],
  },
};

export default content;
