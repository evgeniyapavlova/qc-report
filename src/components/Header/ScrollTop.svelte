<script>
  import icon1 from './img/up.svg';
  const handleClick = () => {
    const scrollTo = document.querySelector(`[data-id="intro"]`);
    scrollTo.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
</script>

<div class="scroll-top" on:click="{handleClick}">
  <svelte:component this="{icon1}" />
</div>

<style>
  :global(.scroll-top:hover svg path) {
    transition: stroke ease-out 0.2s;
  }
  :global(.scroll-top:hover svg path) {
    stroke: var(--red) !important;
  }

  .scroll-top {
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    left: 40px;
  }
</style>
