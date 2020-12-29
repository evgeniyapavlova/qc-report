import icon1 from '../img/kubernetes.svg';
import icon2 from '../img/cloud_infrastructure.svg';
export const icons = [icon1, icon2];

const content = {
  ru: {
    h3: 'Использование <span>облачных ресурсов</span>',
    p:
      'За этот год была проведена колоссальная работа по укрощению Amazon. Теперь мы умеем гибко использовать сервисы Amazon — при этом стоимость их для нас гораздо ниже, чем для обычных клиентов.',
    quote: 'Лучшее качество соединения для наших трейдеров',
    items: [
      {
        title: 'Инфраструктура Amazon',
        text:
          'Автоматизировали работу с инфраструктурой Amazon: теперь поднять виртуальный сервер, развернуть K8S — это просто.',
      },
      {
        title: 'Прямое соединение',
        text:
          'Прямое сетевое соединение между нашим основным дата-центром в Амстердаме и в Amazon открывает широкие возможности. Мы протестировали схему, при которой мы разворачиваем специальные точки присутствия в Бразилии на ресурсах Amazon, что позволяет предоставить лучшее качество соединения для наших трейдеров.',
      },
    ],
  },
  en: {
    h3: 'Using <span>cloud resources</span>',
    p:
      'There&rsquo;s been a&nbsp;tremendous amount of&nbsp;work done this year to&nbsp;tame Amazon. We&rsquo;re now able to&nbsp;use Amazon&rsquo;s services flexibly, at&nbsp;a&nbsp;much lower cost to&nbsp;us than to&nbsp;ordinary customers.',
    quote:
      'This is one of the fantastic developments in the architecture of the system',
    items: [
      {
        title: 'Amazon Infrastructure',
        text:
          'We&nbsp;automated Amazon infrastructure: now it&rsquo;s easy to&nbsp;get a&nbsp;virtual server up&nbsp;and running and deploy K8S.',
      },
      {
        title: 'Direct network connection',
        text:
          'A&nbsp;direct network connection between our main data center in&nbsp;Amsterdam and Amazon offers great opportunities:<br /><br />We&rsquo;ve tested a&nbsp;scheme in&nbsp;which we&nbsp;deploy special points of&nbsp;presence in&nbsp;Brazil on&nbsp;Amazon resources, which allows&nbsp;us to&nbsp;provide the best quality connection for our traders.',
      },
    ],
  },
};

export default content;
