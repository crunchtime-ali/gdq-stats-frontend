import { ADMIN_LOGIN } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
  const auth = event.request.headers.get('Authorization');

  if (auth !== `Basic ${btoa(ADMIN_LOGIN)}`) {
    return new Response('Not authorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': "Basic realm='User Visible Realm', charset='UTF-8'"
      }
    });
  }
  return resolve(event);
};
