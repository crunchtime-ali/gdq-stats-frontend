<script lang="ts">
  import type { getAdminData$result } from '$houdini';
  import { Select, type Selected } from 'bits-ui';
  import Section from '../../../components/Layout/Section.svelte';
  import Button from '../../../components/Shared/Button.svelte';
  import { createEvent } from './mutations';

  export let eventTypes: getAdminData$result['getEventTypes'];

  type ArrayElement<ArrayType extends readonly unknown[]> =
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

  type EventType = ArrayElement<getAdminData$result['getEventTypes']>;

  let items: Selected<EventType>[] = [];

  $: if (eventTypes) items = [];
  $: eventTypes.forEach((eventType) =>
    items.push({
      value: eventType,
      label: eventType.name,
    }),
  );

  let scheduleId: number | undefined;
  let eventType: EventType | undefined;
  let key = new Date();
  let isLoading = false;

  const setEventType = (data: Selected<EventType> | undefined) => {
    if (data?.value) {
      eventType = data.value;
    } else {
      eventType = undefined;
    }
  };

  const handleCreateEventClick = async () => {
    isLoading = true;

    if (!scheduleId) {
      alert('Schedule id is required.');
      isLoading = false;
      return false;
    }

    if (!eventType) {
      alert('Event Type is required.');
      isLoading = false;
      return false;
    }

    const res = await createEvent.mutate({
      input: {
        scheduleId,
        eventTypeId: eventType.id,
      },
    });

    isLoading = false;
    if (res.data) {
      scheduleId = undefined;
      eventType = undefined;
      key = new Date();
    }
  };
</script>

<Section title="create new event">
  <div
    slot="content"
    class="p-5"
  >
    <div class="flex text-base leading-none">
      <div class="flex w-4/6 gap-x-4">
        <div class="w-1/2">Schedule ID</div>
        <div class="w-1/2">Event Type</div>
      </div>
    </div>
    <div class="my-5 flex justify-between text-base leading-none">
      <div class="flex w-4/6 justify-between gap-x-4">
        <input
          class="w-3/6 rounded border-2 border-mediumGray p-1.5"
          type="number"
          bind:value={scheduleId}
        />
        {#key key}
          <Select.Root
            {items}
            onSelectedChange={setEventType}
          >
            <Select.Trigger
              class=" inline-flex w-3/6 justify-between rounded border-2 border-mediumGray p-1.5"
              aria-label="Select a theme"
            >
              <Select.Value
                class="text-sm"
                placeholder="Select an Event Type"
              />
              <iconify-icon
                icon="mdi:chevron-up-down"
                class="text-xl"
              />
            </Select.Trigger>
            <Select.Content
              class="border-muted white shadow-popover w-full rounded-xl border bg-white px-1 py-3 outline-none"
              sideOffset={8}
            >
              {#each items as item}
                <Select.Item
                  class="rounded-button data-[highlighted]:bg-muted flex h-10 w-full select-none items-center py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 hover:bg-lightGray"
                  value={item.value}
                  label={item.label}
                >
                  {item.label}
                  <Select.ItemIndicator
                    class="ml-auto"
                    asChild={false}
                  />
                </Select.Item>
              {/each}
            </Select.Content>
            <Select.Input name="eventType" />
          </Select.Root>
        {/key}
      </div>
      <div class="flex justify-end gap-x-4">
        <Button
          {isLoading}
          className="w-32"
          handleClick={handleCreateEventClick}
          >create
        </Button>
      </div>
    </div>
  </div>
</Section>
