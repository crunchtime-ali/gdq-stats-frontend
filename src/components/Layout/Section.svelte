<script lang="ts">
  import { Accordion } from 'bits-ui';
  import { slide } from 'svelte/transition';

  export let title: string = '';
  export let dropdownEnabled = false;
  export let open = false;
</script>

<Accordion.Root
  class="border-medium border-2"
  disabled={!dropdownEnabled}
  value={!dropdownEnabled ? title : open ? title : undefined}
>
  <Accordion.Item value={title}>
    <Accordion.Header class="bg-mediumGray ">
      <Accordion.Trigger class="flex w-full flex-row items-center justify-between text-3xl">
        <div class="bg-mediumGray p-2.5 font-cubano text-lg leading-none">
          <h2>{title}</h2>
        </div>
        {#if dropdownEnabled}
          <iconify-icon icon="mdi:keyboard-arrow-down" />
        {/if}
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content transition={slide}>
      <slot name="content" />
      <slot name="footer" />
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
