<script>
  export let icon, text;
</script>

<div class="item">
  <svelte:component this="{icon}" />
  <p>{text}</p>
</div>

<style>
  p {
    margin-top: 15px;
  }
</style>
