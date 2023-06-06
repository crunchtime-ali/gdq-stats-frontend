<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from '../../../routes/$houdini';
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
    <div class="col-span-5 border-l-[1px] border-lightGray">
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
