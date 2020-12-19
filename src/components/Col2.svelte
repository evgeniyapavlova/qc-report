<div class="flex">
  <div class="content">
    <slot name="right" />
  </div>
  <div class="aside">
    <slot name="left" />
  </div>
</div>

<style>

  @media only screen and (min-width: 960px) {
    .flex {
      display: flex;
      justify-content: space-between;
    }
    .aside {
      width: 310px;
			padding-left: 30px;
    }
    .content {
      max-width: 710px;
      flex-grow: 1;
    }
  }
</style>
