<script lang="ts">
  import type { getAdminData$result } from '$houdini';
  import Section from '../../../components/Layout/Section.svelte';
  import EventItem from './EventTypeItem.svelte';

  export let eventTypes: getAdminData$result['getEventTypes'];
</script>

<Section
  title="Event Types"
  dropdownEnabled
  open
>
  <div
    slot="content"
    class="p-5"
  >
    <div class="flex text-base leading-none">
      <div class="flex w-4/6 gap-x-4">
        <div class="w-1/2">Name</div>
        <div class="w-1/2">Description</div>
      </div>
    </div>
    {#each eventTypes as eventType}
      <EventItem
        description={eventType.description}
        id={eventType.id}
        name={eventType.name}
      />
    {/each}
    <EventItem />
  </div>
</Section>
