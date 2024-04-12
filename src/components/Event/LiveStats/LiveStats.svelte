<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from '../../../routes/previous-events/[year]/[name]/$houdini';
  import Section from '../../Layout/Section.svelte';
  import Chart from './Chart/Chart.svelte';
  import ChartSelection from './ChartSelection.svelte';
  import Pacman from './Pacman/Pacman.svelte';

  $: ({ getEventData } = $page.data as PageData);
  $: ({ fetching } = $getEventData);
</script>

<Section title="live stats">
  <div
    slot="content"
    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
  >
    <ChartSelection />
    <div
      class="col-span-3 mt-5 border-t-[1px] border-lightGray md:col-span-2 md:col-span-5 md:mt-0 md:border-l-[1px] md:border-t-0"
    >
      {#if fetching === true}
        <Pacman />
      {:else}
        <div class="m-3 h-[500px]">
          <Chart />
        </div>
      {/if}
    </div>
  </div>
</Section>
