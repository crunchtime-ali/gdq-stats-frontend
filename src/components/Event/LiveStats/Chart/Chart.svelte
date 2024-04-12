<script lang="ts">
  import { page } from '$app/stores';
  import { EventDataType } from '$houdini';
  import type { PageData } from '../../../../routes/$houdini';
  import { charts } from '../chart-definitions';
  import { generateChartOptions } from './generateChartOptions';
  import { useChart } from './useChart';

  $: ({ getEventData } = $page.data as PageData);
  $: chartData = $getEventData.data?.getEventData.eventData ?? [];
  $: chartType = $getEventData.data?.getEventData.eventDataType ?? EventDataType.VIEWERS;

  const snakeToCamel = str =>
    str.toLowerCase().replace(/([-_][a-z])/g, group =>
      group
        .toUpperCase()
        .replace('-', '')
        .replace('_', ''),
    );

  $: seriesData = chartData.map((entry): [number, number] => {
    // @ts-ignore
    return [entry?.timestamp.valueOf(), Math.round(entry[snakeToCamel(chartType)]) ?? 0];
  });

  $: chart = charts.find((c) => c.chart === chartType) ?? charts[0];

  $: chartOptions = generateChartOptions({
    chart,
    seriesData,
  });
</script>

<div use:useChart={chartOptions} />
