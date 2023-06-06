<script lang="ts">
  import { preloadData } from '$app/navigation';
  import type { EventDataType$options } from '$houdini';
  import { onMount } from 'svelte';
  import { CHART_PARAMETER } from '../../../lib/constants';

  export let activeChart: EventDataType$options;
  export let chart: EventDataType$options;
  export let name: string;

  const href = `?${CHART_PARAMETER}=${chart.toLowerCase()}`;

  onMount(() => {
    preloadData(href);
  });
</script>

<a
  data-sveltekit-preload-data
  {href}
>
  <li
    class={`mt-0.5 px-4 py-2.5 ${
      activeChart.toLowerCase() === chart.toLowerCase() ? 'bg-primary' : 'hover:bg-lightGray'
    }`}
  >
    {name}
  </li></a
>
