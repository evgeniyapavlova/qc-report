<script>
  import Sidebar from './Sidebar.svelte';
  import ScrollTop from './ScrollTop.svelte';
  import Burger from './Burger.svelte';
  import Logo from './Logo.svelte';
  import Lang from './Lang.svelte';
  let open = false;
</script>

<header>
  <section>
    <div class="wrap">
      <Burger bind:open />
      <Logo />
    </div>
    <Lang />
  </section>
</header>
<Sidebar bind:open />
<ScrollTop />

<style>
  header {
    background-color: #000000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
  }
  section {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 600px) {
  }
</style>
