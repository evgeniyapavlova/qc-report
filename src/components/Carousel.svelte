<script>
  import { writable } from 'svelte/store';
  import Carousel from '@beyonk/svelte-carousel';
  import { Carousel as Images } from 'svelte-images';

  const { Modal, open, close } = Images;
  export let imagesSrc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  export let folder = 'rwanda';

  const images = imagesSrc.map((img) => ({
    thumbnail: `ASSET_PREFIX/assets/photos/${folder}/thumbnails/${img}.jpg`,
    src: `ASSET_PREFIX/assets/photos/${folder}/${img}.jpg`,
  }));

  const popModal = (idx) =>
    setTimeout(() => {
      open(images, idx);
    }, 0);
</script>

<div class="overflow-h">
  <div class="carousel-wrap">
    <Carousel dots="{false}">
      <span class="control" slot="left-control"></span>
      {#each images as image, i}
        <div class="slide-content slide-content-{i}">
          <img
            {...image}
            src="{image.thumbnail || image.src}"
            alt="{image.alt || ''}"
            on:click="{() => popModal(i)}"
          />
        </div>
      {/each}
      <span class="control" slot="right-control"></span>
    </Carousel>
  </div>
</div>

<Modal />

<style>
  .slide-content {
    padding: 10px;
  }
  .carousel-wrap {
    margin: 100px 0;
  }
  img {
    width: 100%;
    height: auto !important;
    cursor: pointer;
    transition: opacity ease-out 0.2s;
  }
  img:hover {
    opacity: 0.15;
  }
  .control {
  }
  :global(.carousel-wrap button.left),
  :global(.carousel-wrap button.right) {
    top: 10px;
    margin-top: 0;
    height: calc(100% - 20px);
    display: block;
    bottom: auto;
    padding: 0;
    width: 33%;
    background: rgba(245, 245, 245, 0.65);
    cursor: pointer;
  }
  :global(.carousel-wrap button.right) {
    right: 0 !important;
  }
  :global(.carousel-wrap button.left) {
    left: 0 !important;
  }
  @media only screen and (max-width: 959px) {
    .carousel-wrap {
      margin: 70px 0;
    }
  }
  @media only screen and (max-width: 700px) {
    .carousel-wrap {
      width: 876px;
      margin-left: calc(50% - 438px);
    }
    .overflow-h {
      overflow: hidden;
      margin-left: -24px;
      margin-right: -24px;
    }
  }
  @media only screen and (max-width: 600px) {
    .overflow-h {
      margin-left: -16px;
      margin-right: -16px;
    }
  }
</style>
