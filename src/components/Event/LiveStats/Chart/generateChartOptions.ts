import type { ApexOptions } from 'apexcharts';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { Chart } from '../chart-definitions';
import { dictionary } from '../../../../../.svelte-kit/generated/client/app';

dayjs.extend(duration);

export const generateChartOptions = ({
                                       chart,
                                       seriesData,
                                       createTooltip,
                                     }: {
  chart: Chart;
  seriesData: [number, number][];
  createTooltip(options: any): string
}): ApexOptions => {
  const options: ApexOptions = {
    chart: {
      animations: {
        enabled: false,
      },
      height: 500,
      width: '100%',
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      custom: createTooltip,
    },
    noData: {
      text: 'no data available yet',
    },
    stroke: {
      curve: 'smooth',
      width: 1.5,
      colors: ['#00AEEF'],
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    series: [
      {
        data: seriesData,
        name: 'series 1',
      },
    ],
    yaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      title: {
        text: chart.name,
        style: {
          fontSize: '13px',
          cssClass: 'text-darkGray font-light abc pr-5',
        },
      },
      forceNiceScale: true,
      labels: {
        style: {
          fontSize: '13px',
          cssClass: 'text-mediumGray font-light',
        },
        formatter: (val) => {
          return chart.format(val);
        },
      },
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 7,
      labels: {
        formatter(value, timestamp) {
          const label = dayjs(timestamp).format('ddd, hA');
          return label;
        },
        style: {
          fontSize: '13px',
          cssClass: 'text-mediumGray font-light',
        },
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return options;
};
