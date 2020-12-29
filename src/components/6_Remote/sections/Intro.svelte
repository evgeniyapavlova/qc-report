<script>
  export let lang;
  import Layout from '../../Layout.svelte';
  import H1_Text_Avatar from '../../H1_Text_Avatar.svelte';
  const gitsis = {
    name: 'Michael Gitsis',
    position: 'Chief of Administration and Group CFO',
    photo: 'gitsis',
  };
  const content = {
    ru: {
      h1: 'Переход на удалённую работу',
      desc:
        'Переход на удаленную работу стал большим челленджем не только для всех сотрудников, которым нужно было привыкать к новым условиям, но и для многих команд, которые сопровождали этот процесс и делали так, чтобы мы продолжали чувствовать себя частью одной большой компании, даже находясь так далеко друг от друга.',
    },
    en: {
      h1: 'Transition to remote work',
      desc:
        'The transition to remote working was a big challenge, not only for all the employees who had to get used to the new environment, but also for the many teams who supported the process and made sure that we continued to feel part of one big company, even when we were so far away from each other.',
    },
  };
</script>

<section>
  <Layout>
    <H1_Text_Avatar
      h1="{content[lang].h1}"
      person="{gitsis}"
      text="{content[lang].desc}"
    />
  </Layout>
</section>

<style>
  section {
    padding-top: 64px;
    padding-bottom: 35px;
  }
  @media only screen and (min-width: 960px) {
    section {
      padding-top: 124px;
      padding-bottom: 105px;
    }
  }
</style>
