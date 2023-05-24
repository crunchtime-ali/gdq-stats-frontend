import { EventDataType, type EventDataType$options } from '$houdini';

type Chart = {
  name: string;
  chart: EventDataType$options;
};

export const charts: Chart[] = [
  {
    name: 'Viewers',
    chart: EventDataType.VIEWERS
  },
  {
    name: 'Donations',
    chart: EventDataType.DONATIONS
  },
  {
    name: 'Donors',
    chart: EventDataType.DONORS
  },
  {
    name: 'Tweets',
    chart: EventDataType.TWEETS
  },
  {
    name: 'Twitch Chats',
    chart: EventDataType.TWITCH_CHATS
  }
];
