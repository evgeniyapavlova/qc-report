<script>
  import Carousel from '@beyonk/svelte-carousel';
  import { Carousel as Images1 } from 'svelte-images';

  const { Modal, open, close } = Images1;
  export let imagesSrc = [];
  export let folder = '';

  const images = imagesSrc.map((img) => ({
    thumbnail: `ASSET_PREFIX/assets/photos/${folder}/thumbnails/${img}.jpg`,
    src: `ASSET_PREFIX/assets/photos/${folder}/${img}.jpg`,
  }));

  const popModal = (idx) => {
    setTimeout(() => {
      open(images, idx);
    }, 0);
  };
</script>

<div class="overflow-h-1">
  <div class="carousel-wrap-1">
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
  .carousel-wrap-1 {
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
  :global(.carousel-wrap-1 button.left),
  :global(.carousel-wrap-1 button.right) {
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
  :global(.carousel-wrap-1 button.right) {
    right: 0 !important;
  }
  :global(.carousel-wrap-1 button.left) {
    left: 0 !important;
  }
  @media only screen and (max-width: 959px) {
    .carousel-wrap-1 {
      margin: 70px 0;
    }
  }
  @media only screen and (max-width: 700px) {
    .carousel-wrap-1 {
      width: 876px;
      margin-left: calc(50% - 438px);
    }
    .overflow-h-1 {
      overflow: hidden;
      margin-left: -24px;
      margin-right: -24px;
    }
  }
  @media only screen and (max-width: 600px) {
    .overflow-h-1 {
      margin-left: -16px;
      margin-right: -16px;
    }
  }
</style>
