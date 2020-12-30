<script>
  export let lang;
  import icon1 from './img/partner.svg';
  import icon2 from './img/brand.svg';
  import icon3 from './img/companies.svg';

  import icon4 from './img/brand-1.svg';
  import icon5 from './img/clusters.svg';
  import icon6 from './img/admin.svg';
  import icon7 from './img/clean.svg';

  import Layout from '../Layout.svelte';
  import H2_Text_Avatar from '../H2_Text_Avatar.svelte';
  import H5_p from '../H5_p.svelte';
  import Icon_Title_Text from '../Icon_Title_Text.svelte';
  import List1 from '../List1.svelte';
  import Icon_Number_Text from '../Icon_Number_Text.svelte';
  import Col2 from '../Col2_6_5.svelte';
  const icons = [icon1, icon2, icon3];
  const icons2 = [icon4, icon5, icon6, icon7];
  const numbers = [3, 4, 7];
  const content = {
    ru: {
      h2: 'Усовершенствование платформы',
      h4:
        'В рамках цели по созданию B2B-бизнеса перед  IT-веткой стояла цель — Усовершенствовать нашу платформу, чтобы мы могли предлагать B2B-клиентам строить брокеров на ее базе, а также привести ее в соответствие к требованиям, предъявляемым к таким системам со стороны регуляторных органов.',
      h5: 'Новый взгляд на старую идею',
      p:
        'На заре создания платформы и построения брокера IQ Option в архитектуру системы была заложена возможность реализовывать несколько брокеров, однако оказалась не востребована. Со временем ее начали убирать, и вот теперь нам предстояло вернуться к проектированию этой идеи и подойти здесь качественно по-новому.<br /><br />Чтобы реализовать это были проанализированы горы исходного кода, переработаны тонны функциональностей и исправлено множество неучтенных проблем.',
      items: ['B2B клиента', 'бренда', 'компаний'],
      h5_2: 'Мы проработали архитектуру, инфраструктуру и вопрос безопасности:',
      titles: [
        'Новые бренды',
        'Сегрегация данных',
        'Новая админка',
        'Технический долг',
      ],
      texts: [
        'У нас в системе появились бренды, компании и регуляции',
        'Сегрегировали данные в ключевых сервисах: теперь в них все разделяется по компаниям',
        'Мы создали новую админку специально для B2B-клиентов и начали работу над разграничением прав доступа',
        'Начали перерабатывать дикое legacy с is_regulated, пронизывающее всю систему. Теперь в системе есть не только CySEC',
      ],
    },
    en: {
      h2: 'Improving our platform',
      h4:
        'As part of the goal of building a B2B business, the IT branch had the goal of improving our platform so that we could offer B2B clients to build brokers on it, and bring it in line with the requirements of such systems from the regulatory authorities.',
      h5: 'A new look at an old idea',
      p:
        'In&nbsp;the early days of&nbsp;the platform and the building of&nbsp;the IQ&nbsp;Option broker, the system&rsquo;s architecture included the ability to&nbsp;implement multiple brokers, but it&nbsp;wasn&rsquo;t in&nbsp;demand. Over time, it&nbsp;began to&nbsp;be&nbsp;removed, and now we&nbsp;had to&nbsp;go&nbsp;back to&nbsp;designing this idea and approach it&nbsp;in&nbsp;a&nbsp;qualitatively new way.<br /><br />To&nbsp;realise this, mountains of&nbsp;source code have been analysed, tons of&nbsp;functionality has been reworked and many unaccounted for problems have been fixed.',
      items: ['B2B-clients', 'brands', 'companies'],
      h5_2:
        'We&rsquo;ve worked out the architecture, the infrastructure and the security issue:',
      titles: [
        'New brands',
        'Segregated data',
        'New admin area',
        'Technical debt',
      ],
      texts: [
        'We&rsquo;ve added brands, companies and regulations to&nbsp;the system.',
        'We segregated data in key services: everything is now segregated by company.',
        'We created a new admin area specifically for B2B clients and have started work on access rights.',
        'The wild legacy with is_regulated that permeates the whole system has been reworked. It&rsquo;s not just CySEC that&rsquo;s in&nbsp;the system now.',
      ],
    },
  };
</script>

<H2_Text_Avatar
  person="{{ name: 'Aleksandr Ivanov', position: 'Chief of System Architecture', photo: 'ivanov' }}"
  h2="{content[lang].h2}"
  text="{content[lang].h4}"
/>
<Col2>
  <div slot="right" class="content">
    <H5_p red="{true}" h5="{content[lang].h5}" p="{content[lang].p}" />
  </div>
  <div slot="left" class="list">
    {#each content[lang].items as item, index}
      <div class="item-wrap">
        <Icon_Number_Text
          title="{numbers[index]}"
          text="{item}"
          icon="{icons[index]}"
        />
      </div>
    {/each}
  </div>
</Col2>

<h5>{@html content[lang].h5_2}</h5>
<List1
  icons="{icons2}"
  titles="{content[lang].titles}"
  texts="{content[lang].texts}"
/>

<style>
  h5 {
    margin-bottom: 115px;
  }
  .content {
    margin-top: 125px;
  }
  .list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    margin: 115px 0;
  }
  .item-wrap {
    width: 33%;
  }
  @media only screen and (min-width: 960px) {
    .list {
      margin-top: 160px;
			margin-bottom: 0;
    }
    h5 {
			margin: 105px 0 85px;
			width: 50%;
    }
  }
</style>
