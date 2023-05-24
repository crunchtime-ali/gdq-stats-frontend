import { redirect } from '@sveltejs/kit';
import { EventDataType, type EventDataType$options } from '../../$houdini';
import { CHART_PARAMETER } from '../lib/constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, url }) => {
  const cookieVal = cookies.get(CHART_PARAMETER);
  const searchParamVal = url.searchParams.get(CHART_PARAMETER);
  const viewersVal = EventDataType.VIEWERS.toLowerCase();
  const eventDataTypes = Object.values(EventDataType);

  if (searchParamVal) {
    if (!eventDataTypes.includes(searchParamVal.toUpperCase() as EventDataType$options)) {
      cookies.set(CHART_PARAMETER, viewersVal);
      throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${viewersVal}`);
    }

    cookies.set(CHART_PARAMETER, searchParamVal);
  }

  if (!searchParamVal) {
    if (cookieVal) {
      if (eventDataTypes.includes(cookieVal.toUpperCase() as EventDataType$options)) {
        throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${cookieVal}`);
      }

      cookies.set(CHART_PARAMETER, viewersVal);
      throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${viewersVal}`);
    } else {
      cookies.set(CHART_PARAMETER, viewersVal);
      throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${viewersVal}`);
    }
  }
};
