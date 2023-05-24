<script>
  export let count = 0;
</script>

<div
  class="dot absolute m-0.5 h-2.5 w-2.5 bg-primary"
  style="animation-delay: {count * 0.25}s;"
/>

<style>
  .dot {
    border-radius: 100%;
    top: 25px;
    left: 100px;
    transform: translate(0, -6.25px);
    animation: 1s linear infinite normal both running dot;
  }
  @keyframes dot {
    75% {
      opacity: 0.7;
    }
    100% {
      transform: translate(-100px, -6.25px);
    }
  }
</style>
