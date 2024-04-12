<script lang="ts">
  import { page } from '$app/stores';
  import { load_getEventInformation } from '$houdini';
  import type { PageData } from './$houdini';
  import Event from '../../../../components/Event/Event.svelte';


  export let data: PageData;
  $: console.log(data);
  $: ({ getEventInformation } = data);

  const handleFocus = async () => {
    ({ getEventInformation } = await load_getEventInformation({
      variables: {
        input: {
          name: $page.params.name,
          year: $page.params.year,
        },
      },
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
