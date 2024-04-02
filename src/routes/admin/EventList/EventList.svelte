<script lang="ts">
  import type { getAdminData$result } from '$houdini';
  import Section from '../../../components/Layout/Section.svelte';
  import EventListItem from './EventListItem.svelte';
  import CreateEvent from './CreateEvent.svelte';

  export let events: getAdminData$result['getEvents'];
  export let eventTypes: getAdminData$result['getEventTypes'];
</script>

<Section
  title="events"
  dropdownEnabled
  open
>
  <div
    slot="content"
    class="grid gap-y-10 p-5 text-base leading-none"
  >
    <CreateEvent {eventTypes} />
    {#each events as event}
      <EventListItem {event} />
    {/each}
  </div>
</Section>
