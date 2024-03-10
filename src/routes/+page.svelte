<script lang="ts">
  import { load_getCurrentEvent } from '$houdini';
  import Event from '../components/Event/Event.svelte';
  import type { PageData } from './$houdini';

  export let data: PageData;

  $: ({ getCurrentEvent } = data);

  const handleFocus = async () => {
    ({ getCurrentEvent } = await load_getCurrentEvent({
      policy: 'NetworkOnly'
    }));
  };
</script>

<svelte:window on:focus={handleFocus} />
{#if $getCurrentEvent.data?.getCurrentEvent}
  <Event
    event={$getCurrentEvent.data?.getCurrentEvent}
    games={$getCurrentEvent.data?.getGames}
    completedGamesCount={$getCurrentEvent.data?.getCurrentEvent.games_completed ?? 0}
  />
{/if}
