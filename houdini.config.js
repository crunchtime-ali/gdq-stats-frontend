/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: (env) => env.PUBLIC_GRAPHQL_API_URL,
    interval: process.env.NODE_ENV === 'development' ? 2 : null
  },
  plugins: {
    'houdini-svelte': {}
  },
  scalars: {
    // the name of the scalar we are configuring
    Date: {
      // the corresponding typescript type (what the typedef generator leaves behind in the response and operation inputs)
      type: 'Date',
      // turn the api's response into that type
      unmarshal(val) {
        const date = new Date(val).toISOString();
        return date;
      },
      // turn the value into something the API can use
      marshal(date) {
        return date.getTime();
      }
    }
  }
};

export default config;
