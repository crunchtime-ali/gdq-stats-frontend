<script lang="ts">
  import type { getCurrentEvent$result } from '$houdini';
  import PageHeader from '../Layout/PageHeader.svelte';
  import EventStats from './EventStats/EventStats.svelte';
  import Games from './Games.svelte';
  import LiveStats from './LiveStats/LiveStats.svelte';
  import More from './More.svelte';

  export let event: getCurrentEvent$result['getCurrentEvent'];
  export let games: getCurrentEvent$result['getGames'];
  export let alternativeEvents: getCurrentEvent$result['getAlternativeEvents'];
  export let completedGamesCount: number;

  const {
    year,
    eventType: { description }
  } = event;
</script>

<PageHeader
  title={description}
  details={`${year} stats`}
/>
<EventStats {event} />
<LiveStats />
<Games
  {games}
  {completedGamesCount}
/>
<More {event} {alternativeEvents} />
