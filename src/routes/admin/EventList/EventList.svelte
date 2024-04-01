<script lang="ts">
  import type { getAdminData$result } from '$houdini';
  import Section from '../../../components/Layout/Section.svelte';
  import EventListItem from './EventListItem.svelte';

  export let events: getAdminData$result['getEvents'];
</script>

<Section
  title="events"
  dropdownEnabled
  open
>
  <div
    slot="content"
    class="p-5 text-base leading-none"
  >
    {#each events as event}
      <EventListItem {event} />
    {/each}
  </div>
</Section>
