<script>
  export let h5,
    p,
    red = false;
</script>

<h5 class="{red ? 'red' : ''}">{@html h5}</h5>
<p>{@html p}</p>

<style>
  h5 {
    margin-bottom: 19px;
  }
</style>
