<script>
  import belarusIcon from '../img/belarus.svg';
  import brazilIcon from '../img/brazil.svg';
  import colombiaIcon from '../img/colombia.svg';
  import costaRikaIcon from '../img/costa-rica.svg';
  import cyprusIcon from '../img/cyprus.svg';
  import indonesiaIcon from '../img/indonesia.svg';
  import italy from '../img/italy.svg';
  import kazakhstan from '../img/kazakhstan.svg';
  import mexico from '../img/mexico.svg';
  import pakistan from '../img/pakistan.svg';
  import portugal from '../img/portugal.svg';
  import russia from '../img/russia.svg';
  import southAfrica from '../img/south-africa.svg';
  import thailand from '../img/thailand.svg';
  import turkey from '../img/turkey.svg';
  import ukraine from '../img/ukraine.svg';
  import vietnam from '../img/vietnam.svg';

  const countries = [
    { name: 'Belarus', icon: belarusIcon, count: 6 },
    { name: 'Brazil', icon: brazilIcon, count: 9 },
    { name: 'Colombia', icon: colombiaIcon, count: 12 },
    { name: 'Costa Rica', icon: costaRikaIcon, count: 1 },
    { name: 'Cyprus', icon: cyprusIcon, count: 1 },
    { name: 'Indonesia', icon: indonesiaIcon, count: 3 },
    { name: 'Italy', icon: italy, count: 1 },
    { name: 'Kazakhstan', icon: kazakhstan, count: 1 },
    { name: 'Mexico', icon: mexico, count: 2 },
    { name: 'Pakistan', icon: pakistan, count: 3 },
    { name: 'Portugal', icon: portugal, count: 25 },
    { name: 'Russia', icon: russia, count: 47 },
    { name: 'South Africa', icon: southAfrica, count: 2 },
    { name: 'Thailand', icon: thailand, count: 8 },
    { name: 'Turkey', icon: turkey, count: 2 },
    { name: 'Ukraine', icon: ukraine, count: 2 },
    { name: 'Vietnam', icon: vietnam, count: 2 },
  ];
</script>

<div class="flex">
  {#each countries as country}
    <div class="item">
      <svelte:component this="{country.icon}" />
      <div class="number">{country.count}</div>
      <div class="name">{country.name}</div>
    </div>
  {/each}
</div>

<style>
  .item {
    text-align: center;
    margin-bottom: 44px;
    width: 94px;
  }
  .number {
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    margin: 15px 0 8px;
  }
  .name {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media only screen and (min-width: 750px) {
    .flex {
      display: none;
    }
  }
</style>
