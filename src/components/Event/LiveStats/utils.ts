import type { EventDataType$options, getEventInformation$result } from '$houdini';
import { type Chart, charts } from './chart-definitions';
import dayjs from 'dayjs';

const getChartDefinition = (eventDataType: EventDataType$options): Chart => {
  const chartDefinition = charts.find(chart => chart.chart === eventDataType);

  return chartDefinition || charts[0];
};

const getRunningGame = (games: getEventInformation$result['getGames'], timestamp: Date): string => {
  if (dayjs(games[0].startDate).isAfter(timestamp)) {
    return 'Pre-show';
  }

  if (dayjs(games[games.length - 1].endDate).isBefore(timestamp)) {
    return 'Post-show';
  }

  const game = games.find(g => g.startDate < timestamp && g.endDate > timestamp);
  if (game) {
    return game.name;
  }
  return '';
};

export { getChartDefinition, getRunningGame };