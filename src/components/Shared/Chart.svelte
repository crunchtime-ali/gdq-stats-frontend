<script lang="ts">
  import type ApexCharts from 'apexcharts';
  import type { ApexOptions } from 'apexcharts';
  import { onDestroy, onMount } from 'svelte';

  export let options: Omit<ApexOptions, 'series'>;
  export let series: ApexOptions['series'];
  $: console.log('series: ', series);

  let ref: HTMLDivElement;
  let chart: ApexCharts;

  $: {
    if (chart) {
      chart.updateOptions({ ...options, series }, true, true);
    }
  }

  onMount(async () => {
    console.log('onmount');
    const ApexCharts = (await import('apexcharts')).default;
    chart = new ApexCharts(ref, { ...options, series });
    chart.render();
  });

  onDestroy(() => {
    console.log('destroy: ');
    chart?.destroy();
  });
</script>

<div bind:this={ref} />
