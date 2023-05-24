<script lang="ts">
  import type { EventDataType$options } from '$houdini';
  import { CHART_PARAMETER } from '../../../lib/constants';

  export let activeChart: EventDataType$options;
  export let chart: EventDataType$options;
  export let name: string;
</script>

<a
  data-sveltekit-preload-data
  href={`?${CHART_PARAMETER}=${chart.toLowerCase()}`}
>
  <li
    class={`mt-0.5 px-4 py-2.5 ${
      activeChart.toLowerCase() === chart.toLowerCase() ? 'bg-primary' : 'hover:bg-lightGray'
    }`}
  >
    {name}
  </li></a
>
