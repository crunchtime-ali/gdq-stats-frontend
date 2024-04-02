import { redirect } from '@sveltejs/kit';
import { EventDataType, type EventDataType$options } from '$houdini';
import { CHART_PARAMETER } from '$lib/constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies, url }) => {
  const cookieVal = cookies.get(CHART_PARAMETER);
  const searchParamVal = url.searchParams.get(CHART_PARAMETER);
  const viewersVal = EventDataType.VIEWERS.toLowerCase();
  const eventDataTypes = Object.values(EventDataType);

  if (searchParamVal) {
    // unsupported chart: redirect to first chart
    if (!eventDataTypes.includes(searchParamVal.toUpperCase() as EventDataType$options)) {
      cookies.set(CHART_PARAMETER, viewersVal, { path: '/', httpOnly: false });
      throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${viewersVal}`);
    }

    // supported chart: set cookie before redirecting, if no other cookie exists yet
    // (note: load function is also called while preloading data with no way to tell
    // if the current request is a preload or an actual navigation)
    if (!cookieVal) {
      cookies.set(CHART_PARAMETER, searchParamVal, { path: '/', httpOnly: false });
    }
  } else {
    if (cookieVal) {
      // supported chart in cookie: redirect to chart
      if (eventDataTypes.includes(cookieVal.toUpperCase() as EventDataType$options)) {
        throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${cookieVal}`);
      }

      // unsupported chart in cookie: redirect to first chart
      cookies.set(CHART_PARAMETER, viewersVal, { path: '/', httpOnly: false });
      throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${viewersVal}`);
    } else {
      // no chart in cookie or no cookie: redirect to first chart
      cookies.set(CHART_PARAMETER, viewersVal, { path: '/', httpOnly: false });
      throw redirect(302, `${url.pathname}?${CHART_PARAMETER}=${viewersVal}`);
    }
  }
};
