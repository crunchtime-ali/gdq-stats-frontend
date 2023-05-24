<script lang="ts">
  import Dot from './Dot.svelte';

  const size = 25;
</script>

<div class=" flex h-[500px] items-center justify-center">
  <div class="relative [font-size:0]">
    <div
      class="border-primary border-r-transparent"
      style="border-width: {size}px;border-radius: {size}px;"
    />
    <Dot count={2} />
    <Dot count={3} />
    <Dot count={4} />
    <Dot count={5} />
  </div>
</div>

<style>
</style>
