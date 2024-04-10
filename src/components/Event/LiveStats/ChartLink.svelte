<script lang="ts">
  import { goto, preloadData } from '$app/navigation';
  import type { EventDataType$options } from '$houdini';
  import { onMount } from 'svelte';
  import Cookies from 'js-cookie';

  import { CHART_PARAMETER } from '$lib/constants';

  export let activeChart: EventDataType$options;
  export let chart: EventDataType$options;
  export let name: string;

  const href = `?${CHART_PARAMETER}=${chart.toLowerCase()}`;

  const navigate = () => {
    Cookies.set(CHART_PARAMETER, chart.toLowerCase(), { path: '/' });
    goto(href, {
      noScroll: true,
    });
  };

  onMount(() => {
    preloadData(href);
  });
</script>

<li
  class={`mt-0.5 px-4 py-2.5 ${
    activeChart.toLowerCase() === chart.toLowerCase()
      ? 'bg-primary text-darkGray'
      : 'text-mediumDarkGray hover:bg-lightGray'
  }`}
>
  <button
    on:click={navigate}
    class="w-full text-left"
  >
    {name}
  </button>
</li>
