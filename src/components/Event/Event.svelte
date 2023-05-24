<script lang="ts">
  import type { getCurrentEvent$result } from '$houdini';
  import PageHeader from '../Layout/PageHeader.svelte';
  import EventStats from './EventStats/EventStats.svelte';
  import LiveStats from './LiveStats/LiveStats.svelte';

  export let event: getCurrentEvent$result['getCurrentEvent'];

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
