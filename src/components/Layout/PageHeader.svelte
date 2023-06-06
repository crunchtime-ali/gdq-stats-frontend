<script lang="ts">
  import A from './A.svelte';

  export let title = '';
  export let details: string = '';
</script>

<div class="flex flex-wrap font-cubano text-3xl uppercase leading-normal">
  <span class="inline-block">
    <A
      href="/"
      className="mr-[25px] border-b-2 border-primary">{title}</A
    >
  </span>
  <span class="inline-block">{details}</span>
</div>

<style>
  @media (max-width: 768px) {
    span {
      font-size: 7vmin;
      margin-left: 5px;
    }
  }
</style>
