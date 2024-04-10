import { EventDataType, graphql, type EventDataType$options } from '$houdini';
import { CHART_PARAMETER } from '../lib/constants';
import type { getEventDataVariables } from './$houdini';

export const _getEventDataVariables: getEventDataVariables = ({ url }) => {
  const eventDataType =
    (url.searchParams.get(CHART_PARAMETER)?.toUpperCase() as EventDataType$options) ??
    EventDataType.VIEWERS;

  return {
    input: {
      eventDataType,
    },
  };
};

export const _houdini_load = graphql(`
    query getEventData($input: GetEventDataInput!) @cache(policy: CacheOrNetwork) {
        getEventData(input: $input) {
            eventDataType
            eventData {
                timestamp
                viewers
                donors
                donations
                donationsPerMinute
                tweets
                tweetsPerMinute
                twitchChats
                twitchChatsPerMinute
            }
        }
    }
`);
