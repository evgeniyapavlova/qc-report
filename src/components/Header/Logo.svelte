<script>
  import Logo from './img/logo_white.svg';
  const scrollToTop = () => {
    const scrollTo = document.querySelector('[data-id="intro"]');
    scrollTo.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
</script>

<div on:click="{scrollToTop}" class="svg-wrap">
  <Logo />
</div>

<style>
  .svg-wrap {
    cursor: pointer;
  }
  :global(.svg-wrap svg) {
    display: block;
  }
</style>
