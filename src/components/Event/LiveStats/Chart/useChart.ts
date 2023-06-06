import type { ApexOptions } from 'apexcharts';
import { onMount } from 'svelte';
import type { Action, ActionReturn } from 'svelte/types/runtime/action';

let chart: ApexCharts;

export const useChart: Action = (node, options: ApexOptions): ActionReturn => {
  onMount(async () => {
    const ApexCharts = (await import('apexcharts')).default;
    chart = new ApexCharts(node, options);
    chart.render();
  });

  return {
    update: (options: ApexOptions) => {
      chart?.updateOptions(options);
    },
    destroy: () => {
      chart?.destroy();
    }
  };
};
