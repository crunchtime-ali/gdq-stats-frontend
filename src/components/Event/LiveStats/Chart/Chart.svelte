<script lang="ts">
  import { page } from '$app/stores';
  import { EventDataType } from '$houdini';
  import type { PageData } from '../../../../routes/$houdini';
  import { charts } from '../chart-definitions';
  import { generateChartOptions } from './generateChartOptions';
  import { useChart } from './useChart';
  import { getChartDefinition, getRunningGame } from '../utils';
  import dayjs from 'dayjs';


  $: ({ getEventData, getEventInformation } = $page.data as PageData);
  $: chartData = $getEventData.data?.getEventData.eventData ?? [];
  $: chartType = $getEventData.data?.getEventData.eventDataType ?? EventDataType.VIEWERS;
  $: gameData = $getEventInformation.data?.getGames ?? [];
  
  $: seriesData = chartData.map((entry): [number, number] => {
    return [entry?.timestamp.valueOf(), entry.value];
  });

  $: chart = charts.find((c) => c.chart === chartType) ?? charts[0];

  const createTooltip = (options: any): string => {
    const chartDefinition = getChartDefinition(chartType);
    const { timestamp, value } = chartData[options.dataPointIndex];
    return `
        <div
          class="relative border-[1.5px] border-mediumGray text-center w-56">
          <div class="font-bold text-sm h-11 bg-mediumGray font-cubano uppercase">${getRunningGame(gameData, timestamp)}</div>
          <div class="text-primary pt-1 pb-2.5 text-sm">${chartDefinition.name}: ${value}</div>
          <div class="font-light bg-mediumGray text-mediumDarkGray leading-none text-xs py-1">${dayjs(timestamp).format('dddd, MMM D YYYY, h:mm a')}</div>
        </div>
      `;
  };

  $: chartOptions = generateChartOptions({
    chart,
    seriesData,
    createTooltip,
  });
</script>

<div use:useChart={chartOptions} />
