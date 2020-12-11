<script>
  export let name, position, photo;
</script>

<div class="avatar">
  <img src="{photo}" alt="" />
  <div class="text">
    <div class="name">{name}</div>
    <div class="position">{position}</div>
  </div>
</div>

<style>
  .avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 280px;
  }
  img {
    width: 87px;
    height: 87px;
    border-radius: 87px;
		margin-right: 15px;
  }
  .text {
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  .name {
    font-weight: 700;
		margin-bottom: 2px;
  }
  .position {
    font-weight: 400;
    max-width: 190px;
  }
  .position:after {
    content: '';
    width: 44px;
    height: 4px;
    background-color: var(--red);
    display: block;
    margin-top: 13px;
  }

  @media only screen and (min-width: 960px) {
    .text {
      font-size: 14px;
      line-height: 17px;
    }
    .name {
      margin-bottom: 5px;
    }
    .position:after {
      width: 70px;
      margin-top: 15px;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 100px;
			margin-right: 20px;
    }
  }
</style>
