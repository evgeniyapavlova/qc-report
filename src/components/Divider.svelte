<script>
  export let src;
  import Layout from './Layout.svelte';
</script>

<Layout>
  <div
    class="divider"
    style="{`background-image: url(ASSET_PREFIX/assets/separators/${src}.jpg)`}"
  ></div>
</Layout>

<style>
  .divider {
    width: 100%;
    padding-bottom: 67%;
    background: no-repeat center center / 100% auto;
		margin-bottom: -20%;
  }
</style>
