<script lang="ts">
  import type {
    getEventInformation$result,
  } from '$houdini';
  import PageHeader from '../Layout/PageHeader.svelte';
  import EventStats from './EventStats/EventStats.svelte';
  import Games from './Games.svelte';
  import LiveStats from './LiveStats/LiveStats.svelte';
  import More from './More.svelte';
  import Info from './Info.svelte';
  import SectionContainer from '../Layout/SectionContainer.svelte';

  export let event: getEventInformation$result['getEvent'];
  export let games: getEventInformation$result['getGames'];
  export let alternativeEvents: getEventInformation$result['getAlternativeEvents'];
  export let completedGamesCount: number;

  const {
    year,
    eventType: { description },
  } = event;
</script>

<PageHeader
  title={description}
  details={`${year} stats`}
/>
<SectionContainer>
  <EventStats {event} />
  <LiveStats />
  <Games
    {games}
    {completedGamesCount}
  />
  <More
    {event}
    {alternativeEvents}
  />
  <Info />
</SectionContainer>
