<script lang="ts">
  import A from './A.svelte';

  export let title = '';
  export let details: string = '';
</script>

<h1 class="font-cubano text-3xl uppercase leading-normal">
  <A
    href="/"
    className="border-b-2 border-primary">{title}</A
  ><span class="ml-6">{details}</span>
</h1>
