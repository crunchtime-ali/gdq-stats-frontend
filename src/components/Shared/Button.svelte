<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';
  import Spinner from './Spinner.svelte';

  export let handleClick: MouseEventHandler<HTMLButtonElement>;
  export let isLoading = false;
  export let className: string = '';
</script>

<button
  class={`rounded border-2 border-mediumGray px-3 py-1.5 font-cubano text-secondary hover:text-secondary-hover ${className}`}
  on:click={handleClick}
>
  {#if isLoading}
    <Spinner />
  {:else}
    <slot />
  {/if}
</button>
