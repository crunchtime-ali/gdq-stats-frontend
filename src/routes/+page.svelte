<script lang="ts">
  import { load_getEventInformation } from '$houdini';
  import Event from '../components/Event/Event.svelte';
  import type { PageData } from './$houdini';

  export let data: PageData;

  $: ({ getEventInformation } = data);

  const handleFocus = async () => {
    ({ getEventInformation } = await load_getEventInformation({
      policy: 'NetworkOnly',
    }));
  };
</script>

<svelte:window on:focus={handleFocus} />
{#if $getEventInformation.data?.getEvent}
  <Event
    event={$getEventInformation.data?.getEvent}
    games={$getEventInformation.data?.getGames}
    completedGamesCount={$getEventInformation.data?.getEvent.completedGames ?? 0}
    alternativeEvents={$getEventInformation.data?.getAlternativeEvents}
  />
{/if}
