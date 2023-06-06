<script lang="ts">
  import { page } from '$app/stores';
  import { EventDataType } from '$houdini';
  import * as echarts from 'echarts';
  import { onDestroy, onMount } from 'svelte';
  import type { PageData } from '../../../../routes/$houdini';
  export let option;
  export let notMerge = false;
  export let replaceMerge = undefined;
  export let lazyUpdate = false;

  $: ({ getCurrentEvent, getEventData } = $page.data as PageData);
  $: chartData = $getEventData.data?.getEventData.eventData ?? [];
  $: chartType = $getEventData.data?.getEventData.eventDataType ?? EventDataType.VIEWERS;
  $: console.log('chartType: ', chartData);

  $: seriesData = chartData.map((entry): [Date, number] => {
    // maxCount = Math.max(maxCount, entry[lowerCaseChartType] ?? 0);
    return [entry?.timestamp!, entry[chartType.toLowerCase()] ?? 0];
  });

  let chart: echarts.ECharts; // our chart instance
  let ref: HTMLDivElement;

  const setOption = () => {
    if (chart && !chart.isDisposed()) {
      chart.setOption(option, notMerge, replaceMerge, lazyUpdate);
    }
  };

  const destroyChart = () => {
    if (chart && !chart.isDisposed()) {
      chart.dispose();
    }
  };

  const makeChart = () => {
    destroyChart();
    chart = echarts.init(ref);
  };

  onMount(() => {
    makeChart();
    setOption();
  });

  onDestroy(() => {
    destroyChart();
  });
</script>

<div
  style="width: 600px;height:400px;"
  bind:this={ref}
/>
