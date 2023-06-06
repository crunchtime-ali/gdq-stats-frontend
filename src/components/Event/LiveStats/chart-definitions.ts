import { EventDataType, type EventDataType$options } from '$houdini';
import { format } from 'd3-format';

const fullNumber = format(',.0f');

export type Chart = {
  name: string;
  chart: EventDataType$options;
  format: ReturnType<typeof format>;
};

export const charts: Chart[] = [
  {
    name: 'Viewers',
    chart: EventDataType.VIEWERS,
    format: fullNumber
  },
  {
    name: 'Donations',
    chart: EventDataType.DONATIONS,
    format: format('$,.2s')
  },
  {
    name: 'Donations per minute',
    chart: EventDataType.DONATIONS_PER_MINUTE,
    format: format('$,.2s')
  },
  {
    name: 'Donors',
    chart: EventDataType.DONORS,
    format: fullNumber
  },
  {
    name: 'Tweets',
    chart: EventDataType.TWEETS,
    format: fullNumber
  },
  {
    name: 'Tweets per minute',
    chart: EventDataType.TWEETS_PER_MINUTE,
    format: fullNumber
  },
  {
    name: 'Twitch Chats',
    chart: EventDataType.TWITCH_CHATS,
    format: fullNumber
  },
  {
    name: 'Twitch Chats per minute',
    chart: EventDataType.TWITCH_CHATS_PER_MINUTE,
    format: fullNumber
  }
];
