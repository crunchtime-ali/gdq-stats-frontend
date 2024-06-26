import {
  EventDataType,
  type EventDataType$options,
  load_getEventData,
  load_getEventInformation,
  loadAll,
} from '$houdini';
import { CHART_PARAMETER } from '$lib/constants';

export const load = async (event) => {
  const eventDataType =
    (event.url.searchParams.get(CHART_PARAMETER)?.toUpperCase() as EventDataType$options) ??
    EventDataType.VIEWERS;

  return {
    ...(await loadAll(load_getEventInformation({
      event,
    }), load_getEventData({
      event, variables: {
        input: {
          eventDataType,
        },
      },
    }))),
  };
};
