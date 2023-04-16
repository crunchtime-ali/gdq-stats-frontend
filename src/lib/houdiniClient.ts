import { GRAPHQL_API_URL } from '$env/static/private';
import { HoudiniClient } from '$houdini';

export const houdiniClient = new HoudiniClient({
  url: GRAPHQL_API_URL
});
