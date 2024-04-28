<script lang="ts">
  import { page } from '$app/stores';
  import { EventDataType, type EventDataType$options } from '$houdini';
  import { CHART_PARAMETER } from '$lib/constants';
  import ChartLink from './ChartLink.svelte';
  import { charts } from './chart-definitions';

  $: activeChart =
    ($page.url.searchParams.get(CHART_PARAMETER) as EventDataType$options) ?? EventDataType.VIEWERS;
</script>

<ul class="col-span-1 text-sm">
  {#key $page.url.href}
    {#each charts as { name, chart }}
      <ChartLink
        {activeChart}
        {name}
        {chart}
      />
    {/each}
  {/key}
</ul>
