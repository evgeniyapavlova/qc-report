<script>
  export let name, position, photo;
</script>

<div class="avatar">
  <div
    class="photo"
    style="background-image: url(ASSET_PREFIX/assets/avatars/{photo}.jpg)"
  ></div>
  <div class="text">
    <div class="name">{name}</div>
    <div class="position">{position}</div>
  </div>
</div>

<style>
  .photo {
    width: 87px;
    height: 87px;
    border-radius: 87px;
    margin-right: 15px;
    background-size: 92px 92px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .avatar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-width: 280px;
  }
  .text {
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  .name {
    font-weight: 700;
    margin-bottom: 0;
  }
  .position {
    font-weight: 400;
    max-width: 160px;
  }

  @media only screen and (min-width: 960px) {
    .text {
      font-size: 14px;
      line-height: 17px;
    }
    .position:after {
      width: 70px;
      margin-top: 15px;
    }
    .photo {
      width: 92px;
      height: 92px;
      border-radius: 92px;
      margin-right: 20px;
    }
  }
</style>
